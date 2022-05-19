import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Vote} from "../classes/Vote";

@Component({
  selector: 'app-votespage',
  templateUrl: './votespage.component.html',
  styleUrls: ['./votespage.component.css']
})
export class VotespageComponent implements OnInit {
  votes: Vote[] | undefined
  id: string | null | undefined
  basicData: any;

  constructor(private arouter: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id = this.arouter.snapshot.paramMap.get('id');
    this.votes = this.getVotes(this.id)
    this.basicData = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      datasets: [
        {
          label: 'Votes',
          backgroundColor: '#42A5F5',
          data: [65, 59, 80, 81, 56, 55, 40, 100, 20, 100]
        },
      ]
    };
  }

  getVotes(id: string | null) {
    //TODO get votes from DB
    return [new Vote(0, 2, "", "2020", 23, 1)]
  }
}
