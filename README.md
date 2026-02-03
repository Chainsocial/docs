# ChainSocial Docs

Public documentation site for ChainSocial.

This folder is the source of truth. It is mirrored to the standalone repo `Chainsocial/docs`.
Edits made directly in the standalone repo may be overwritten by sync from the monorepo.

## Vision

ChainSocial is building open, composable social infrastructure. The docs aim to make every on-chain and API building block approachable so teams can ship unique products and communities quickly.

## Local Development

```bash
pnpm install
pnpm dev
```

The dev server runs on `http://localhost:3004` by default.

## Build & Run

```bash
pnpm build
pnpm start
```

## Content Structure

- `app/page.mdx` landing page
- `app/docs` documentation pages
- `app/docs/contracts` smart contract documentation
- `components` reusable MDX components

## Deploy

This repo is designed to be deployed as a standalone app (e.g. Railway). Use the repository root as the service root directory and run `pnpm build` / `pnpm start`.
