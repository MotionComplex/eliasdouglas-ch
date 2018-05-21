import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ngbd-carousel-gallery', 
    templateUrl: './ngbd-carousel.html',
    styleUrls: [
      './ngbd-carousel.scss'
    ]
})
export class NgbdCarouselGallery implements OnInit {
  images: Array<string>;
  welcomeTitle: string = 'Hallo du!';
  welcomeText: string = 'Ich freue mich, dass du diese Seite besucht hast. Gerne möchte ich dir eines meiner Hobbies ein bisschen näher bringen.';

  constructor(config: NgbCarouselConfig, private _http: HttpClient) {
    // customize default values of carousels used by this component tree
    config.interval = 4000;
    config.wrap = false;
    config.keyboard = false;
  }

  ngOnInit() {
    this.images = new Array<string>();
    for(var i = 1; i <= 13; i++) {
      this.images.push(`assets/images/gallery/${i}.jpg`)
    }
  }
}