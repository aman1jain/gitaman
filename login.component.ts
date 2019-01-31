import { Component, OnInit } from '@angular/core';
// import { FormGroup,FormControl } from '@angular/forms';
import{ FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RouterModule, Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup

  UserName="aman";
  password="aman@123";

  constructor(private fb:FormBuilder,private routes:Router) { }

  ngOnInit() {
    this.oncreate()
  }
  oncreate(){
    this.loginForm = new FormGroup({
      UserName: new FormControl(''),
      password: new FormControl('')
    })
  }
  // login=true;
  // register=false;

  // checkpage(){
  //   this.login = false;
  //   this.register =true;

  // }
  // checkpagelogin(){
  //   this.login = true;
  //   this.register =false;  
  // }
  // login=true;
  // register=false;
  onSubmit(){
    console.log(this.loginForm.value);
  }
}

