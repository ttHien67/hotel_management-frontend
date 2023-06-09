import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  model: any;

  customOptions: OwlOptions = {
    loop: true,
    margin: 0,
    items: 1,
    dots: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    mouseDrag: false,
    
  }

  slides = [
    {id: "1", img: "assets/img/hero/hero-1.jpg"},
    {id: "2", img: "assets/img/hero/hero-2.jpg"},
    {id: "3", img: "assets/img/hero/hero-3.jpg"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
