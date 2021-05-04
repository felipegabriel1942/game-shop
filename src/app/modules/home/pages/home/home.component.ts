import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { FilterOptions } from 'src/app/core/enum/filter-options.enum';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
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

  onFilterChange(selectedOption: string): void {
    if (selectedOption === FilterOptions.Alfabetica) {
      this.products.sort(this.compareNames);
    }

    if (selectedOption === FilterOptions.MaisVendidos) {
      this.products.sort(this.compareSales);
    }

    if (selectedOption === FilterOptions.MaiorValor) {
      this.products.sort(this.compareGreaterPrice);
    }

    if (selectedOption === FilterOptions.MenorValor) {
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
