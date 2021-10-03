import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './sign-in/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  mode: string | boolean;
  showLogout: boolean = false;
  showSignUp: boolean;
  constructor(private router: Router, private authService: AuthService) {
    this.authService.showLogout.subscribe((res) => {
      this.showLogout = res;
    });

    this.authService.showSignUp.subscribe((res) => {
      this.showSignUp = res;
    });
  }
  ngOnInit(): void {}

  onEnter(enterMode: string) {
    this.authService.showSignUp.next(false);
    this.mode = enterMode;
    if (enterMode === 'sign up') {
      this.router.navigate(['/auth'], { queryParams: { mode: 'sign up' } });
    } else {
      this.router.navigate(['/auth'], { queryParams: { mode: 'sign in' } });
    }
  }
  onLogout() {
    this.authService.showLogout.next(false);
    this.mode = undefined;
    this.router.navigate(['/welcome']);
    this.authService.signedIn = null;
    this.authService.showSignUp.next(true);
  }
}
