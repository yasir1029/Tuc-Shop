import { Component, OnInit } from '@angular/core';
import { MyNameService } from '../my-name.service';





interface ItemData {
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  CollapsedVar = true;
  childData:any;
  posData =[];
  categories = [];
  totalPrice = 0;


  isVisible = false;
  isConfirmLoading = false;

  
  obj = {
  productPrice : 50 ,
  productName : 'Lays'
   

  }


addToPos(product){
  var myProduct = product;

  if(this.posData.length > 0){
  let index = this.posData.findIndex(p=>{
     // debugger;
         return p.title === myProduct.title;
  });
  if(index > -1){
    this.posData[index].price = this.posData[index].price + myProduct.price;
    
    this.posData[index].qty = this.posData[index].qty + 1;
  }else{
    let p = {
      title:product.title,
      image:product.image,
      price:product.price,
      qty:1
    } 
    this.posData.push(p);
    this.posData.reverse();
  }
  
}else{
  let p = {
    title:product.title,
    image:product.image,
    price:product.price,
    qty:1
  } 
  console.log(p)
  this.posData.push(p);
  this.posData.reverse();
  console.log(this.posData)
}


  //console.log(index);
  this.getTotalPrice(this.posData);

}
  viewPosData(){
    console.log(this.childData);
  }

  getCategories(){
    this.getCategoriesService.getSideNavCategories().subscribe(
    data=>{
       this.categories = data ;
    } )
  }

  constructor(private getCategoriesService: MyNameService) { }
  listOfData: ItemData[] = [];


  ngOnInit(){
   this.getCategories(); 
   this.getTotalPrice(this.posData);

  }

  getTotalPrice(posData){
    this.totalPrice = 0;
    for (let product of posData){
      this.totalPrice = this.totalPrice + product.price;
    }
  }
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 1000);

    this.posData = [];
    this.totalPrice = 0;
  }

  handleCancel(): void {
    this.isVisible = false;
    
  }
}

