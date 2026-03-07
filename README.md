# 🎯 Mon Portfolio — React + Vite

Portfolio personnel construit avec React et Vite. Aucune dépendance lourde, juste React pur.

---

## 🚀 Lancer en local

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev

# 3. Ouvrir http://localhost:5173
```

---

## ✏️ Personnaliser le contenu

**Tout le contenu est dans un seul fichier :**

```
src/data.js
```

Ouvre ce fichier et modifie :
- `meta.name` → ton prénom et nom
- `meta.email` → ton email
- `meta.github` → ton GitHub
- `meta.linkedin` → ton LinkedIn
- `meta.school` → le nom de ton école
- `projects[].github` → les liens vers tes repos
- `about` → ton texte de présentation

---

## 📁 Structure du projet

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Cursor.jsx / .module.css
│   │   ├── Navbar.jsx / .module.css
│   │   ├── Hero.jsx / .module.css
│   │   ├── About.jsx / .module.css
│   │   ├── Projects.jsx / .module.css
│   │   ├── Experience.jsx / .module.css
│   │   ├── Contact.jsx / .module.css
│   │   ├── Footer.jsx / .module.css
│   │   └── SectionHeader.jsx / .module.css
│   ├── hooks/
│   │   ├── useCursor.js
│   │   └── useReveal.js
│   ├── data.js        ← TOUT LE CONTENU ICI
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

---

## 🌐 Déployer gratuitement

### Option 1 — Vercel (recommandé, le plus simple)

1. Va sur [vercel.com](https://vercel.com) et crée un compte gratuit
2. Installe Vercel CLI :
   ```bash
   npm install -g vercel
   ```
3. Dans le dossier du projet :
   ```bash
   vercel
   ```
4. Suis les instructions → ton site est en ligne en 2 minutes !
5. URL style : `ton-nom.vercel.app`

### Option 2 — GitHub Pages

1. Push le code sur GitHub
2. Build le projet :
   ```bash
   npm run build
   ```
3. Dans `vite.config.js`, ajoute `base: '/nom-du-repo/'`
4. Installe gh-pages :
   ```bash
   npm install --save-dev gh-pages
   ```
5. Dans `package.json`, ajoute dans `"scripts"` :
   ```json
   "deploy": "gh-pages -d dist"
   ```
6. Lance :
   ```bash
   npm run build && npm run deploy
   ```
7. Dans les paramètres GitHub du repo → Pages → sélectionne branche `gh-pages`

### Option 3 — Netlify (drag & drop)

1. `npm run build` → génère le dossier `dist/`
2. Va sur [netlify.com/drop](https://app.netlify.com/drop)
3. Glisse le dossier `dist/` → c'est en ligne instantanément !

---

## 💡 Tips pour améliorer ton portfolio

- Ajoute une vraie photo de profil
- Mets les vrais liens GitHub de tes projets
- Pour le projet NDA, ajoute des screenshots de l'interface (sans le code)
- Achète un domaine `.ma` ou `.dev` (~10€/an) pour plus de pro
