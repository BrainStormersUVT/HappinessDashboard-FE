import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../service/User.service";
import {UserAuth} from "../classes/user-auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private userAuth: UserAuth) {
  }

  ngOnInit(): void {
  }

  register(username: string, password: string, email: string) {
    this.userService.addUser(username, password, email).subscribe(
      (response) => {
        this.userAuth.setAll(response.id, response.name, response.password, response.email)
        this.router.navigate(['/home'])
      }
    )
  }

}
