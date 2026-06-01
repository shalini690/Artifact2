'use strict';

/**
 * src/server.js — Network bootstrap (entry point) for the Artifact4 server.
 *
 * Responsibility
 * --------------
 * This module owns the *network I/O* concern only: it imports the configured
 * Express application from `src/app.js` and binds it to a TCP port by calling
 * `app.listen(PORT)`. It deliberately contains NO application logic — no route
 * definitions, no `express()` instantiation, and no middleware. All such
 * behavior lives in `src/app.js`, which this file consumes via
 * `require('./app')`.
 *
 * This application/server separation of concerns (see AAP §0.3.3) keeps the
 * route wiring isolated from the network bootstrap. Because `src/app.js`
 * exports the app *without* binding a socket, the application remains
 * importable for in-process testing (e.g. Supertest) without occupying a
 * port; starting the listener is centralized here in the entry point.
 *
 * Entry point
 * -----------
 * This file is the package entry point: the root `package.json` declares
 * `"main": "src/server.js"` and `scripts.start = "node src/server.js"`. Running
 * `npm start` (or `node src/server.js`) executes this module to boot the
 * server.
 *
 * Configuration (twelve-factor)
 * -----------------------------
 * The listening port is resolved from the `PORT` environment variable, falling
 * back to `3000` when it is not set. No port other than the `3000` default is
 * hardcoded, allowing the deployment environment to override the binding (for
 * example, `PORT=4000 node src/server.js` listens on port 4000).
 *
 * Module system: CommonJS (`require` / `module.exports`). The root
 * `package.json` does not set `"type": "module"`, so ESM `import`/`export`
 * syntax is intentionally not used.
 *
 * @module server
 */

// Import the configured Express application instance from the sibling module
// `src/app.js`. The bare relative specifier `./app` resolves to `./app.js`.
// This is the ONLY dependency of this bootstrap; `express` itself is not
// required here because the application is fully constructed in src/app.js.
const app = require('./app');

// Resolve the listening port from the environment with a sensible default.
// `process.env.PORT` is always a string when present; Node's networking layer
// coerces it to a number, and the numeric `3000` fallback is used when the
// variable is unset or empty.
const PORT = process.env.PORT || 3000;

// Bind the application to the resolved port and begin accepting connections.
// `app.listen` is provided by Express (it internally constructs a Node
// `http.Server`). The callback fires once the server is ready, logging the
// active port so operators can confirm a successful startup.
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
