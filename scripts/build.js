const fs = require("fs");

fs.mkdirSync("www", { recursive: true });
if (!fs.existsSync("www/index.html")) {
  fs.writeFileSync(
    "www/index.html",
    `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>FinanzApp</title>
  </head>
  <body>
    <main style="font-family:system-ui;max-width:32rem;margin:4rem auto;padding:1.5rem;">
      <h1>FinanzApp</h1>
      <p>Toma el control de tu dinero.</p>
    </main>
  </body>
</html>
`
  );
}
