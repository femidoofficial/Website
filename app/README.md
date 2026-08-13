# SheGo Next.js — Home + Privacy

The uploaded SheGo HTML has been converted into a Next.js App Router project.

## Routes

- `/` — Home page
- `/privacy` — Privacy Policy

The Privacy Policy is connected to Home through the navbar's `Home` link.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Images

Put the original `assets` folder inside:

```text
public/assets/
```

For example:

```text
public/assets/Logo/header logo.png
```

The supplied policy content is kept as static HTML inside the Next.js Privacy page so the long document is preserved without changing its wording.
