# ZAIA Healthcare & Medical Engineering - Site Web

Site web corporatif pour ZAIA Healthcare & Medical Engineering Inc., entreprise spécialisée dans le développement de dispositifs médicaux, l'assurance qualité et l'intégration IA/ML.

## 🎨 Caractéristiques du Design

- **Design moderne et professionnel** adapté au secteur médical
- **Palette de couleurs** : Teal (#0A5E6B), Cyan (#2BBCC4), Navy (#0D3B4C)
- **Typographie** : Montserrat (Google Fonts)
- **Responsive** : Optimisé pour desktop, tablette et mobile
- **Animations** : Transitions fluides et effets au scroll
- **Filigrane "Z"** : Élément de branding subtil sur Hero et Services

## 📁 Structure du Projet

```
zaia-website/
├── index.html                 # Page principale
├── css/
│   ├── variables.css          # Variables CSS (couleurs, fonts, dimensions)
│   ├── style.css              # Styles principaux
│   └── responsive.css         # Media queries pour responsive
├── js/
│   └── main.js                # Interactions JavaScript
├── assets/
│   ├── images/
│   │   └── hero-medical.jpg   # Image de la section Hero
│   └── logo/
└── README.md                  # Ce fichier
```

## 🚀 Sections du Site

1. **Header / Navigation** - Sticky header avec logo et menu
2. **Hero** - Bannière principale avec image médicale et CTA
3. **Our Approach** - Description de l'approche ZAIA
4. **Transition Bar** - Élément visuel de séparation
5. **Services** - 3 services principaux en grille
6. **Call-to-Action** - Section avec dégradé et bouton contact
7. **Footer** - Informations de contact et légales

## 🎨 Palette de Couleurs

| Couleur | Code Hex | Utilisation |
|---------|----------|-------------|
| Teal Profond | `#0A5E6B` | Logo, titres, boutons principaux |
| Cyan Accent | `#2BBCC4` | Fond Hero, accents, liens |
| Bleu Marine | `#0D3B4C` | Fond section services |
| Blanc | `#FFFFFF` | Arrière-plans, texte sur fond sombre |
| Gris Clair | `#E8E8E8` | Séparateurs |
| Texte Gris | `#4A4A4A` | Corps de texte |

## 📱 Responsive Breakpoints

- **Desktop Large** : > 1200px
- **Desktop** : 992px - 1200px
- **Tablet** : 768px - 991px
- **Mobile** : < 768px
- **Small Mobile** : < 480px

## 🔧 Technologies Utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styling avec variables CSS, flexbox, grid
- **JavaScript Vanilla** - Interactions sans framework
- **Google Fonts** - Montserrat

## ✨ Fonctionnalités JavaScript

- Menu mobile avec animation hamburger
- Smooth scroll pour navigation interne
- Animations au scroll (Intersection Observer)
- Effet d'ombre au scroll du header
- Hover effects sur les cartes de services
- Fermeture du menu mobile au clic extérieur

## 🌐 Pour Visualiser le Site

### Option 1 : Ouvrir directement
Double-cliquez sur `index.html` pour l'ouvrir dans votre navigateur.

### Option 2 : Serveur local
```bash
# Avec Python 3
python3 -m http.server 8000

# Avec Node.js (si http-server est installé)
npx http-server -p 8000
```

Puis ouvrir : `http://localhost:8000`

## 📝 Notes de Développement

### Filigrane "Z"
Le filigrane diagonal est implémenté avec CSS (`background-image: repeating-linear-gradient`) pour créer un pattern subtil du symbole "Z" de ZAIA.

- **Hero** : Opacité 12%, couleur blanche
- **Services** : Opacité 6%, couleur blanche (sur fond sombre)

### Dégradé CTA
La section Call-to-Action utilise un dégradé linéaire diagonal :
```css
background: linear-gradient(135deg, #0A5E6B 0%, #2BBCC4 100%);
```

### Images Manquantes
Les images de services utilisent actuellement des placeholders SVG. Pour un site en production, remplacez-les par les images réelles :

1. **Design & Development** : `coders-discussing-about-source-code...jpg`
2. **Quality Assurance** : `AdobeStock_1391313074_Preview.jpeg`
3. **AI/ML Integration** : `AutoDetectionIMG.jpg`

## 📧 Contact

**ZAIA Healthcare and Medical Engineering Inc.**

- 📍 6232 rue Louis-Hémon, Montréal, QC H2G 2K7, Canada
- 📧 contact@za-ia.com
- 📱 +1 (438) 365-3467

---

© 2025 ZAIA - All Rights Reserved.
