# Utiliser une image optimisée de Node.js
FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier uniquement les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le reste du projet
COPY . .

# Exposer le port utilisé par Nuxt
EXPOSE 3000

# Lancer Nuxt en mode développement
CMD ["npm", "run", "dev"]
