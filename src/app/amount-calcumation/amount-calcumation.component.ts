import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amount-calcumation',
  templateUrl: './amount-calcumation.component.html',
  styleUrls: ['./amount-calcumation.component.css']
})
export class AmountCalcumationComponent {

  result : number = 0;
  price : number = 0;
  public qty: number = 0;
  public pname: string = "";

  amountButton_click(){
    this.result = this.qty * this.price;
  }

}
