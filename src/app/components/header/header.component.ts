import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  slogan: string = 'My slogan';
  subTitle: string = 'My sub title';
  imagePath = 'assets/logo.png';
  constructor() {}

  ngOnInit(): void {}

  getSubTitle() {
    return this.subTitle;
  }
}
