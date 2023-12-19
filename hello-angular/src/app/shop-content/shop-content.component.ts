import { Component, Input, OnInit } from '@angular/core'; // Input import 해줘야함.

@Component({
  selector: 'app-shop-content',
  templateUrl: './shop-content.component.html',
  styleUrls: ['./shop-content.component.css']
})
export class ShopContentComponent implements OnInit {

  @Input() desc?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
