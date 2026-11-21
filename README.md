# Rares Nita — Portfolio

A responsive React portfolio built with Vite. It presents an introduction, current learning areas, practice projects, and a contact form.

## Run locally

```bash
npm install
npm run dev
```

Create and preview a production build:

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

The project is configured for the repository URL `https://108rares108.github.io/simple-portfolio-RN/`.

1. In the GitHub repository, open **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push changes to the `main` branch. The workflow in `.github/workflows/deploy.yml` installs the dependencies, builds the Vite site, and publishes the generated `dist` folder.
4. Check the **Actions** tab and confirm that **Deploy portfolio to GitHub Pages** completes successfully.

The Vite `base` path in `vite.config.js` must remain `/simple-portfolio-RN/` while this is a project site. GitHub Pages cannot serve the unbuilt React source directly; the workflow publishes the production build instead.

## Copilot support during development

Microsoft Copilot was used throughout development to:

- Improve the CSS layout, spacing, typography, colours, and component styling.
- Suggest responsive breakpoints and layout adjustments for desktop, tablet, and mobile screens.
- Help implement and refine interactive behaviour, including the mobile navigation, hover/focus feedback, and contact form experience.
- Review the visual consistency and usability of the finished portfolio and suggest refinements.

## Functionality notes

- The navigation adapts to smaller screens and can be opened and closed with the menu button or the Escape key.
- The header responds to scrolling, while keyboard focus keeps it available.
- Project cards and links include hover/focus feedback.
- The contact form validates required fields in the browser and prepares an email in the visitor's default mail application. It does not submit to a server.
