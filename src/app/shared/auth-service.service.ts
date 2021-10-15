import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isAuthenticated : boolean=false;

  constructor(private router : Router) { }

  isLoggedIn(){
     return new Promise((resolve,rejects) => {
       setTimeout(() => {
        if(this.isAuthenticated){
          resolve(this.isAuthenticated)
        }
       },1000)
     } )
  }
  

  loginSuccess(){
    this.isAuthenticated=true;
  }

  logoutSuccess(){
    this.isAuthenticated=false;
  }

}
