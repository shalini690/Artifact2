# Artifact4

A minimal Node.js + ExpressJS tutorial server exposing two `GET` greeting endpoints.

## Prerequisites

- [Node.js](https://nodejs.org/) `>= 18` — the engine requirement of `express@5.2.1`.
- npm — bundled with Node.js.

## Installation

Install the project dependencies:

```bash
npm install
```

This installs `express` and generates (or uses) `package-lock.json` to pin the dependency tree for reproducible installs.

## Running the server

Start the server:

```bash
npm start
```

This runs the `start` script defined in `package.json`, which executes `node src/server.js`. The server listens on the port from `process.env.PORT`, defaulting to `3000`, so the base URL is `http://localhost:3000`.

## Endpoints

| Method | Path | Response |
|--------|------|----------|
| GET | `/` | `Hello world` |
| GET | `/good-evening` | `Good evening` |

Example requests:

```bash
curl -s http://localhost:3000/
```

Response:

```text
Hello world
```

```bash
curl -s http://localhost:3000/good-evening
```

Response:

```text
Good evening
```

## Project structure

- `package.json` — manifest declaring the `express` dependency, the `start` script, and the `main` entry point.
- `package-lock.json` — pinned dependency tree for reproducible installs.
- `.gitignore` — ignores `node_modules/`, log files, and `.env`.
- `src/app.js` — Express application and route definitions (exports the app).
- `src/server.js` — starts the server via `app.listen(PORT)`.
