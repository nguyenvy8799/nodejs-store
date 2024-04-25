import express from "express";
import { create as createHbsEngine } from "express-handlebars";
import { CarouselRepo } from "./db/carousel.js";

// Tao app Express
const app = express();

// Cau hinh static files
app.use(express.static("public"));

// Cau hinh Handlebars
// -> Tao Handlebars engine
const hbs = createHbsEngine({
  layoutsDir: "views/layouts", // Folder chua cac layout
  partialsDir: "views/partials", // Folder chua cac file partial
  defaultLayout: "main", // Ten file handlebars trong folder layouts dung lam layout mac dinh
});

// Khai bao engine voi Express
app.engine("handlebars", hbs.engine);
// Chon engine can dung
app.set("view engine", "handlebars");
// Cau hinh folder views
app.set("views", "views/pages");

// Khai bao cac Routes

// Trang chu
app.get("/", (req, res) => {
  const carouselItems = CarouselRepo.getItems();
  console.log(">>> Carousel Items: ", carouselItems);

  res.render("homepage", {
    carouselItems,
  });
});

// Chay app Express
app.listen(3000, () => {
  console.log("App is running on port 3000");
});
