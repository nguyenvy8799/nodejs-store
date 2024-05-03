import express from "express";
import { create as createHbsEngine } from "express-handlebars";
import { CarouselRepo } from "./db/carousel.js";
import { FeatureRepo } from "./db/feature.js";
import { CategoryRepo } from "./db/category.js";
import { readJsonFile } from "./utils/read-json-file.util.js";
import { join } from "path";

// Tao app Express
const app = express();

// Cau hinh static files
app.use(express.static("public"));

// Cau hinh Handlebars

// -> Chon extension name
const extname = "hbs";

// -> Tao Handlebars engine
const hbs = createHbsEngine({
  extname,
  layoutsDir: "views/layouts", // Folder chua cac layout
  partialsDir: "views/partials", // Folder chua cac file partial
  defaultLayout: "main", // Ten file handlebars trong folder layouts dung lam layout mac dinh
  helpers: {
    eq: (left, right) => {
      return left === right;
    },
  },
});

// Khai bao engine voi Express
app.engine(extname, hbs.engine);
// Chon engine can dung
app.set("view engine", extname);
// Cau hinh folder views
app.set("views", "views/pages");

// Khai bao cac Routes

// Trang chu
app.get("/", (req, res) => {
  const carouselItems = CarouselRepo.getItems();
  const features = FeatureRepo.getFeatures();
  const categories = [
    {
      id: "categ-1",
      name: "All products",
      products: [
        {
          id: "prod-1",
          name: "Grapes",
          image: "img/fruite-item-5.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
          price: 4.99,
        },
        {
          id: "prod-2",
          name: "Grapes",
          image: "img/fruite-item-5.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
          price: 4.99,
        },
      ],
    },
    {
      id: "categ-2",
      name: "Vegetables",
      products: [
        {
          id: "prod-1",
          name: "Grapes",
          image: "img/fruite-item-5.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
          price: 4.99,
        },
        {
          id: "prod-2",
          name: "Grapes",
          image: "img/fruite-item-5.jpg",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
          price: 4.99,
        },
      ],
    },
  ];

  res.render("homepage", {
    carouselItems,
    features,
    categories,
  });
});

// Chay app Express
app.listen(3000, () => {
  console.log("App is running on port 3000");
});
