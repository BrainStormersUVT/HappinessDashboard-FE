import {Component, OnInit} from '@angular/core';
import {Poll} from "../classes/Poll";
import {ActivatedRoute, Router} from "@angular/router";
import {UserAuth} from "../classes/user-auth.service";
import {PollService} from "../service/Poll.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  title: string | null | undefined
  polls: Poll[] | undefined

  constructor(private arouter: ActivatedRoute, private router: Router, private user: UserAuth, private pollService: PollService) {
  }

  ngOnInit(): void {
    this.title = this.arouter.snapshot.paramMap.get('title')
    this.getPolls()
  }

  getPolls() {
    this.pollService.search(this.title).subscribe(
      (response) => {
        this.polls = response
      }
    )
  }

  goToPoll(id: any) {
    this.router.navigate(['/poll', id])
  }

}
