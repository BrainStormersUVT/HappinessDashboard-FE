import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
 error?: string | null
  constructor(private arouter:ActivatedRoute) { }

  ngOnInit(): void {
   this.error=this.arouter.snapshot.paramMap.get('error')
  }

}
