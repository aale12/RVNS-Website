// ===============================================================================
// DEPENDENCIES
// ===============================================================================
const path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = (app) => {

  app.get("/products", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/products.html"));
  });

  app.get("/scheduling", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/scheduling.html"));
  });

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};