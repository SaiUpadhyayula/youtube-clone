import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isUserLoggedIn: boolean;

  constructor(private authService: AuthService) {
    authService.isUserLoggedIn.subscribe(value => {
      this.isUserLoggedIn = value;
    });
    this.isUserLoggedIn = authService.isLoggedIn();
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
    this.isUserLoggedIn = false;
  }
}
