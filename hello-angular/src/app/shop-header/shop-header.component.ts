import { Component, Input, OnInit } from '@angular/core';   // Input import 해줘야함.

@Component({
  selector: 'app-shop-header',
  templateUrl: './shop-header.component.html',
  styleUrls: ['./shop-header.component.css']
})
export class ShopHeaderComponent implements OnInit {    // LifeCycle method

  @Input() menus: string[] = [];    // 초기화 해줌.(데이터를 받지 않았을경우 처리) 데이터는 @Input 사용
  // @Input('menus') myMenus: string[] = [];  // 부모에게서 받은 변수명을 사용하지 않고 다른 변수명을 사용할 경우
                                              // @Input 에 파라미터로 부모에게 받은 변수명을 넣어주고 선언할 때 다른 변수명으로 선언
                                              
  //@Input() menus?: string[];        // null 허용. 변수명 뒤에 '?' 있을 시 nullable

  constructor() { }

  ngOnInit(): void {
  }

}
