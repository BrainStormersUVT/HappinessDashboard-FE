import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-createpollpage',
  templateUrl: './createpollpage.component.html',
  styleUrls: ['./createpollpage.component.css']
})
export class CreatepollpageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }
createPoll(title: string, description:string){
console.log("Title: "+title+"\nDescription:"+description)
}
}
