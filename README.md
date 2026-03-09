# Abraham Iborida - Developer Portfolio

Professional portfolio built with Next.js (App Router), React, Tailwind CSS, and Framer Motion. Features a modern dark developer theme with smooth animations and responsive design.

## Features

- **Next.js App Router**: Modern File-system based routing.
- **Tailwind CSS v4**: Utility-first CSS framework with a sleek dark theme.
- **Framer Motion**: Smooth entry and interaction animations.
- **Fully Responsive**: Optimized for all screen sizes.
- **Dark/Light Mode**: User-toggled theme integration via `next-themes`.
- **Static Export Ready**: Configured to export static HTML/CSS/JS for basic web servers including GitHub Pages.

---

## 🚀 Setup Instructions

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18+) and `npm` installed.

### 2. Install Dependencies
Clone the repository and install the required modules:
```bash
npm install
```

### 3. Running Locally
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser. The application will auto-reload when you save changes.

---

## 🌐 Deployment to GitHub Pages

Since the app is configured for static exports (`output: 'export'` in `next.config.ts`), you can easily host it on GitHub Pages.

### Step 1: Push to GitHub
Create a new GitHub repository and push this source code to it.
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Configure Actions
The easiest way to deploy Next.js static exports to GitHub Pages is using GitHub Actions.
1. In your GitHub Repo, go to **Settings > Pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. GitHub will suggest a "Next.js" workflow. Use it, or create `.github/workflows/deploy.yml` with the following:

<details>
<summary>View GitHub Action Workflow</summary>

```yaml
name: Deploy Next.js site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: npm
      - name: Setup Pages
        uses: actions/configure-pages@v5
        with:
          static_site_generator: next
      - name: Install dependencies
        run: npm ci
      - name: Build with Next.js
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
</details>

*Note: If you are hosting on a project page like `username.github.io/repo-name`, you'll need to set `basePath: '/repo-name'` inside your `next.config.ts`.*

---

## 🔗 Connecting a Custom Domain

To point a custom domain (e.g., `abrahamiborida.com`) to your GitHub Pages portfolio:

1. **Add Domain in GitHub Settings**:
   - Go to your repository **Settings > Pages**.
   - Scroll down to **Custom domain**, type your domain name, and click "Save".
   - GitHub will enforce HTTPS automatically once the DNS is propagated.

2. **Configure your DNS settings** (in your Domain Registrar like Namecheap, GoDaddy, etc.):
   - **A Records**: Point your APEX domain (`@`) to the following IP addresses:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **CNAME Record**: Point the `www` hostname to `<your-github-username>.github.io.`.

Wait for the DNS settings to propagate (can take 1-24 hours).

---
*Built by Abraham Iborida.*
