import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGarudService implements CanActivate{

  constructor(private router:Router){}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {

    if(sessionStorage.getItem("AUTH_TOKEN") == null){
      this.router.navigate(['/signin'], {queryParams: {"returnUrl":state.url}});
      return false;
    } else {
      return true;
    }
   }
}
