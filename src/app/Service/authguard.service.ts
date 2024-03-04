import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{
  
  constructor(private route:Router,private user:UserService ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
    if(this.user.authenticate()){ 
      return true;
      
    }
    else{
      alert('Yet to Login');
       return false;
    }
  }
  
}
