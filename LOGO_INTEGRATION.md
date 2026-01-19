# Instructions pour Intégrer Votre Logo ZAIA

## 📋 Étape 1 : Préparer le Logo

Vous avez besoin de **2 versions** de votre logo :

1. **Logo BLANC** (pour le header avec fond teal)
   - Nom suggéré : `zaia-logo-white.png`
   - Format : PNG avec fond transparent
   - Le symbole "Z" et le texte doivent être en BLANC

2. **Logo TEAL** (pour le footer avec fond blanc)
   - Nom suggéré : `zaia-logo-teal.png`
   - Format : PNG avec fond transparent
   - Le symbole "Z" et le texte doivent être en TEAL (#0A5E6B)

## 📁 Étape 2 : Placer les Fichiers

Copiez vos fichiers logo dans le dossier :
```
/home/user/ZAiA_Website/assets/logo/
```

Vous devriez avoir :
```
assets/
└── logo/
    ├── zaia-logo-white.png    ← Pour le header
    └── zaia-logo-teal.png     ← Pour le footer (optionnel)
```

## ✏️ Étape 3 : Modifier le HTML

### Pour le HEADER :

Ouvrez `index.html` et trouvez la section avec les commentaires (ligne ~25-27).

**Décommentez cette ligne :**
```html
<img src="assets/logo/zaia-logo-white.png" alt="ZAIA Healthcare" style="height: 60px; width: auto;">
```

**Commentez ou supprimez les lignes du SVG temporaire** (lignes 30-41) :
```html
<!-- <div class="logo-symbol">
    <svg>...</svg>
</div>
<div class="logo-text">...</div> -->
```

### Pour le FOOTER :

Si vous avez un logo teal séparé, vous pouvez faire la même chose dans le footer (ligne ~186).

## 🎨 Dimensions Recommandées

- **Hauteur** : 60-80px (s'adapte automatiquement)
- **Format** : PNG avec transparence
- **Résolution** : 300 DPI pour une qualité optimale

## ⚠️ Si Vous N'avez Qu'une Seule Version du Logo

Pas de problème ! Utilisez Photoshop, GIMP, ou un outil en ligne pour :

1. **Créer la version BLANCHE** :
   - Ouvrir votre logo
   - Sélectionner tout le contenu (symbole + texte)
   - Changer la couleur en blanc (#FFFFFF)
   - Exporter en PNG avec fond transparent

2. **Garder la version TEAL** pour le footer

## 🔧 Alternative Rapide (Si pas d'image)

Si vous n'avez pas encore préparé les logos, le SVG blanc temporaire fonctionne pour l'instant. Le header s'affichera correctement avec :
- Fond teal dégradé
- Logo "Z" en blanc
- Texte "ZAIA" et "HEALTHCARE MEDICAL ENG." en blanc
- Menu en blanc

---

**Une fois le logo placé, rafraîchissez la page : http://localhost:8000/index.html**
