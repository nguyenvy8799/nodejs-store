import { join } from "path";
import { readJsonFile } from "../utils/read-json-file.util.js";
import { CarouselModel } from "./model/carousel.model.js";

export class CarouselRepo {
  static _dataFilePath = join(process.cwd(), "./src/db/data/carousel.json");

  static async getItems() {
    // console.log("CWD: ", process.cwd());
    // console.log("File path: ", this._dataFilePath);
    // return readJsonFile(this._dataFilePath);
    const items = await CarouselModel.find({});
    console.log("Item: ", items[0]["title"]);
    return items;
  }

  static async createItem(id, title, url) {
    const item = new CarouselModel({
      id,
      title,
      url,
    });
    return await CarouselModel.create(item);
  }
}
