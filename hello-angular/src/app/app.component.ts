import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({    //decorator
  selector: 'app-root',
  templateUrl: './app.component2.html',
  styleUrls: ['./app.component2.css']
})
export class AppComponent {
  title = 'hello-angular';
  myName = "Chung Gi Pyeong"; // 바인딩 할 데이터
  menus: string[] = ['menu1', 'menu2', 'menu3', 'menu4', ];   // typescript 에서는 type 을 적어줘도 되고 안적어줘도 됨.
  contentDesc: string = '안녕하세요~ 우리몰에 오신것을 환영합니다.';
  myAge: number = 27;

  constructor(private http: HttpClient) {     // 서버에서 데이터 받는것을 하나의 서비스 형태로 구성해두고(그럼 메모리에 항상 상주하게됨)
                                              // 빠르게 사용할 수 있도록
    
  }

  btnClicked() {
    //console.log("button clicked");
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .subscribe(res => {
        console.log(res);
      });
  }

  getMyNameWithGreeting(greet: string): string {
    return '정기평님 ' + greet;
  }
}
