**Using EJS (Embedded JavaScript) with Express**

Express makes it straightforward to integrate EJS as the view‑templating engine. Below are the key steps and useful snippets drawn from the official Express documentation.

### 1. Install EJS
```bash
npm install ejs
```

### 2. Register the EJS engine
You can map the `.ejs` extension automatically, or map another extension (e.g., `.html`) to EJS:

```js
const express = require('express');
const app = express();

// Default: .ejs files
app.set('view engine', 'ejs');

// Optional: map .html to EJS
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
```

### 3. Set the views directory (optional)
Express looks for templates in a `views` folder by default (`process.cwd() + '/views'`). To change that:

```js
app.set('views', path.join(__dirname, 'templates'));
```

### 4. Render a template
```js
app.get('/', (req, res) => {
  // Renders `views/index.ejs` (or `templates/index.html` if you mapped .html)
  res.render('index', { title: 'My App', user: req.user });
});
```

### 5. Accessing locals in the template
All properties passed to `res.render` become local variables inside the EJS file:

```ejs
<!-- views/index.ejs -->
<!DOCTYPE html>
<html>
<head>
  <title><%= title %></title>
</head>
<body>
  <h1>Hello, <%= user ? user.name : 'Guest' %>!</h1>
</body>
</html>
```

### 6. Using app‑level locals
If you need helpers or data available to **all** templates, assign them to `app.locals`:

```js
app.locals.formatDate = require('date-fns').format;
app.locals.siteName = 'My Awesome Site';
```

Then inside any EJS file:

```ejs
<p>Site: <%= siteName %></p>
<p>Today: <%= formatDate(new Date(), 'yyyy-MM-dd') %></p>
```

### 7. Common pitfalls
- **Do not reuse native function properties** (`name`, `apply`, etc.) when adding custom variables to `app.locals`; they’ll clash with the underlying Function object.
- If you map a non‑`.ejs` extension (e.g., `.html`), remember to call `require('ejs').renderFile` as shown above; otherwise Express won’t know how to render those files.

### Quick “Hello World” Example

```js
const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');          // use .ejs files
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Hello World' });
});

app.listen(3000, () => console.log('Server listening on http://localhost:3000'));
```

Create `views/index.ejs`:

```ejs
<!DOCTYPE html>
<html>
<head>
  <title><%= title %></title>
</head>
<body>
  <h1><%= title %></h1>
</body>
</html>
```

Visit `http://localhost:3000` and you’ll see “Hello World”.

These are the essentials for getting EJS up and running in an Express 3.x (and later) application. Let me know if you need deeper details on layout handling, partials, or integrating EJS with other middleware.
