import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!:FormGroup;


  ngOnInit(): void {
    this.setForm();
  }
  constructor(
    private router:Router
  ){

  }

  setForm() {

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  submit() {

    if(this.loginForm.valid) {
      alert("Login Successfull!");
      this.router.navigate(['dashboard']);

    }
  }

}
