import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  public aboutCount = 0;
  public leftButton = 'Mission';
  public rightButton = 'Vission';

  constructor() { }

  handleLeftClick() {
    this.aboutCount --;
    if (this.aboutCount % 3 === 0) {
      this.leftButton = 'Mission';
      this.rightButton = 'Vission';
    } else if (this.aboutCount % 3 === 1 || this.aboutCount % 3 === -1) {
      this.leftButton = 'Vission';
      this.rightButton = 'About Us';
    } else {
      this.leftButton = 'About Us';
      this.rightButton = 'Mission';
    }
  }
  handleRightClick() {
    this.aboutCount ++;
    if (this.aboutCount % 3 === 0) {
      this.rightButton = 'Vission';
      this.leftButton = 'Mission';
    } else if (this.aboutCount % 3 === 1 || this.aboutCount % 3 === -1) {
      this.rightButton = 'Mission';
      this.leftButton = 'About Us';
    } else {
      this.rightButton = 'About Us';
      this.leftButton = 'Vission';
    }
  }

  ngOnInit() {
  }

}
