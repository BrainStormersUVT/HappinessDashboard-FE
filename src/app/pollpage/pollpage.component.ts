import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Poll} from "../classes/Poll";
import {PollService} from "../service/Poll.service";
import {VoteService} from "../service/Vote.service";
import {UserAuth} from "../classes/user-auth.service";

@Component({
  selector: 'app-pollpage',
  templateUrl: './pollpage.component.html',
  styleUrls: ['./pollpage.component.css']
})
export class PollpageComponent implements OnInit {
  poll?: Poll


  constructor(private arouter: ActivatedRoute, private router: Router, private pollService: PollService, private voteService: VoteService, private user: UserAuth) {
  }

  ngOnInit(): void {
    if (this.user.getId() == null) {
      this.router.navigate(['/login'])
    }
    this.getPoll(Number(this.arouter.snapshot.paramMap.get('id')));
  }

  public getPoll(id: number): void {
    this.pollService.findPollById(id).subscribe(
      (response) => {
        this.poll = response
      }
    )
  }

  public vote(grade: number, comment: string = "") {
    let now = new Date()
    this.voteService.addVote(this.poll?.id, grade, comment, now.toISOString(), this.user.getId()).subscribe(
      (response) => {
        this.router.navigate(['/votes', response.idPoll])
      }
    )

  }
}
