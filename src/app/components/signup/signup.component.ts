import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup,Validators} from '@angular/forms';
import {passwordChecker} from '../../CustomValidators/password.checker';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm :FormGroup;
  submitted = false;

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formbuilder.group({
      firstName : ['',Validators.required ],
      lastName : ['',Validators.required],
      email :['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.minLength(6)]],
      confirmPassword: ['',Validators.required],
      acceptTerms:[false,Validators.requiredTrue]
    } , {

      validators: passwordChecker('password','confirmPassword')
    });
  }

  get h(){
    return this.registerForm.controls;
  }
  onReset(){
    this.submitted = false;
    this.registerForm.reset();
}
  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }
  console.table(this.registerForm.value);
  console.table(this.registerForm);
    alert("Success signup\n" + JSON.stringify(this.registerForm.value));
    this.onReset();
  }

}
