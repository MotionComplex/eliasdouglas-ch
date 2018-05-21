import { Component, HostListener, ElementRef, Input, OnInit } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.scss'],
  animations: [
    trigger('textScrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('200ms ease-out')),
      transition('hide => show', animate('200ms ease-in'))
    ])
  ]
})
export class ContentBoxComponent implements OnInit {
  @Input() title;
  @Input() text;
  @Input() image;
  @Input() textAlignX;
  @Input() textAlignY;

  textStyles: {};
  textState = 'hide'
  imageState = 'hide'

  constructor(public el: ElementRef) { }

  ngOnInit() {
    this.setStyles()
  }

  setStyles() {
    console.log('align text to ', this.textAlignX)
    if(this.textAlignX == 'left') {
      this.textStyles = {
        'left': '0'
      }
    } else {
      this.textStyles = {
        'right': '0'
      }
    }
  }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      console.log(this.el.nativeElement)
      const scrollPosition = window.pageYOffset

      if (scrollPosition >= componentPosition - 20) {
        this.textState = 'show';
        this.imageState = 'show';
      } else {
        this.textState = 'hide';
        this.imageState = 'hide';
      }
    }

}