import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/shared/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public logInForm! : FormGroup;
  constructor(private fb : FormBuilder , 
              private authService  : AuthServiceService,
              private router : Router
              ) { }



  slides = [
    {image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FkZ2V0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
    {image: 'https://images.unsplash.com/photo-1598382143905-72568e88b2f0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtZSUyMHNpemV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
    {image: 'https://images.unsplash.com/photo-1527078034588-ff0ffd94d5c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FtZSUyMHNpemV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
 ];
 noWrapSlides = true;


  ngOnInit(): void {
    this.onLogIn()
  }

  onLogIn(){
    // loadLoginForm()
      this.logInForm=this.fb.group({
        'email':['',Validators.required],
        'password' : ['',Validators.required]
      })
      this.authService.loginSuccess();
  }

  get getControl(){
    return this.logInForm.controls;
  }
}



