import pandas as pd
from pymongo import MongoClient, UpdateOne
import os
import re
from datetime import datetime

# Load environment variables manually
def load_env(filepath):
    env_vars = {}
    with open(filepath, 'r') as f:
        for line in f:
            if '=' in line and not line.startswith('#'):
                k, v = line.strip().split('=', 1)
                env_vars[k] = v
    return env_vars

env = load_env('.env.local')
MONGODB_URI = env.get('MONGODB_URI')

if not MONGODB_URI:
    print("Error: MONGODB_URI not found in .env.local")
    exit(1)

client = MongoClient(MONGODB_URI)
db = client['anime-discovery'] # Use database from URI or explicit
# Note: The URI usually specifies the DB, but pymongo needs it explicitly sometimes if not in URI path.
# Let's check if the URI has a DB name.
if '/' in MONGODB_URI.split('//')[1]:
    db_name = MONGODB_URI.split('//')[1].split('/')[1].split('?')[0]
    db = client[db_name]

anime_col = db['discoveryanimes']
manga_col = db['discoverymangas']

def parse_list(val):
    if pd.isna(val) or val == 'Unknown' or val == '':
        return []
    return [i.strip() for i in str(val).split('|') if i.strip()]

def to_date(val):
    if pd.isna(val) or val == 'Unknown' or val == '':
        return None
    try:
        return datetime.strptime(str(val), '%Y-%m-%d')
    except:
        return None

def seed_anime():
    print("Seeding Anime...")
    df = pd.read_csv('anime_dataset.csv')
    ops = []
    for _, row in df.iterrows():
        doc = {
            'mal_id': int(row['mal_id']),
            'title': str(row['title']),
            'title_english': str(row['title_english']) if pd.notna(row['title_english']) else None,
            'title_japanese': str(row['title_japanese']) if pd.notna(row['title_japanese']) else None,
            'type': str(row['type']),
            'source': str(row['source']),
            'episodes': int(row['episodes']) if pd.notna(row['episodes']) and str(row['episodes']).isdigit() else 0,
            'status': str(row['status']),
            'airing': str(row['airing']).lower() == 'true',
            'aired_from': to_date(row['aired_from']),
            'aired_to': to_date(row['aired_to']),
            'duration': str(row['duration']),
            'rating': str(row['rating']),
            'score': float(row['score']) if pd.notna(row['score']) else 0.0,
            'scored_by': int(row['scored_by']) if pd.notna(row['scored_by']) else 0,
            'rank': int(row['rank']) if pd.notna(row['rank']) else 0,
            'popularity': int(row['popularity']) if pd.notna(row['popularity']) else 0,
            'members': int(row['members']) if pd.notna(row['members']) else 0,
            'favorites': int(row['favorites']) if pd.notna(row['favorites']) else 0,
            'synopsis': str(row['synopsis']),
            'studios': parse_list(row['studios']),
            'genres': parse_list(row['genres']),
            'themes': parse_list(row['themes']),
            'demographics': parse_list(row['demographics']),
            'main_picture': str(row['image_url']) if 'image_url' in row else '',
            'url': f"https://myanimelist.net/anime/{row['mal_id']}",
            'year': int(row['year']) if pd.notna(row['year']) else None,
            'season': str(row['season']) if pd.notna(row['season']) else None,
            'updatedAt': datetime.now()
        }
        ops.append(UpdateOne({'mal_id': doc['mal_id']}, {'$set': doc}, upsert=True))
        if len(ops) >= 500:
            anime_col.bulk_write(ops)
            ops = []
    if ops:
        anime_col.bulk_write(ops)
    print(f"Finished seeding Anime. Total: {len(df)}")

def seed_manga():
    print("Seeding Manga...")
    df = pd.read_csv('manga_dataset.csv')
    ops = []
    for _, row in df.iterrows():
        doc = {
            'mal_id': int(row['mal_id']),
            'title': str(row['title']),
            'title_english': str(row['title_english']) if pd.notna(row['title_english']) else None,
            'title_japanese': str(row['title_japanese']) if pd.notna(row['title_japanese']) else None,
            'type': str(row['type']),
            'chapters': int(row['chapters']) if pd.notna(row['chapters']) and str(row['chapters']).isdigit() else 0,
            'volumes': int(row['volumes']) if pd.notna(row['volumes']) and str(row['volumes']).isdigit() else 0,
            'status': str(row['status']),
            'publishing': str(row['publishing']).lower() == 'true',
            'published_from': to_date(row['published_from']),
            'published_to': to_date(row['published_to']),
            'score': float(row['score']) if pd.notna(row['score']) else 0.0,
            'scored_by': int(row['scored_by']) if pd.notna(row['scored_by']) else 0,
            'rank': int(row['rank']) if pd.notna(row['rank']) else 0,
            'popularity': int(row['popularity']) if pd.notna(row['popularity']) else 0,
            'members': int(row['members']) if pd.notna(row['members']) else 0,
            'favorites': int(row['favorites']) if pd.notna(row['favorites']) else 0,
            'synopsis': str(row['synopsis']),
            'authors': parse_list(row['authors']),
            'genres': parse_list(row['genres']),
            'themes': parse_list(row['themes']),
            'demographics': parse_list(row['demographics']),
            'main_picture': str(row['image_url']) if 'image_url' in row else '',
            'url': f"https://myanimelist.net/manga/{row['mal_id']}",
            'updatedAt': datetime.now()
        }
        ops.append(UpdateOne({'mal_id': doc['mal_id']}, {'$set': doc}, upsert=True))
        if len(ops) >= 500:
            manga_col.bulk_write(ops)
            ops = []
    if ops:
        manga_col.bulk_write(ops)
    print(f"Finished seeding Manga. Total: {len(df)}")

if __name__ == '__main__':
    seed_anime()
    seed_manga()
