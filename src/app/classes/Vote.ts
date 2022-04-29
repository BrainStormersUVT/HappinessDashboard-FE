export class Vote {
  id: number
  grade: number
  comment: string
  date_hour: string
  cookie: number
  idPoll: number

  constructor(id: number, grade: number, comment: string = "", date_hour: string, cookie: number, idPoll: number) {
    this.id = id;
    this.grade = grade;
    this.comment = comment;
    this.date_hour = date_hour;
    this.cookie = cookie;
    this.idPoll = idPoll;
  }
}
