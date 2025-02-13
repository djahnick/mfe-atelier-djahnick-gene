# MFE Atelier - Djahnick GENE

Ce dépôt illustre la création d’un **Micro Frontend** avec **React** et **Webpack Module Federation**.  
Il se compose de deux applications :

- **shell/** : l’application hôte (container) qui va consommer un micro frontend externe.
- **header-mfe/** : le micro frontend qui expose un composant `Header`.

## Arborescence du projet

```
mfe-atelier-djahnick-gene/
├── shell/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── webpack.config.js
└── header-mfe/
    ├── public/
    ├── src/
    ├── package.json
    └── webpack.config.js
```


## Installation

### 1. Cloner le dépôt

```bash
git clone https://github.com/<votre-username>/mfe-atelier-prenom-nom.git
cd mfe-atelier-djahnick-gene
```

### 2. Installer les dépendances

#### a) Shell

```bash
cd shell
npm install
```

#### b) Header MFE

```bash
cd ../header-mfe
npm install
```

## Lancement en mode développement

### 1. Lancer le micro frontend (header-mfe)

Ouvrez un premier terminal :

```bash
cd header-mfe
npm start
```

- L’application se lance sur [http://localhost:3001](http://localhost:3001).
- Le fichier `remoteEntry.js` est accessible sur [http://localhost:3001/remoteEntry.js](http://localhost:3001/remoteEntry.js).

### 2. Lancer le shell

Ouvrez un deuxième terminal :

```bash
cd shell
npm start
```

- Le shell se lance sur [http://localhost:3000](http://localhost:3000).
- Le composant `Header` est chargé depuis le micro frontend.

## Utilisation

1. Dans votre navigateur, ouvrez [http://localhost:3000](http://localhost:3000).
2. Vous devriez voir le texte **"Bienvenue dans le Shell"** suivi de **"Micro Frontend - Header"**.  

