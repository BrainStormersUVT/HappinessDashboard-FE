import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Poll} from "../classes/Poll";
import {PollService} from "../service/Poll.service";
import {VoteService} from "../service/Vote.service";
import {Vote} from "../classes/Vote";

@Component({
  selector: 'app-pollpage',
  templateUrl: './pollpage.component.html',
  styleUrls: ['./pollpage.component.css']
})
export class PollpageComponent implements OnInit {
  id?: number
  poll?: Poll


  constructor(private arouter: ActivatedRoute, private router: Router, private pollService: PollService, private voteService: VoteService) {
  }

  ngOnInit(): void {
    this.id = Number(this.arouter.snapshot.paramMap.get('id'))
    this.getPoll();
  }

  public getPoll(): void {
      this.pollService.findPollById(this.id).subscribe(
        (response) => {
          this.poll=response
        }
      )
  }

  public vote(grade: number, comment: string = "") {
    let now = new Date()
    this.voteService.addVote(this.id, grade, comment, now.toISOString()).subscribe(
      (response) => {
        this.router.navigate(['/votes', response.idPoll])
      }
    )

  }
}
