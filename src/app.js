import express from "express";
import { create as createHbsEngine } from "express-handlebars";
import { CarouselRepo } from "./db/carousel.js";
import { FeatureRepo } from "./db/feature.js";
import { CategoryRepo } from "./db/category.js";
import { readJsonFile } from "./utils/read-json-file.util.js";
import { join } from "path";
import { connectMongoDB } from "./db/connection.js";

// Tao app Express
const app = express();

app.use(express.json());

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

connectMongoDB();

// Khai bao cac Routes

// Trang chu
app.get("/", async (req, res) => {
  const carouselItems = await CarouselRepo.getItems();
  console.log("Carousel Items: ", carouselItems);
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

app.post("/api/carousel/create", async (req, res) => {
  const data = req.body;

  const carouselItem = await CarouselRepo.createItem(
    data.id,
    data.title,
    data.url
  );
  res.json(carouselItem);
});

// Chay app Express
app.listen(3000, () => {
  console.log("App is running on port 3000");
});
