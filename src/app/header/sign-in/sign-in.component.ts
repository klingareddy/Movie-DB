import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  mode: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((param) => {
      this.mode = param['mode'];
    });
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    if (this.mode === 'sign up') {
      this.http
        .post<any>(
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCE1Y7uZOLLIJQXyTBhjzCuVjkyZxpZo2Y',
          {
            email,
            password,
            returnSecureToken: true,
          }
        )
        .subscribe((res) => {
          if (res.email) {
            this.authService.signUpSuccess.next(true);
          }
          form.reset();
        });
    } else {
      this.http
        .post<any>(
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCE1Y7uZOLLIJQXyTBhjzCuVjkyZxpZo2Y',
          {
            email,
            password,
            returnSecureToken: true,
          }
        )
        .subscribe((res) => {
          this.authService.showLogout.next(true);
          this.authService.idToken.next(res.idToken);
          this.authService.signedIn = 'Yes';
          this.authService.showSignUp.next(false);
          if (res.idToken) {
            this.router.navigate(['/movies', 'list']);
          }
          form.reset();
        });
    }
  }
}
