#!/bin/bash

# ============================================
# Portfolio Redesign Deployment Script
# Automatically updates your GitHub Pages site
# ============================================

echo "╔═══════════════════════════════════════╗"
echo "║  PORTFOLIO REDESIGN DEPLOYMENT        ║"
echo "║  Ahmed Bin Athar                      ║"
echo "╚═══════════════════════════════════════╝"
echo ""

# Colors for terminal output
RED='\033[0;31m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -d ".git" ]; then
    echo -e "${RED}Error: Not in a git repository!${NC}"
    echo "Please navigate to your ahmedrikk.github.io repository first."
    echo "Example: cd ~/path/to/ahmedrikk.github.io"
    exit 1
fi

echo -e "${CYAN}Step 1: Backing up current files...${NC}"
mkdir -p backups/$(date +%Y%m%d_%H%M%S)
cp index.html backups/$(date +%Y%m%d_%H%M%S)/ 2>/dev/null
cp css/style.css backups/$(date +%Y%m%d_%H%M%S)/ 2>/dev/null
cp js/main.js backups/$(date +%Y%m%d_%H%M%S)/ 2>/dev/null
echo -e "${GREEN}✓ Backup created${NC}"
echo ""

echo -e "${CYAN}Step 2: Checking for new files...${NC}"
if [ ! -f "portfolio-redesign/index.html" ]; then
    echo -e "${RED}Error: Can't find portfolio-redesign files!${NC}"
    echo "Make sure the portfolio-redesign folder is in the same directory as this script."
    exit 1
fi
echo -e "${GREEN}✓ Files found${NC}"
echo ""

echo -e "${CYAN}Step 3: Copying new files...${NC}"
cp portfolio-redesign/index.html ./
mkdir -p css js assets
cp portfolio-redesign/css/style.css css/
cp portfolio-redesign/js/main.js js/
echo -e "${GREEN}✓ Files copied${NC}"
echo ""

echo -e "${CYAN}Step 4: Checking Git status...${NC}"
git status --short
echo ""

echo -e "${YELLOW}Ready to commit and push?${NC}"
echo "This will:"
echo "  1. Stage all changes"
echo "  2. Commit with message 'Portfolio redesign: unixporn aesthetic + personality'"
echo "  3. Push to GitHub"
echo ""
read -p "Continue? (y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${CYAN}Step 5: Committing changes...${NC}"
    git add index.html css/style.css js/main.js
    git commit -m "Portfolio redesign: unixporn aesthetic + personality

- Terminal-inspired design with command-line prompts
- Enhanced copy with actual personality and voice
- New Community section highlighting LGBTQ+ peer counseling
- Expanded film descriptions with artistic intent
- Better narrative connecting CS + MBA + Film
- Dark mode first with light mode toggle
- Glitch effects, animations, and interactive features
- Mobile responsive with hamburger menu"
    echo -e "${GREEN}✓ Changes committed${NC}"
    echo ""
    
    echo -e "${CYAN}Step 6: Pushing to GitHub...${NC}"
    git push origin main
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ Successfully pushed to GitHub!${NC}"
        echo ""
        echo -e "${GREEN}╔═══════════════════════════════════════╗${NC}"
        echo -e "${GREEN}║  DEPLOYMENT SUCCESSFUL!               ║${NC}"
        echo -e "${GREEN}╚═══════════════════════════════════════╝${NC}"
        echo ""
        echo "Your site will be live at https://ahmedrikk.github.io in ~2 minutes"
        echo ""
        echo "Next steps:"
        echo "  1. Add assets/resume.pdf to your repo"
        echo "  2. (Optional) Add assets/hero-preview.png for social media previews"
        echo "  3. Test the site on mobile"
        echo "  4. Update your LinkedIn with the new portfolio URL"
    else
        echo -e "${RED}Error: Push failed!${NC}"
        echo "You may need to pull changes first: git pull origin main"
        exit 1
    fi
else
    echo -e "${YELLOW}Deployment cancelled.${NC}"
    echo "No changes were pushed. Your local files have been updated."
    echo "You can manually commit and push when ready:"
    echo "  git add ."
    echo "  git commit -m 'Portfolio redesign'"
    echo "  git push origin main"
fi

echo ""
echo "═══════════════════════════════════════"
echo "Need help? Check README.md for detailed instructions"
echo "═══════════════════════════════════════"
