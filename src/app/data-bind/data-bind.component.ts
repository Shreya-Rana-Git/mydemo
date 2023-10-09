import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-data-bind',
  templateUrl: './data-bind.component.html',
  styleUrls: ['./data-bind.component.css']
})
export class DataBindComponent{
  subject:string = 'Data Binding Application';
  myname:string = 'Shreya Rana';
  urname:string='ANP-C5544';

  aparajita:string="demo_blue";
  hibiscus:string="demo_red";
  rose:string="demo_magenta";

  leaf:string="green";
  citrus:string="orange";

  mycountry:string='India';

  
  constructor(){
    this.mycountry='India';
  }

  showEvent(event:any){
    if(event){
      alert("Demo of event binding");
    }
  }

}
