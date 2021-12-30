import { Component, OnInit } from '@angular/core';
import { ProductDetail } from '../models/ProductDetail';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  public newProd:ProductDetail[] = [
    {pid : 1, pname : "Dell vastro", price : 75000, category : "Laptops", qty : 2},
    {pid : 2, pname : "Lenovo Thinkpad", price : 82000, category : "Laptops", qty : 3},
    {pid : 3, pname : "Asus Tuf", price : 92000, category : "Laptops", qty : 12},
    {pid : 4, pname : "Dell inspiron", price : 76000, category : "Laptops", qty : 5},
    {pid : 5, pname : "Alienware", price : 135000, category : "Laptops", qty : 7}
  ];

  public prodId: number = 0;
  public prodName: string = "";
  public prodPrice : number = 0;
  public prodCategory:string = "";
  public prodQty:number = 0;
  public isPIDDisabled : boolean = false;

  addProduct_click(){
    if(this.newProd.findIndex(x => x.pid == this.prodId) == -1 && this.prodId != 0){
      this.newProd.push({pid:this.prodId, pname:this.prodName, price:this.prodPrice, category:this.prodCategory, qty:this.prodQty});
      this.clearFields();
    }

  }
  deleteProduct_click(pid:number){
    let index : number = this.newProd.findIndex(x => x.pid == pid);
    this.newProd.splice(index, 1);
    this.clearFields();
  }
  selectProduct_click(dno:number){
    let index : number = this.newProd.findIndex(x => x.pid == dno);
    let selectedProd : ProductDetail = this.newProd[index];
    this.prodId = selectedProd.pid;
    this.prodName = selectedProd.pname;
    this.prodPrice = selectedProd.price;
    this.prodCategory  = selectedProd.category;
    this.prodQty = selectedProd.qty;

    this.isPIDDisabled = true;
  }

  updateProduct_click(){
    let index: number = this.newProd.findIndex(x => x.pid == this.prodId);
    this.newProd[index].category = this.prodCategory;
    this.newProd[index].pname = this.prodName;
    this.newProd[index].price = this.prodPrice;
    this.newProd[index].qty = this.prodQty;

    this.clearFields();
  }

  clearFields(){
    this.isPIDDisabled = false;

    this.prodCategory = "";
    this.prodId = 0;
    this.prodName = "";
    this.prodPrice = 0;
    this.prodQty = 0;
    this
  }
}