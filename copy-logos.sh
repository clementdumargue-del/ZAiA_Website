#!/bin/bash

# Script pour copier les logos ZAIA dans le bon dossier

echo "=== Script d'Intégration des Logos ZAIA ==="
echo ""

# Créer le dossier si nécessaire
mkdir -p /home/user/ZAiA_Website/assets/logo

echo "Recherche des fichiers de logo..."
echo ""

# Chercher les logos potentiels
echo "Fichiers PNG/JPEG trouvés dans le répertoire home :"
find /home/user -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" | grep -i logo | head -10

echo ""
echo "Pour copier vos logos, utilisez :"
echo ""
echo "  cp /chemin/vers/votre-logo-blanc.png /home/user/ZAiA_Website/assets/logo/zaia-logo-white.png"
echo "  cp /chemin/vers/votre-logo-teal.png /home/user/ZAiA_Website/assets/logo/zaia-logo-teal.png"
echo ""
echo "Fichiers actuellement dans assets/logo/ :"
ls -lh /home/user/ZAiA_Website/assets/logo/ 2>/dev/null || echo "  (vide)"
echo ""
