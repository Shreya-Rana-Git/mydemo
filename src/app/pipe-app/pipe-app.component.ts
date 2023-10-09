import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-app',
  templateUrl: './pipe-app.component.html',
  styleUrls: ['./pipe-app.component.css']
})
export class PipeAppComponent {
  demodate=new Date();
  productPrice:number=16324.7865;
  stockValue:number=43521.682183;
  mysentence:string="Hello how are you";
  
  empObject:Object={
    "id":101,
    "name":"John",
    "dept":"Admin",
    "salary":35000.00
  };

  fruitList=["Guava","Orange","Banana","Lichi","Mango","Apple","Jackfruit","Pear","Plum","Cherry"];

  num:number=8632145679;

}
