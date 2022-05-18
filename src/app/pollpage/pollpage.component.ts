import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Poll} from "../classes/Poll";
import {HttpErrorResponse} from "@angular/common/http";
import {PollService} from "../service/Poll.service";

@Component({
  selector: 'app-pollpage',
  templateUrl: './pollpage.component.html',
  styleUrls: ['./pollpage.component.css']
})
export class PollpageComponent implements OnInit {
  id?:string | null
  poll?: Poll
  constructor(private arouter: ActivatedRoute, private router:Router, private pollService: PollService) {
  }

  ngOnInit(): void {
    this.id=this.arouter.snapshot.paramMap.get('id')
    this.getPoll();
  }
  public getPoll(): void{
    if (typeof this.id === "string") {
      this.pollService.findPollById(parseInt(this.id)).subscribe(
        (response: Poll) => {
          this.poll = response;
        },
        (error: HttpErrorResponse) => {
          this.router.navigate(['/error', {error:error.message}])
        }
      )
    }
  }

vote(grade:number, comment:string=""){
    //TODO put vote in DB
    // @ts-ignore
  this.router.navigate(['/votes', {id: this.poll.id}])
}
}
