# Utiliser l'image officielle de Node.js comme image de base
FROM node:latest

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances du projet
RUN npm install

# Copier tous les fichiers du projet dans le répertoire de travail
COPY . .

# Exposer le port sur lequel le serveur Node.js va écouter
EXPOSE 3000

# Définir la commande pour démarrer l'application
CMD ["node", "app.js"]
