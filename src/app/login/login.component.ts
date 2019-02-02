import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: FormControl;
  password: FormControl;

  public loginForm: FormGroup;
  submitted = false;
  error = false;
  errorMessage: string = null;
  successMessage: string = null;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  private createFormControls() {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password,
    });
  }

  login(username: FormControl, password: FormControl) {
    this.authService.login(username.value, password.value).catch((err) => {
      this.error = true;
      this.errorMessage = err.error.message;
      return Observable.throw(err);
    }).subscribe((res) => {
      this.successMessage = `Successfully authenticated, welcome <span class="font-weight-bold">${res.user.username}</span> : ^ )`;
      this.error = false;

      this.router.navigate(['/', 'home']);
    });
  }

}
