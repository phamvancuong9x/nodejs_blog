const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");
var morgan = require("morgan");
const app = express();
const routes = require("./routes");
const port = 3000;
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

//http logger morgan
app.use(morgan("combined"));

//urlencoded + json
app.use(express.urlencoded({ deprecated: true }));
app.use(express.json());

// (sử dụng tài nguyên trong file public )
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "resources/views"));
// app.get("/", (req, res) => {
//   res.render("home");
// });

// app.get("/news", (req, res) => {
//   res.render("news");
// });
// app.get("/search", (req, res) => {
//   res.render("search");
// });
app.post("/search", (req, res) => {
  console.log(req.body);
  res.send("");
});

//Route init
routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
