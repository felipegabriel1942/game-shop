export class Product {
  id: number;
  name: string;
  price: number;
  totalSales: number;
  description: string;
  images: string[];

  constructor({
    id = null,
    name = '',
    price = null,
    totalSales = null,
    description = '',
    images = [],
  } = {}) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.totalSales = totalSales;
    this.description = description;
    this.images = images;
  }
}
