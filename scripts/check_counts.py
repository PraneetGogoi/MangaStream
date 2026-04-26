from pymongo import MongoClient
import os

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
client = MongoClient(MONGODB_URI)
db_name = MONGODB_URI.split('//')[1].split('/')[1].split('?')[0]
db = client[db_name]

print(f"Anime count: {db.discoveryanimes.count_documents({})}")
print(f"Manga count: {db.discoverymangas.count_documents({})}")
