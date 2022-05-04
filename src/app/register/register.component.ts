import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  register(username: string, password: string, email: string) {
    console.log("Username: " + username + "\nPassword:" + password + "\n Email: " + email)
  }

}
