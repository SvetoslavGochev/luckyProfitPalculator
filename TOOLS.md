# Helper Tools

This project keeps a simple reference list of the tools that help us build, test, and ship work faster.

## Core tools

- Playwright: browser automation, UI smoke tests, and future end-to-end coverage.
- Hardhat: smart-contract prototyping, local chain testing, and deployment scripts if this product grows on-chain.
- dotenv: loading local secrets such as RPC URLs and API keys from `.env` files.
- ESLint: code quality checks and linting.
- Prettier: formatting so the codebase stays consistent.
- Git/GitHub Pages: version control and easy static deployment when the app is ready.
- TypeScript: safer refactors and clearer intent in shared helpers.
- Vite: application framework for the current starter.

## Good future additions

- Vitest: if the calculator logic gets richer and needs unit tests.
- Playwright test fixtures: once the UI has more flows than a single calculator card.
- CI workflow: compile, lint, and UI smoke checks on every push.

## How to use this list

Treat this as a living note. When we add a tool to the workflow, document why it exists here so both of us can keep the stack lean.
