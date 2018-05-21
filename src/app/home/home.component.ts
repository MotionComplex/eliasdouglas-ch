import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  state = 'hide';
  contentBoxes: any[] = new Array<any>();

  constructor(private http: HttpClient, public el: ElementRef) { }

  ngOnInit() {
    this.contentBoxes.push({
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.',
      image: 'assets/images/gallery/2.jpg',
      title: 'Landscape',
      textAlignX: 'left'
    })
    this.contentBoxes.push({
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.',
      image: 'assets/images/gallery/5.jpg',
      title: 'Urban',
      textAlignX: 'right'
    })
  }
}
