# Abel Mesfin — Website

Personal website and portfolio for Abel Mesfin.

## Tech stack

- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting started

The only requirement is having Node.js & npm installed — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm install

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

The dev server runs at [http://localhost:8080](http://localhost:8080).

## Available scripts

- `npm run dev` — start the local development server
- `npm run build` — create a production build
- `npm run build:dev` — create a development-mode build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

## Deployment

This project is deployed on [Vercel](https://vercel.com/). Every push to the
production branch triggers a new deployment automatically.

To create a production build locally:

```sh
npm run build
```

The build output is written to the `dist/` directory.
