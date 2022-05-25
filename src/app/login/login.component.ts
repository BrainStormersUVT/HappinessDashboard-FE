import {Component, OnInit} from '@angular/core';
import {UserAuth} from "../classes/user-auth.service";
import {Router} from "@angular/router";
import {UserService} from "../service/User.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error = ""

  constructor(private user: UserAuth, private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
  }

  login(username: string, password: string) {
    this.userService.login(username, password).subscribe(
      (response) => {
        if (response != null) {
          this.user.setAll(response.id, response.name, response.password, response.email)
          this.router.navigate(['home'])
        } else {
          this.error = "Username-ul sau parola este gresita!"
        }
      }
    )
  }
}
