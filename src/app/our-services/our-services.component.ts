import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {
  items: Array<any> = [];
  constructor() {
    this.items = [
      { name: 'test1' },
      { name: 'test1' },
      { name: 'test1' },
      { name: 'test1' },
      { name: 'test1' },
      { name: 'test1' },
      { name: 'test1' },
      { name: 'test1' },
      { name: 'test1' },
      { name: 'test1' },
      { name: 'test1' },
      { name: 'test1' },
      { name: 'test1' },
      { name: 'test1' },
      { name: 'test1' },
      { name: 'test1' },
      { name: 'test1' },
      { name: 'test1' },
      { name: 'test1' },
      { name: 'test1' },
      { name: 'test1' }
    ];
  }

  ngOnInit() {
  }

}
