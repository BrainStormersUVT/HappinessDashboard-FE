import { Component, OnInit } from '@angular/core';
import {Poll} from "../classes/Poll";
import {Router} from "@angular/router";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {PollService} from "../service/Poll.service";
import {UserService} from "../service/User.service";
import {VoteService} from "../service/Vote.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  ngOnInit(): void {
    this.getListOfPools();
  }
  title="Homepage";
  latestPolls : Poll[] | undefined;


  public getListOfPools(): void{
    this.pollService.getListOfPools().subscribe(
      (response: Poll[]) => {
        this.latestPolls = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  getLatestPolls(){
    return [new Poll(1, "Poll1", "description1", "29-04-2022", 0),
      new Poll(2, "Poll2", "description2", "29-04-2022", 1),
      new Poll(3, "Poll3", "description3", "29-04-2022", 2),
    ];
  }
  constructor(private router : Router, private pollService: PollService) {
    this.latestPolls = this.getLatestPolls();
  }
  goToPoll(id:any) {
    id = id - 1;
    this.router.navigate(['/poll', {id : id}])
  }

  goToPollAdd() {
    this.router.navigate(['/addpoll'])
  }
}
