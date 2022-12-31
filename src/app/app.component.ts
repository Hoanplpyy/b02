import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  state=0;

  tabItems=[
    '我的收藏',
    '我的訂閱',
    '我的追蹤',
    '會員管理',
  ]
  
  onChangeContent(index:number){
    this.state=index;

  }
  name = 'Angular ' + VERSION.major;
}
