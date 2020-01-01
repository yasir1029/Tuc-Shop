import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tucShop';
  todaydate;
  constructor(private myService: MyServiceService){}

  ngOnInit(){
    this.todaydate = this.myService.showTodayDate();
  }
}
