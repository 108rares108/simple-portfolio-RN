# Rares Nita — Portfolio

This is the complete static portfolio source. The main page is `index.html` in the repository root. Its only local assets are `style.css`, `script.js`, and `profile.svg`, also in the root. There is no nested `site/` folder and no React, Vite, npm, or build step.

## GitHub Pages deployment

The repository is intended for `https://108rares108.github.io/simple-portfolio-RN/`.

1. Copy **the contents of this ZIP directly into the existing repository root** (the same level as the repository's `.git` directory). Do not put the files inside another folder.
2. Keep **Settings → Pages → Build and deployment → Source** set to **GitHub Actions**.
3. Commit and push the files to the `main` branch.
4. In **Actions**, wait for **Deploy portfolio to GitHub Pages** to finish successfully.

The workflow copies the four website files from the repository root to a temporary `_site` folder and deploys that folder. This keeps `index.html` in the repository root while publishing only the website files.

## Copilot support during development

Microsoft Copilot supported the development process by suggesting improvements to CSS layout, spacing, typography, colour consistency, and component styling; recommending responsive breakpoints for desktop, tablet, and mobile; helping implement the interactive navigation, hover/focus feedback, and contact form; and reviewing the visual consistency and usability of the finished portfolio.

## Contact form

The form validates the fields in the browser and opens the visitor's default email application with a pre-filled message. It does not send data to a server.
