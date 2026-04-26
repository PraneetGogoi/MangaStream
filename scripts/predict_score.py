import sys
import json
import joblib
import numpy as np
import os

# Load model and metadata
model_data = joblib.load('assets/models/score_predictor.joblib')
model = model_data['model']
encoders = model_data['encoders']
feature_cols = model_data['feature_cols']
top_genres = model_data['top_genres']

def predict(data):
    # data is a dict with: members, favorites, scored_by, episodes, duration_min, year, type, source, season, rating, airing, genres (list)
    
    input_row = {}
    input_row['log_members'] = np.log1p(float(data.get('members', 1000)))
    input_row['log_favorites'] = np.log1p(float(data.get('favorites', 10)))
    input_row['log_scored_by'] = np.log1p(float(data.get('scored_by', 500)))
    input_row['episodes'] = float(data.get('episodes', 12))
    input_row['duration_min'] = float(data.get('duration_min', 24))
    input_row['year'] = float(data.get('year', 2024))
    input_row['is_ongoing'] = 1 if data.get('airing') == True else 0
    
    # Encoding
    for col in ['type', 'source', 'season', 'rating']:
        le = encoders[col]
        val = str(data.get(col, 'Unknown'))
        if val not in le.classes_:
            # Fallback to first class or Unknown
            input_row[f'{col}_enc'] = 0
        else:
            input_row[f'{col}_enc'] = le.transform([val])[0]
            
    # Genres
    genres_list = data.get('genres', [])
    for g in top_genres:
        col_name = f"genre_{g.replace(' ','_')}"
        input_row[col_name] = 1 if g in genres_list else 0
        
    # Create feature vector in correct order
    features = [input_row[col] for col in feature_cols]
    
    prediction = model.predict([features])[0]
    return float(prediction)

if __name__ == "__main__":
    try:
        input_data = json.load(sys.stdin)
        result = predict(input_data)
        print(json.dumps({"score": result}))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
