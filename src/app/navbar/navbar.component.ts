import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: string = "USER"

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToPollAdd() {
    this.router.navigate(['/addpoll'])
  }
}
