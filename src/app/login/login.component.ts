import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from '../interfaces/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {
  login: FormGroup;
  user: user = {
    username: 'admin',
    password: 'admin'
  }
  constructor(private fb: FormBuilder,
    private router: Router) {
    this.login = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })

  }

  ngOnInit(): void { }

  Signin() {
    console.log(this.login.value)
    if (this.login.valid) {
      if (this.user.username == 'admin' && this.user.password == 'admin') {
        console.log("user authorized")
        sessionStorage.setItem("user", JSON.stringify(this.user));
        this.router.navigate(['home']);
      }
    }
  }
}
