import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserAuth} from "../classes/user-auth.service";
import {PollService} from "../service/Poll.service";
import {Poll} from "../classes/Poll";
import {DownloadService} from "../service/Download.service";

@Component({
  selector: 'app-creatorpage',
  templateUrl: './creatorpage.component.html',
  styleUrls: ['./creatorpage.component.css']
})
export class CreatorpageComponent implements OnInit {
  id: number | undefined
  polls: Poll[] | undefined
  username: string | undefined

  constructor(private arouter: ActivatedRoute, private router: Router, private user: UserAuth, private pollService: PollService, private downloadService: DownloadService) {
  }

  ngOnInit(): void {
    this.id = Number(this.arouter.snapshot.paramMap.get('id'))
    if (this.user.getUsername() == null) {
      this.router.navigate(['login'])
    } else if (this.id != this.user.getId()) {
      this.router.navigate(['login'])
    }
    this.username = this.user.getUsername()
    this.getPolls()
  }

  getPolls() {
    this.pollService.getPollsByUsername(this.username).subscribe(
      (response) => {
        this.polls = response
      }
    )
  }

  download(id: number | undefined) {
    this.downloadService.downloadFile(id).subscribe(
      (response: { headers: { get: (arg0: string) => string; }; body: Blob; }) => {
        let filename = response.headers.get('Content-Disposition')
          ?.split(';')[1].split('=')[1]
        let blob: Blob = response.body as Blob
        let a = document.createElement('a')
        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.click()
      }
    )
  }
}
