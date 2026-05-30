# Artifact2

A minimal Node.js + [Express](https://expressjs.com/) tutorial server that exposes two plain-text `GET` endpoints.

## Prerequisites

- **Node.js >= 18** — required because [Express 5](https://expressjs.com/) dropped support for Node.js versions prior to v18.
- **npm** — bundled with Node.js; used to install dependencies and run the server.

## Installation

Install the project dependencies from the npm registry:

```bash
npm install
```

This installs [Express](https://www.npmjs.com/package/express) (`^5.2.1`) and generates `package-lock.json` along with the local `node_modules/` directory.

## Running the server

Start the server with:

```bash
npm start
```

This runs `node server.js` (the `start` script defined in `package.json`). By default the server listens on **http://localhost:3000**.

To use a different port, set the `PORT` environment variable:

```bash
PORT=8080 npm start
```

## Endpoints

| Method | Path | Response |
|---|---|---|
| GET | `/` | `Hello world` |
| GET | `/good-evening` | `Good evening` |

### Example requests

With the server running, try each endpoint with `curl`:

```bash
curl http://localhost:3000/
# Hello world

curl http://localhost:3000/good-evening
# Good evening
```

## Project structure

- `server.js` — the Express application entrypoint that registers both routes and starts the HTTP listener.
- `package.json` — the project manifest declaring the `start` script and the `express` (`^5.2.1`) dependency.
- `.gitignore` — excludes the installed `node_modules/` directory from version control.
