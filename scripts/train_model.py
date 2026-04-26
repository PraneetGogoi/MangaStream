import pandas as pd
import numpy as np
import joblib
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import LabelEncoder
import os
import re

# Cleaning functions from notebook
def duration_to_min(s):
    if pd.isna(s): return np.nan
    h = re.search(r"(\d+)\s*hr", s)
    m = re.search(r"(\d+)\s*min", s)
    return int(h.group(1))*60 + (int(m.group(1)) if m else 0) if h else (int(m.group(1)) if m else np.nan)

def parse_list_col(series, sep="|"):
    return series.fillna("").apply(lambda x: [i.strip() for i in x.split(sep) if i.strip()])

print("Loading data...")
anime_raw = pd.read_csv('anime_dataset.csv')

print("Cleaning data...")
anime = anime_raw.copy()
anime["duration_min"] = anime["duration"].apply(duration_to_min)
anime["aired_from"] = pd.to_datetime(anime["aired_from"], errors="coerce")
for col in ["score","scored_by","rank","episodes","duration_min"]:
    anime[col] = anime[col].fillna(anime[col].median())
for col in ["type","source","rating","season","studios","genres","themes","demographics"]:
    anime[col] = anime[col].fillna("Unknown")
anime["year"] = anime["year"].fillna(anime["aired_from"].dt.year)
anime["year"] = anime["year"].fillna(2020) # Fallback

# Feature Engineering
anime_ml = anime.copy()
for col in ["members","favorites","scored_by"]:
    anime_ml[f"log_{col}"] = np.log1p(anime_ml[col])

encoders = {}
for col in ["type","source","season","rating"]:
    le = LabelEncoder()
    anime_ml[f"{col}_enc"] = le.fit_transform(anime_ml[col].astype(str))
    encoders[col] = le

anime_ml["is_ongoing"] = anime_ml["airing"].astype(int)

top_genres = [g for g,_ in pd.Series([g for gl in parse_list_col(anime_raw["genres"]) for g in gl if g]).value_counts().head(10).items()]
for g in top_genres:
    col_name = f"genre_{g.replace(' ','_')}"
    anime_ml[col_name] = parse_list_col(anime_raw["genres"]).apply(lambda gl: int(g in gl))

feature_cols = (
    ["log_members","log_favorites","log_scored_by","episodes","duration_min","year",
     "type_enc","source_enc","season_enc","rating_enc","is_ongoing"]
    + [f"genre_{g.replace(' ','_')}" for g in top_genres]
)

X = anime_ml[feature_cols].fillna(0)
y = anime_ml["score"].fillna(0)

print(f"Training model with {len(X)} samples and {len(feature_cols)} features...")
model = RandomForestRegressor(n_estimators=100, max_depth=12, random_state=42, n_jobs=-1)
model.fit(X, y)

print("Saving model and metadata...")
# Save everything in a single dict or separate files
joblib.dump({
    'model': model,
    'encoders': encoders,
    'feature_cols': feature_cols,
    'top_genres': top_genres
}, 'assets/models/score_predictor.joblib')

print("Model saved to assets/models/score_predictor.joblib")
