import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Vote} from "../classes/Vote";

@Component({
  selector: 'app-votespage',
  templateUrl: './votespage.component.html',
  styleUrls: ['./votespage.component.css']
})
export class VotespageComponent implements OnInit {
  votes: Vote[]
  id : string | null
  chartType = 'bar';

  chartDatasets = [
    { data: [100, 59, 80, 81, 56, 55, 40, 43, 90, 11], label: 'Votes' }
  ];

  chartLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  chartColors = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];

  chartOptions: any = {
    responsive: true
  };

  chartClicked(event: any): void {
    console.log(event);
  }

  chartHovered(event: any): void {
    console.log(event);
  }

  constructor(private arouter:ActivatedRoute) {
    this.id= this.arouter.snapshot.paramMap.get('id');
    this.votes=this.getVotes(this.id)
  }

  ngOnInit(): void {
  }
getVotes(id:string | null){
    //TODO get votes from DB
  return [new Vote(0, 2, "", "2020", 23, 1)]
}
}
