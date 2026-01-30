# Quadratic Equation Solver

A web app that solves quadratic equations of the form ax² + bx + c = 0. Built with [Bun](https://bun.sh), React, and Tailwind.

## Prerequisites

- [Bun](https://bun.sh) (v1.0+)

## Run Locally

Install dependencies:

```bash
bun install
```

Start the development server:

```bash
bun run dev
```

Open http://localhost:3000 (or the URL shown in the terminal).

## Build

```bash
bun run build
```

Output is in `dist/`.

## Test

```bash
bun test
```

## Deploy to GitHub Pages

1. Push the repo to GitHub.
2. In the repo: **Settings** > **Pages** > **Build and deployment** > Source: **GitHub Actions**.
3. Push to the `main` branch. The workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) will build and deploy automatically.

The site will be available at `https://<username>.github.io/<repo-name>/`.
