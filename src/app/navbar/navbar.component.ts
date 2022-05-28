import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserAuth} from "../classes/user-auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title: string | undefined
  op1: string | undefined
  op2: string | undefined
  op3: string | undefined
  loggedIn: boolean | undefined
  status: boolean | undefined

  constructor(private router: Router, private user: UserAuth) {
  }

  ngOnInit(): void {
    if (this.user.getUsername() != null) {
      this.title = this.user.getUsername()
      this.op1 = "Create a poll"
      this.op2 = "My polls"
      this.op3 = "Log Out"
      this.loggedIn = true
      this.status = false
    } else {
      this.title = "Not connected"
      this.op1 = "Login"
      this.op2 = "Register"
      this.op3 = ""
      this.loggedIn = false
      this.status = true
    }
  }

  controlOp1() {
    if (this.loggedIn == false) {
      this.router.navigate(['login'])
    } else {
      this.router.navigate(['addpoll'])
    }
  }

  controlOp2() {
    if (this.loggedIn == false) {
      this.router.navigate(['register'])
    } else {
      this.router.navigate(['userpolls/' + this.user.getId()])
    }

  }

  controlOp3() {
    if (this.loggedIn == true) {
      this.user.setAll(null, null, null, null)
      window.location.reload()
      this.router.navigate(['home'])
    }

  }

  goToHome() {
    this.router.navigate(['home'])
  }

  search(title: string) {
    this.router.navigate(['search/' + title])
  }
}
