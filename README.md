# Jarvis

## Fontend

### Prérequis

Entrer dans le dossier frontend :

```bash
cd frontend
```

Installer les dépendances :

```bash
npm install
```

### Lancement de l'application

Lancer l'application :

```bash
npm run dev
```

Le serveur sera accessible sur : [http://127.0.0.1:3000](http://127.0.0.1:3000)

## Backend

### Prérequis

Entrer dans le dossier backend :

```bash
cd backend
```

Créer et activer un environnement virtuel (venv) :

- Sous Linux :
```bash
python -m venv venv && source venv/bin/activate
```
- Sous Windows :
```bash
python -m venv venv &&  venv/Scripts/activate
```

Installer les dépendances :

```bash
pip install -r requirements.txt
```

Installer playwright:

```bash
python -m playwright install
```

Créez un fichier `.env` et ajoutez :

GOOGLE_API_KEY = "Votre clé d'API"

### Lancement de l'application

Exécuter l'application :

```bash
fastapi dev src/main.py
```

Le serveur sera accessible sur : [http://127.0.0.1:8000](http://127.0.0.1:8000)

### Documentation

Une documentation interactive est disponible :

- **Swagger UI** : [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
- **ReDoc** : [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)
