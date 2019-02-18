import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt lectus ipsum,
  sed condimentum elit pellentesque nec. Ut iaculis auctor ipsum, sed vulputate turpis condimentum eget.`;
  public images = [
  'assets/1.jpg', 'assets/2.jpg', 'assets/3.jpg'
  ];
  constructor() {
    this.images = [...this.images, ...this.images , ...this.images, ...this.images];
  }

  ngOnInit() {
  }

}
