import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Vote} from "../classes/Vote";

@Component({
  selector: 'app-votespage',
  templateUrl: './votespage.component.html',
  styleUrls: ['./votespage.component.css']
})
export class VotespageComponent implements OnInit {
  votes: Vote[] | undefined
  id : string | null |undefined
  constructor(private arouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.id= this.arouter.snapshot.paramMap.get('id');
    this.votes=this.getVotes(this.id)
  }
getVotes(id:string | null){
    //TODO get votes from DB
  return [new Vote(0, 2, "", "2020", 23, 1)]
}
}
