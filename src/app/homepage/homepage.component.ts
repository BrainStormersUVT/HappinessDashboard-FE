import { Component, OnInit } from '@angular/core';
import {Poll} from "../classes/Poll";
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  ngOnInit(): void {

  }
  title="Homepage"
  latestPolls : Poll[]
  getLatestPolls(){
    return [new Poll(1, "Poll1", "description1", "29-04-2022", 0),
      new Poll(2, "Poll2", "description2", "29-04-2022", 1),
      new Poll(3, "Poll3", "description3", "29-04-2022", 2),
    ];
  }
  constructor(private router : Router) {
    this.latestPolls=this.getLatestPolls()
  }
  goToPoll(id:any) {
  this.router.navigate(['/poll', {id : id}])
  }

  goToPollAdd() {
    this.router.navigate(['/addpoll'])
  }
}
