'use strict';

/**
 * src/app.js — Express application for the Artifact4 tutorial server.
 *
 * Responsibility
 * --------------
 * This module owns the *application* concern only: it instantiates the Express
 * application, registers the HTTP routes, and exports the configured `app`
 * instance. It deliberately does NOT bind a network socket — starting the
 * listener is the sole responsibility of `src/server.js`, which imports this
 * module via `require('./app')` and calls `app.listen(PORT)`.
 *
 * This application/server separation (see AAP §0.3.3) keeps route wiring
 * isolated from network I/O, which makes the app importable for in-process
 * testing (e.g. Supertest) without occupying a port.
 *
 * Endpoints (public behavior contract)
 * ------------------------------------
 *   GET /              -> 200, body exactly "Hello world"
 *   GET /good-evening  -> 200, body exactly "Good evening"
 *
 * The two greeting strings are reproduced verbatim and form the public
 * behavior contract of this service. They must not be altered in any way
 * (no casing changes, surrounding quotes, punctuation, or extra whitespace).
 *
 * Response semantics
 * ------------------
 * Each handler uses `res.send(<string>)`, which (per Express) automatically
 * sets `Content-Type: text/html; charset=utf-8`, computes `Content-Length`,
 * and ends the response with HTTP status 200. A strict `text/plain` contract
 * is intentionally not required for this tutorial, so `res.type(...)` is not
 * called.
 *
 * Scope (intentional minimalism)
 * ------------------------------
 * The sole runtime dependency is `express`. No body-parsing middleware is
 * registered because both routes are parameter-free `GET` requests that
 * consume no request body. No custom 404 handler is added — Express's
 * built-in "Cannot GET /unknown" response for unmatched paths is the intended
 * behavior. No additional routes, authentication, sessions, logging, or CORS
 * are included.
 *
 * Module system: CommonJS (`require` / `module.exports`). The root
 * `package.json` does not set `"type": "module"`, so ESM syntax is not used.
 *
 * @module app
 */

// The Express web framework is the only external dependency (declared as
// "express": "^5.2.1" in package.json and resolved from node_modules/).
const express = require('express');

// Create the Express application instance. `express()` returns a function that
// is also an object exposing routing methods (app.get, ...) and the network
// bootstrap method (app.listen) used by src/server.js.
const app = express();

/**
 * GET / — primary greeting endpoint.
 *
 * Returns the response body exactly "Hello world".
 *
 * @name GET/
 * @function
 * @param {express.Request}  req Incoming HTTP request (unused; no params/body).
 * @param {express.Response} res Outgoing HTTP response.
 * @returns {void} Sends "Hello world" with HTTP status 200.
 */
app.get('/', (req, res) => {
  res.send('Hello world');
});

/**
 * GET /good-evening — additional greeting endpoint.
 *
 * Returns the response body exactly "Good evening".
 *
 * @name GET/good-evening
 * @function
 * @param {express.Request}  req Incoming HTTP request (unused; no params/body).
 * @param {express.Response} res Outgoing HTTP response.
 * @returns {void} Sends "Good evening" with HTTP status 200.
 */
app.get('/good-evening', (req, res) => {
  res.send('Good evening');
});

// Export the configured application so that src/server.js (and any future
// in-process test) can import it and start a listener via app.listen(PORT).
// No app.listen(...) is invoked in this module by design.
module.exports = app;
