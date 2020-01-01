import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { MyNameService } from '../my-name.service';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  todaydate;
  name;
  products = [];
  productDetails;
  @Output() public productData = new EventEmitter();
  addPosCard(){

  }

  constructor(private myService: MyServiceService , private myName: MyNameService) { }

  ngOnInit() {
    // this.todaydate = this.myService.showTodayDate();
      // this.name = this.myName.showName();
    this.getMyService();
  }


  buyProduct(product){
    console.log(product);
  }

  prodSendtoLayout(product){
    this.productData.emit(Object.create(product));
  }

  getMyService() {
    this.products = [];
  this.myName.showName().subscribe(
    data=>{
       this.products = data ;
       this.productDetails = this.products.slice();
    },
    error=>{

    }
  )
  }
  
}
