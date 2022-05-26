import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {VoteService} from "../service/Vote.service";

@Component({
  selector: 'app-votespage',
  templateUrl: './votespage.component.html',
  styleUrls: ['./votespage.component.css']
})
export class VotespageComponent implements OnInit {
  id: number | undefined
  basicData: any;

  constructor(private arouter: ActivatedRoute, private voteService: VoteService) {

  }

  ngOnInit(): void {
    this.id = Number(this.arouter.snapshot.paramMap.get('id'))
    this.getGrades(this.id)
  }

  getGrades(id: number) {
    this.voteService.findGradesByPollId(id).subscribe(
      (response) => {
        this.basicData = {
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          datasets: [
            {
              label: 'Votes',
              backgroundColor: '#42A5F5',
              data: response
            },
          ]
        }
      }
    )
  }
}
