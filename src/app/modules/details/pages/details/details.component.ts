import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { AppService } from 'src/app/app.service';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  product: Product;
  imgSelected: string;
  faShoppingCart = faShoppingCart;

  constructor(private appService: AppService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.appService.getProductById(id).subscribe((res) => {
      this.product = res;
      this.imgSelected = res.images[0];
    });
  }

  changeMainImage(image: string): void {
    this.imgSelected = image;
  }
}
