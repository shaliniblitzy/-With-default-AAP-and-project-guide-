const express = require('express');
const app = express();

// Enforce strict route matching so that only the documented canonical paths
// (`/` and `/good-evening`) serve their respective responses, and all
// noncanonical variants — case variants (e.g. `/Good-Evening`) and trailing
// slashes (e.g. `/good-evening/`) — fall through to Express's default 404
// handler. These settings must be applied BEFORE any route is registered
// because the underlying Express Router is created lazily on the first
// `app.get` / `app.use` call and reads these flags only at that moment
// (see `node_modules/express/lib/application.js`).
app.set('case sensitive routing', true);
app.set('strict routing', true);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello world'));
app.get('/good-evening', (req, res) => res.send('Good evening'));

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
