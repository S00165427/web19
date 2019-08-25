import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title: string = "Ciaras Movies";

  isLoggedIn: boolean;
  constructor(private auth: AuthService, private myRoute: Router) { }


  userLoggedIn():boolean {
    this.isLoggedIn = this.auth.isLoggedIn();
    return this.isLoggedIn
  }

  onLogout() {
    this.auth.doLogout();
    this.isLoggedIn = this.auth.isLoggedIn();
    this.myRoute.navigate(["Login"]);
  }

  ngOnInit() {
    this.isLoggedIn = this.auth.isLoggedIn();
  }

}
