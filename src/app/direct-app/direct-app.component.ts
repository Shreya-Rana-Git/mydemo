import { Component } from '@angular/core';

@Component({
  selector: 'app-direct-app',
  templateUrl: './direct-app.component.html',
  styleUrls: ['./direct-app.component.css']
})
export class DirectAppComponent {
  answerOne:boolean=false;
  answerTwo:boolean=true;

  flowerList=["Rose","Lotus","Tulip","Lily","Jasmine","Zenia","Cosmos"];
  mathOperator:string="x";
  employeeArr:any[]=[
    {
     "id": 101, 
     "name": "John",
      "dept": "Admin",
     "salary": 35000.00
  }, 
  { 
     "id": 102,
     "name": "Ron",
     "dept": "Finance",
     "salary": 25000.00
  },
  { 
     "id": 103, 
     "name": "Don",
     "dept": "Admin",
     "salary": 45000.00
  },
  { 
     "id": 104, 
     "name": "Ion",
     "dept": "Sales",
     "salary": 15000.00 
  }, 
  { 
   "id": 105, 
   "name": "Neon",
   "dept": "Finance",
   "salary": 55000.00 
   },
   { 
    "id": 106, 
    "name": "Leon",
    "dept": "Purchase",
    "salary": 35000.00 
    },
   ];
  
   trackByMyData(myData:any , myArrayany:any): any{
    return myData;
   }
}
