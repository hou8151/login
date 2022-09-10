import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginfrom! :FormGroup;
  constructor(private fb:FormBuilder) {
    this.loginfrom = this.fb.group({
      'email':['', Validators.required],
      'password':['', Validators.required]
    })
   }
  ngOnInit(): void {
  }
  login(){
    alert("login sucses")
    // this.loginService.login(loginfrom)
  }

}
