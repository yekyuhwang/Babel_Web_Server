import express from "express";
import helmet from "helmet";

const app = express();
app.use(helmet());
app.set("view engine", "pug");

app.get("/page", (req, res) => {
  res.render("page");
});

app.get("/result", (req, res) => {
  const userName = req.query.user;

  res.render("result", { name: userName });
});

app.listen(3000, () => {
  console.log(`🍀3000 PORT SERVER START !`);
});
