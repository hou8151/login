import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 singupfrom! :FormGroup;
  constructor(private fb:FormBuilder) {
    this.singupfrom = this.fb.group({
      'displayName':['', Validators.required],
      'email':['', Validators.required],
      'password':['', Validators.required]
    })
   }

  ngOnInit(): void {
  }
  singup(){
    alert("accoute a created")
  }

}
