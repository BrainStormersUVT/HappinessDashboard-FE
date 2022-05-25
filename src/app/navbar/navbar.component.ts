import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserAuth} from "../classes/user-auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: string | undefined

  constructor(private router: Router, private user: UserAuth) {
  }

  ngOnInit(): void {
    if (this.user.getUsername() != null) {
      this.username = this.user.getUsername()
    } else {
      this.username = "USER"
    }
  }

  goToPollAdd() {
    this.router.navigate(['/addpoll'])
  }

  goToHome() {
    this.router.navigate(['/home'])
  }

  logOut() {
    this.user.setAll(null, null, null, null)
    this.goToHome()
  }
}
