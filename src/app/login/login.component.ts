import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm:FormGroup = new FormGroup({
    ownername: new FormControl("", Validators.required),
    contactnumber: new FormControl("",[Validators.required, Validators.pattern("\\d{10}")]),
    email: new FormControl("", [Validators.required, Validators.email]),
    vehicleno: new FormControl("", Validators.pattern("^[A-Z]{2}\\d{2}[A-Z]{2}\\d{4}")),
    address: new FormControl("",Validators.required),
    model: new FormControl("", Validators.maxLength(10)),
    color: new FormControl("", Validators.required),
    year: new FormControl("", [Validators.min(2012), Validators.max(2022)])
  });

  submit_click(){
    alert("Vehicle registered!!");
  }
}