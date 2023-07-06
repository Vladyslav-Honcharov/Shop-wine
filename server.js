const express = require("express");
const app = express();
const path = require("path");

// Serve React static files
app.use(express.static(path.join(__dirname, "/build/")));

// Serve PHP scripts
app.use("/api", (req, res) => {
  // Путь к вашим PHP-скриптам
  const scriptPath = path.join(__dirname, "php-scripts", req.url);
  res.sendFile(scriptPath);
});

// Serve React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/build/index.html"));
});

// Запуск сервера
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
