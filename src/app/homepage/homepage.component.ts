import {Component, OnInit} from '@angular/core';
import {Poll} from "../classes/Poll";
import {Router} from "@angular/router";
import {PollService} from "../service/Poll.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  ngOnInit(): void {
    this.getListOfPools();
  }

  title = "Homepage";
  latestPolls: Poll[] | undefined;


  public getListOfPools(): void {
    this.pollService.getListOfPools().subscribe(
      (response: Poll[]) => {
        this.latestPolls = response;
      },
      (error: HttpErrorResponse) => {
        this.router.navigate(['/error', {error:error.message}])
      }
    )
  }

  constructor(private router: Router, private pollService: PollService) {
  }

  goToPoll(id: any) {
    this.router.navigate(['/poll', {id: id}])
  }

  goToPollAdd() {
    this.router.navigate(['/addpoll'])
  }
}
