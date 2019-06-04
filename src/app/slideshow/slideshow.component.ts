import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images: Array<string> = ['zurich.jpg', 'juicewrld.jpg', 'tokio-night.jpeg', 'new-york-night.jpeg'];
  currentImage = this.images[0];
  private currentIndex = 0;


  constructor() {
  }

  ngOnInit() {

  }

  selectNextImage(): void {
    this.currentIndex++;
    if (this.images.length <= this.currentIndex) {
      this.currentIndex = 0;
    }
    this.currentImage = this.images[this.currentIndex];
  }

  selectBackImage(): void {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.images.length - 1;
    }
    this.currentImage = this.images[this.currentIndex];
  }

  selectImage(image: string) {
    this.currentIndex = this.images.indexOf(image);
    this.currentImage = this.images[this.currentIndex];
  }

}
