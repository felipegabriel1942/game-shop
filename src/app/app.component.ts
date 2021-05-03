import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { FilterOptions } from './enum/filter-options.enum';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  filterOptions = Object.values(FilterOptions);
  filterOptionSelected = FilterOptions.MaisVendidos;
  products: Product[] = [];
  carouselImages: string[] = [];

  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.getCarouselImages();
    this.getProducts();
  }

  getCarouselImages(): void {
    this.service.getCarouselImages().subscribe((res) => {
      this.carouselImages = res;
    });
  }

  getProducts(): void {
    this.service.getProducts().subscribe((res) => {
      this.products = res;
      this.products.sort(this.compareSales);
    });
  }

  onFilterChange(): void {
    if (this.filterOptionSelected === FilterOptions.Alfabetica) {
      this.products.sort(this.compareNames);
    }

    if (this.filterOptionSelected === FilterOptions.MaisVendidos) {
      this.products.sort(this.compareSales);
    }

    if (this.filterOptionSelected === FilterOptions.MaiorValor) {
      this.products.sort(this.compareGreaterPrice);
    }

    if (this.filterOptionSelected === FilterOptions.MenorValor) {
      this.products.sort(this.compareMinorPrice);
    }
  }

  compareNames(p1: Product, p2: Product): number {
    if (p1.name < p2.name) {
      return -1;
    }

    if (p1.name > p2.name) {
      return 1;
    }

    return 0;
  }

  compareSales(p1: Product, p2: Product): number {
    if (p1.totalSales > p2.totalSales) {
      return -1;
    }

    if (p1.totalSales < p2.totalSales) {
      return 1;
    }

    return 0;
  }

  compareGreaterPrice(p1: Product, p2: Product): number {
    if (p1.price > p2.price) {
      return -1;
    }

    if (p1.price < p2.price) {
      return 1;
    }

    return 0;
  }

  compareMinorPrice(p1: Product, p2: Product): number {
    if (p1.price < p2.price) {
      return -1;
    }

    if (p1.price > p2.price) {
      return 1;
    }

    return 0;
  }
}
