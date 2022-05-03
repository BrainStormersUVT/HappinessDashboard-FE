import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Poll} from "../classes/Poll";

@Component({
  selector: 'app-pollpage',
  templateUrl: './pollpage.component.html',
  styleUrls: ['./pollpage.component.css']
})
export class PollpageComponent implements OnInit {
  id:string | null
  poll: Poll
  constructor(private arouter: ActivatedRoute, private router:Router) {
    this.id=this.arouter.snapshot.paramMap.get('id')
    this.poll=this.getPoll(this.id);
  }

  ngOnInit(): void {
  }
getPoll(id:string | null) {
    let polls=[new Poll(0, "Poll1", "description1", "29-04-2022", 0),
      new Poll(1, "Poll2", "description2", "29-04-2022", 1),
      new Poll(2, "Poll3", "description3", "29-04-2022", 2),
    ]
  return polls[parseInt(<string>id, 10)];
}
vote(grade:number, comment:string=""){
    //TODO put vote in DB
    this.router.navigate(['/votes', {id: this.poll.id}])
}
}
