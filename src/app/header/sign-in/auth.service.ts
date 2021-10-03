import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  idToken = new Subject<string>();

  signedIn = null;
  showLogout = new Subject<boolean>();

  signUpSuccess = new BehaviorSubject<boolean>(false);

  showSignUp = new BehaviorSubject<boolean>(true);

  constructor() {}
}
