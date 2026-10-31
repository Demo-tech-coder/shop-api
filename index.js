// Orbit Shop API (sample) – a tiny server used to demo dependency security updates.
const express = require("express");
const _ = require("lodash");
const args = require("minimist")(process.argv.slice(2));

const app = express();
const port = args.port || 3000;

const products = [
  { id: 1, name: "Notebook", price: 12.5 },
  { id: 2, name: "Pen", price: 2.5 },
];

app.get("/products", (req, res) => res.json(_.sortBy(products, "price")));

app.listen(port, () => console.log(`Orbit Shop API on http://localhost:${port}`));
