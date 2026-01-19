# 🎯 GUIDE RAPIDE : Ajouter Vos Logos ZAIA

## ✅ STATUT ACTUEL

Le site est **100% fonctionnel** avec un logo SVG de secours. Voici ce qui a été fait :

- ✅ Header avec dégradé teal (#0A3D4A → #0D5563 → #1A6B7A)
- ✅ Tous les textes du header en BLANC
- ✅ Navigation et boutons configurés
- ✅ Système de fallback automatique (PNG → SVG)
- ✅ Code prêt pour vos logos PNG

## 📁 OÙ PLACER VOS LOGOS

Copiez vos fichiers logo **directement** dans ce dossier :

```
/home/user/ZAiA_Website/assets/logo/
```

### Noms de fichiers EXACTS requis :

```
assets/logo/zaia-logo-white.png    ← Logo BLANC pour le header
assets/logo/zaia-logo-teal.png     ← Logo TEAL pour le footer
```

## 🚀 MÉTHODE RAPIDE : Copier vos logos

Si vos logos sont ailleurs sur votre ordinateur, utilisez ces commandes :

```bash
# Remplacez /chemin/vers/ par le chemin réel de vos fichiers
cp /chemin/vers/votre-logo-blanc.png /home/user/ZAiA_Website/assets/logo/zaia-logo-white.png
cp /chemin/vers/votre-logo-teal.png /home/user/ZAiA_Website/assets/logo/zaia-logo-teal.png
```

### Exemple pratique :
```bash
# Si vos logos sont dans ~/Downloads/
cp ~/Downloads/ZAIA_Logo_White.png /home/user/ZAiA_Website/assets/logo/zaia-logo-white.png
cp ~/Downloads/ZAIA_Logo_Teal.png /home/user/ZAiA_Website/assets/logo/zaia-logo-teal.png
```

## 🎨 SPÉCIFICATIONS DES LOGOS

### Logo BLANC (Header)
- **Couleur** : Blanc pur (#FFFFFF)
- **Format** : PNG avec fond transparent
- **Dimensions** : Hauteur ~60-80px (largeur automatique)
- **Utilisation** : Header avec fond teal gradient

### Logo TEAL (Footer)
- **Couleur** : Teal (#0A5E6B)
- **Format** : PNG avec fond transparent
- **Dimensions** : Hauteur ~60px (largeur automatique)
- **Utilisation** : Footer avec fond blanc

## 🔍 VÉRIFIER QUE VOS LOGOS SONT EN PLACE

```bash
# Exécutez cette commande pour vérifier :
ls -lh /home/user/ZAiA_Website/assets/logo/

# Vous devriez voir :
# zaia-logo-white.png
# zaia-logo-teal.png
```

## 🌐 COMMENT CRÉER UN LOGO BLANC SI VOUS AVEZ SEULEMENT LE TEAL

### Option 1 : Avec GIMP (gratuit)
1. Ouvrir votre logo teal dans GIMP
2. Menu : Couleurs → Luminosité-Contraste
3. Menu : Couleurs → Désaturer → Luminosité
4. Menu : Couleurs → Courbes → Rendre complètement blanc
5. Fichier → Exporter sous → PNG

### Option 2 : Avec ImageMagick (ligne de commande)
```bash
convert logo-teal.png -negate -colorspace gray -fill white -colorize 100% logo-white.png
```

### Option 3 : En ligne
- Utilisez photopea.com (Photoshop en ligne gratuit)
- Ouvrez votre logo
- Sélectionnez tout → Changez la couleur en blanc
- Téléchargez en PNG

## ⚡ APRÈS AVOIR COPIÉ VOS LOGOS

1. **Rafraîchir le navigateur** : http://localhost:8000/index.html
2. Les logos PNG s'afficheront automatiquement
3. Le SVG de secours disparaîtra

## 🔧 DÉPANNAGE

### "Je ne vois pas mes logos"

```bash
# Vérifier que les fichiers existent :
ls -la /home/user/ZAiA_Website/assets/logo/

# Vérifier les permissions :
chmod 644 /home/user/ZAiA_Website/assets/logo/*.png

# Vider le cache du navigateur : Ctrl + Shift + R
```

### "Le SVG s'affiche toujours"

Le système fonctionne ainsi :
1. Essaie de charger le PNG
2. Si échec → Affiche le SVG de secours automatiquement

Si vous voyez le SVG, c'est que le PNG n'est pas au bon endroit ou n'a pas le bon nom.

## 📝 NOTE IMPORTANTE

Le HTML est **déjà configuré** et n'a **pas besoin de modification**. Le système détecte automatiquement vos logos PNG dès qu'ils sont dans le bon dossier.

---

✅ **Le site fonctionne parfaitement avec le SVG de secours.**
✅ **Ajoutez vos PNG quand vous êtes prêt - pas d'urgence !**
