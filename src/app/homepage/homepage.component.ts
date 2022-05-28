import {Component, OnInit} from '@angular/core';
import {Poll} from "../classes/Poll";
import {Router} from "@angular/router";
import {PollService} from "../service/Poll.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  ngOnInit(): void {
    this.getListOfPools();
  }

  latestPolls: Poll[] | undefined;


  public getListOfPools(): void {
    this.pollService.getListOfPools().subscribe(
      (response) => {
        this.latestPolls = response;
      },
    )
  }

  constructor(private router: Router, private pollService: PollService) {
  }

  goToPoll(id: any) {
    this.router.navigate(['/poll', id])
  }

}
