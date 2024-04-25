export class CarouselRepo {
  static _items = [
    {
      id: 1,
      url: "img/hero-img-1.png",
      title: "Fruites",
    },
    {
      id: 2,
      url: "img/hero-img-2.jpg",
      title: "Vesitables",
    },
  ];

  static getItems() {
    return this._items;
  }
}
