import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Poll} from "../classes/Poll";
import {PollService} from "../service/Poll.service";
import {VoteService} from "../service/Vote.service";
import {UserAuth} from "../classes/user-auth.service";
import {UserService} from "../service/User.service";
import {Clipboard} from "@angular/cdk/clipboard";

@Component({
  selector: 'app-pollpage',
  templateUrl: './pollpage.component.html',
  styleUrls: ['./pollpage.component.css']
})
export class PollpageComponent implements OnInit {
  id?: number
  poll?: Poll


  constructor(private arouter: ActivatedRoute, private router: Router, private pollService: PollService, private voteService: VoteService, private user: UserAuth, private userService: UserService, private cb: Clipboard) {
    this.getPoll(Number(this.arouter.snapshot.paramMap.get('id')));
  }

  ngOnInit(): void {
    this.id = Number(this.arouter.snapshot.paramMap.get('id'))
    this.getPoll(this.id);
    if (this.user.getId() == null) {
      this.router.navigate(['/login'])
    }
  }

  public getPoll(id: number) {
    this.pollService.findPollById(id).subscribe(
      (response) => {
        this.poll = response
      }
    )
  }

  public vote(grade: number, comment: string = "") {
    let now = new Date()
    this.voteService.addVote(this.poll?.id, grade, comment, now.toISOString(), this.user.getId()).subscribe(
      () => {
        this.router.navigate(['/votes', this.id])
      }
    )

  }

  copyToCb(link: string) {
    this.cb.copy(link)
  }
}
