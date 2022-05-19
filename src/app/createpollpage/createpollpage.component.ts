import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Poll} from "../classes/Poll";
import {HttpErrorResponse} from "@angular/common/http";
import {PollService} from "../service/Poll.service";

@Component({
  selector: 'app-createpollpage',
  templateUrl: './createpollpage.component.html',
  styleUrls: ['./createpollpage.component.css']
})
export class CreatepollpageComponent implements OnInit {
  constructor(private router: Router, private pollService: PollService) {
  }

  ngOnInit(): void {

  }

  public createPoll(title: string, description: string): void {
    let now = new Date()
    this.pollService.addPoll(title, description, now.toISOString(), 0).subscribe(
      (response: Poll) => {
        this.router.navigate(['/poll', {id: response.id}])
      },
      (error: HttpErrorResponse) => {
        this.router.navigate(['/error', {error: error.message}])
      }
    )
  }
}
