import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Poll} from "../classes/Poll";
import {PollService} from "../service/Poll.service";
import {UserAuth} from "../classes/user-auth.service";

@Component({
  selector: 'app-createpollpage',
  templateUrl: './createpollpage.component.html',
  styleUrls: ['./createpollpage.component.css']
})
export class CreatepollpageComponent implements OnInit {
  constructor(private router: Router, private pollService: PollService, private user: UserAuth) {
  }

  ngOnInit(): void {
    if (this.user.getId() == null) {
      this.router.navigate(['/login'])
    }
  }

  public createPoll(title: string, description: string): void {
    let now = new Date()
    this.pollService.addPoll(title, description, now.toISOString(), this.user.getId()).subscribe(
      (response: Poll) => {
        this.router.navigate(['/poll', response])
      }
    )
  }
}
