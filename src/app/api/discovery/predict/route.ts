import { NextRequest, NextResponse } from "next/server";
import { spawn } from "child_process";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const scriptPath = path.join(process.cwd(), "scripts", "predict_score.py");
    
    const pythonProcess = spawn("python3", [scriptPath]);
    
    let result = "";
    let error = "";

    return new Promise((resolve) => {
      pythonProcess.stdout.on("data", (data) => {
        result += data.toString();
      });

      pythonProcess.stderr.on("data", (data) => {
        error += data.toString();
      });

      pythonProcess.on("close", (code) => {
        if (code !== 0) {
          console.error("Python Error:", error);
          resolve(NextResponse.json({ error: "Prediction failed", details: error }, { status: 500 }));
        } else {
          try {
            const prediction = JSON.parse(result);
            resolve(NextResponse.json(prediction));
          } catch (e) {
            resolve(NextResponse.json({ error: "Invalid prediction output" }, { status: 500 }));
          }
        }
      });

      pythonProcess.stdin.write(JSON.stringify(data));
      pythonProcess.stdin.end();
    });

  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
