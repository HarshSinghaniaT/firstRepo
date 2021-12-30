import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  id:string = "admin";
  pwd:string = "admin123";
  result:string = ""

  constructor(private router: Router, private route:ActivatedRoute){}

  loginClicked(){
    let requestedURL = this.route.snapshot.queryParams["returnUrl"];

    if(requestedURL == null){
      requestedURL = "/";
    }

    if((this.id=="admin")&&(this.pwd == "admin123")){
      const headerToken:string = "1d38d128-0671-4121-8084-f6332a992a40";
      sessionStorage.setItem("AUTH_TOKEN", headerToken);
      this.router.navigate([requestedURL]);
    }
    else{
      this.result= "Invalid USer id or password";
    }
  }
}
