import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Poll} from "../classes/Poll";
import {HttpErrorResponse} from "@angular/common/http";
import {PollService} from "../service/Poll.service";
import {VoteService} from "../service/Vote.service";
import {Vote} from "../classes/Vote";

@Component({
  selector: 'app-pollpage',
  templateUrl: './pollpage.component.html',
  styleUrls: ['./pollpage.component.css']
})
export class PollpageComponent implements OnInit {
  id?: string | null
  poll?: Poll

  constructor(private arouter: ActivatedRoute, private router: Router, private pollService: PollService, private voteService: VoteService) {
  }

  ngOnInit(): void {
    this.id = this.arouter.snapshot.paramMap.get('id')
    this.getPoll();
  }

  public getPoll(): void {
    if (typeof this.id === "string") {
      this.pollService.findPollById(parseInt(this.id)).subscribe(
        (response: Poll) => {
          this.poll = response;
        },
        (error: HttpErrorResponse) => {
          this.router.navigate(['/error', {error: error.message}])
        }
      )
    }
  }

  public vote(grade: number, comment: string = "") {
    let now = new Date()
    this.voteService.addVote(this.id, grade, comment, now.toISOString()).subscribe(

      (response: Vote) => {
        this.router.navigate(['/votes', {id: this.id}])
      },
      (error: HttpErrorResponse) => {
        this.router.navigate(['/error', {error: error.message}])
      }
    )

  }
}
