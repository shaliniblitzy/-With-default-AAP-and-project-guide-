# Node.js Express Tutorial

A small Node.js tutorial server built with the [Express.js](https://expressjs.com/)
web framework. It exposes two HTTP `GET` endpoints, each of which returns a
plain-text greeting, and is intended as a minimal starting point for learning
how Express routes incoming requests and produces responses.

## Prerequisites

Before installing or running the server, make sure the following are available
on your machine:

- **Node.js 18 or higher** (Node.js `>= 18`). This is the minimum supported by
  Express 5, the version of the framework used by this project.
- **npm**, the Node.js package manager. npm ships with every Node.js
  installation, so a working Node.js install is all you need.

You can verify your local versions with:

```bash
node --version
npm --version
```

## Installation

Clone or download this repository, then install the project's dependencies from
the repository root:

```bash
npm install
```

This command reads `package.json`, downloads the `express` dependency (along
with its transitive dependencies) into a local `node_modules/` directory, and
generates a `package-lock.json` file that locks the exact resolved versions for
reproducible installs.

## Running the Server

Start the server with the npm `start` script:

```bash
npm start
```

By default the server listens on **`http://localhost:3000`** and prints a
readiness message to the console when it is ready to accept connections.

If you need to listen on a different port — for example because port `3000` is
already in use, or because a hosting platform assigns a port at runtime — set
the `PORT` environment variable before invoking `npm start`:

```bash
PORT=4000 npm start
```

The server will then listen on the chosen port instead of `3000`.

## Endpoints

The server registers exactly two routes. Both are `GET` endpoints that return a
plain-text response body with HTTP status `200`.

| Method | Path           | Response Body |
| ------ | -------------- | ------------- |
| GET    | /              | Hello world   |
| GET    | /good-evening  | Good evening  |

Requests to any other path return HTTP status `404` (Express's default
behavior for unmatched routes).

## Example Requests

With the server running locally on the default port, you can exercise both
endpoints with `curl`:

```bash
curl http://localhost:3000/
curl http://localhost:3000/good-evening
```

The first command prints `Hello world`, and the second prints `Good evening`.

## Project Structure

The project is intentionally minimal so that the routing logic is easy to read
and follow:

```
.
├── index.js           # Express application: route definitions and server bootstrap
├── package.json       # Project metadata, dependencies, and npm scripts
├── package-lock.json  # Exact dependency tree resolved by npm install
├── .gitignore         # Files and directories excluded from version control
└── README.md          # This file
```

`index.js` is the single source file containing the entire server: it imports
Express, creates an application instance, registers the two route handlers
shown in the [Endpoints](#endpoints) table, and starts listening on the
configured port.

## License

Released under the [ISC](https://opensource.org/licenses/ISC) license.
