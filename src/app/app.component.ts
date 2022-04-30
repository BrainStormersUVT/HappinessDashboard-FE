import { Component } from '@angular/core';
import { Poll } from "./classes/Poll";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="Homepage"
   latestPools : Poll[]
  getLatestPolls(){
    return [new Poll(1, "Poll1", "description1", "29-04-2022", 0),
      new Poll(2, "Poll2", "description2", "29-04-2022", 1),
      new Poll(3, "Poll3", "description3", "29-04-2022", 2),
    ]
   }
   constructor() {
     this.latestPools=this.getLatestPolls()
   }
}
