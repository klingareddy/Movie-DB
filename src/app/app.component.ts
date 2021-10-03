import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './header/sign-in/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'birthday';
  onSuccess = false;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {
    this.authService.signUpSuccess.subscribe((res) => {
      this.onSuccess = res;
    });
  }

  onClickLogin() {
    this.authService.signUpSuccess.next(false);
    this.onSuccess = false;
    this.router.navigate(['/auth'], { queryParams: { mode: 'sign in' } });
  }

  onOverlayClose() {
    this.onSuccess = false;
    this.authService.signUpSuccess.next(false);
    this.authService.showSignUp.next(true);
    this.router.navigate(['/welcome']);
  }
}
