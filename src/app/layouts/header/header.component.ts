import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isActive: Number = 1;

  constructor() { }
  
  ngOnInit() {
    
  }

  click(number: Number) {
    this.isActive = number;
  }

}
