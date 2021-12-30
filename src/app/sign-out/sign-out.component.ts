import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit{
  
  shouldBeHidden:boolean = true;

  ngOnInit(): void {
      if(sessionStorage.getItem("AUTH_TOKEN") == null )
        this.shouldBeHidden=false;
        console.log(sessionStorage.getItem("AUTH_TOKEN"));
  }
  constructor(private router:Router){}
  signout_click(){
    sessionStorage.removeItem("AUTH_TOKEN");
    this.shouldBeHidden = false;
    console.log("Signed out");
  }
  login_click(){
    this.router.navigate(['/signin']);
  }
}
