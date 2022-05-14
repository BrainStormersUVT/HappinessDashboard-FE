import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-createpollpage',
  templateUrl: './createpollpage.component.html',
  styleUrls: ['./createpollpage.component.css']
})
export class CreatepollpageComponent implements OnInit {
  value: Date | undefined;
  minDate: Date | undefined;
  maxDate: Date | undefined
  invalidDates: Array<Date> | undefined
  date1: Date | undefined
  constructor() {

  }

  ngOnInit(): void {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month -1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today,invalidDate];
  }
createPoll(title: string, description:string){
console.log("Title: "+title+"\nDescription:"+description)
}
}
