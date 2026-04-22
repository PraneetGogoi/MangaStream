import PusherServer from "pusher";
import PusherClient from "pusher-js";

// Server-side Pusher configuration (used in Server Actions)
export const pusherServer = new PusherServer({
  appId: process.env.PUSHER_APP_ID || "",
  key: process.env.PUSHER_KEY || "",
  secret: process.env.PUSHER_SECRET || "",
  cluster: process.env.PUSHER_CLUSTER || "mt1",
  useTLS: true,
});

// Client-side Pusher configuration
// Note: Key is public, so it's safe to use process.env.NEXT_PUBLIC_PUSHER_KEY
export const getPusherClient = () => {
    return new PusherClient(process.env.NEXT_PUBLIC_PUSHER_KEY || "", {
        cluster: process.env.PUSHER_CLUSTER || "mt1",
    });
};
