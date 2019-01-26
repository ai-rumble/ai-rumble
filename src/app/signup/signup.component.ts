import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  email: FormControl;
  password: FormControl;
  username: FormControl;

  public signupForm: FormGroup;
  submitted = false;
  error = false;
  errorMessage: string = null;
  successMessage: string = null;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }

  private createFormControls() {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.username = new FormControl('', [Validators.required, Validators.maxLength(15)]);
    this.password = new FormControl('', [Validators.required]);
  }

  private createForm() {
    this.signupForm = this.formBuilder.group({
      email: this.email,
      password: this.password,
      username: this.username,
    });
  }

  signUp(username: FormControl, password: FormControl, email: FormControl) {
    this.authService.signUp(username.value, password.value, email.value).catch((err) => {
      this.error = true;
      this.errorMessage = err.error.message;
      return Observable.throw(err);
    }).subscribe((res) => {
      this.successMessage = 'Successfully registered, you can now log in : ^ )';
      this.error = false;
      this.email.reset();
      this.password.reset();
      this.username.reset();
    });
  }

}
