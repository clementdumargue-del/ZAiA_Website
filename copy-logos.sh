#!/bin/bash

# Script d'aide pour intégrer vos logos ZAIA

echo "╔══════════════════════════════════════════════════════════╗"
echo "║     🎯 Assistant d'Intégration des Logos ZAIA           ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""

# Créer le dossier si nécessaire
mkdir -p /home/user/ZAiA_Website/assets/logo

# Vérifier l'état actuel
echo "📁 État actuel du dossier assets/logo/ :"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ -f "/home/user/ZAiA_Website/assets/logo/zaia-logo-white.png" ]; then
    echo "✅ zaia-logo-white.png (Header) - PRÉSENT"
    ls -lh /home/user/ZAiA_Website/assets/logo/zaia-logo-white.png
else
    echo "❌ zaia-logo-white.png (Header) - MANQUANT"
fi

if [ -f "/home/user/ZAiA_Website/assets/logo/zaia-logo-teal.png" ]; then
    echo "✅ zaia-logo-teal.png (Footer) - PRÉSENT"
    ls -lh /home/user/ZAiA_Website/assets/logo/zaia-logo-teal.png
else
    echo "❌ zaia-logo-teal.png (Footer) - MANQUANT"
fi
echo ""

# Rechercher des logos potentiels
echo "🔍 Recherche de fichiers PNG/JPG qui pourraient être vos logos..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

LOGO_FILES=$(find /home/user -type f \( -iname "*logo*.png" -o -iname "*logo*.jpg" -o -iname "*zaia*.png" -o -iname "*zaia*.jpg" \) 2>/dev/null | head -10)

if [ -n "$LOGO_FILES" ]; then
    echo "$LOGO_FILES"
    echo ""
    echo "💡 Si un de ces fichiers est votre logo, copiez-le avec :"
    echo ""
    echo "   cp /chemin/complet/vers/logo.png /home/user/ZAiA_Website/assets/logo/zaia-logo-white.png"
    echo "   cp /chemin/complet/vers/logo.png /home/user/ZAiA_Website/assets/logo/zaia-logo-teal.png"
else
    echo "Aucun fichier avec 'logo' ou 'zaia' dans le nom trouvé."
fi
echo ""

# Tous les PNG récents
echo "📸 Fichiers PNG récents dans /home/user :"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
find /home/user -type f -name "*.png" -mtime -7 2>/dev/null | head -15

echo ""
echo "════════════════════════════════════════════════════════════"
echo "📖 Pour plus d'aide, consultez : LOGO_INTEGRATION.md"
echo "════════════════════════════════════════════════════════════"
