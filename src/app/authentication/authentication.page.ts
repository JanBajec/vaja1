import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {CostumeValidators} from '../globals/costumeValidators';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {

  loginBool = true;

  loginForm: FormGroup;
  signupForm: FormGroup;

  constructor(private authService: AuthService, private costumeValidators: CostumeValidators) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email : new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
    this.signupForm = new FormGroup({
      email : new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{6,30}')]),
      passwordConfirm: new FormControl(null, [Validators.required, this.costumeValidators.confirmPasswordValidator])
    });
  }

  switch(){
    this.loginBool = !this.loginBool;
  }

  login(){
    this.authService.login();
  }

  signup(){
    this.authService.signup();
  }

}
