import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import * as auth0 from 'auth0-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  auth0 = new auth0.WebAuth({
    clientID: '',
    domain: '',
    responseType: 'token id_token',
    audience: 'http://localhost:8080',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid profile email'
  });

  constructor(private router: Router, private http: HttpClient) { }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        AuthService.setSession(authResult);
        this.validateUser(authResult.accessToken).subscribe(data => {
          window.location.hash = '';
          localStorage.setItem('userId', data.id);
          this.isUserLoggedIn.next(true);
          this.router.navigate(['']);
        }, error => {
          console.error(error);
        });
      } else if (err) {
        this.router.navigate(['']);
        console.log(err);
      }
    });
  }

  validateUser(token: string): Observable<any> {
    return this.http.get('http://localhost:8080/api/user/validate',
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
      });
  }

  private static setSession(authResult: any): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }

  public getUserId(): string|null {
    return localStorage.getItem('userId');
  }
}
