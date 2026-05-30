/**
 * server.js - Express application entrypoint.
 *
 * This is the single HTTP layer for the project (idiomatic flat tutorial
 * structure - there is no `src/` directory). It instantiates one Express
 * application instance and exposes two plain-text GET endpoints:
 *
 *   GET /              -> "Hello world"   (the project's original/baseline response)
 *   GET /good-evening  -> "Good evening"  (the newly added response)
 *
 * Design notes:
 *   - CommonJS (`require`) is used per the project's idiomatic Node.js style.
 *   - Express is the sole HTTP framework; no raw `http.createServer` is used.
 *   - `res.send(string)` is used for the responses; Express sets HTTP 200 and an
 *     appropriate `Content-Type` automatically. The response bodies are the exact
 *     strings requested, with no added punctuation, markup, or whitespace.
 *   - The listening port is configurable via the `PORT` environment variable and
 *     defaults to 3000, so the server can run in varied environments.
 */

'use strict';

const express = require('express');

// Create the single Express application instance that serves every route.
const app = express();

// Resolve the listening port from the environment, falling back to 3000.
const PORT = process.env.PORT || 3000;

// Baseline endpoint - preserves the project's original "Hello world" response.
app.get('/', (req, res) => res.send('Hello world'));

// New endpoint - returns the requested "Good evening" response.
app.get('/good-evening', (req, res) => res.send('Good evening'));

// Bind the HTTP listener and report readiness on the console.
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
