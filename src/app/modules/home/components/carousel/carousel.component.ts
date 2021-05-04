import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input() images: string[] = [];

  selectedImage: string;

  constructor() {}

  ngOnInit(): void {
    this.selectedImage = this.images[0];
    this.changeCarouselImage();
  }

  changeCarouselImage(): void {
    let counter = 1;

    setInterval(() => {
      this.selectedImage = this.images[counter];
      counter < this.images.length - 1 ? counter++ : (counter = 0);
    }, 5000);
  }
}
