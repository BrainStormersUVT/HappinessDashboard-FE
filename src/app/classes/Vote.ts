export class Vote {
  id: number
  grade: number
  comment: string
  datetime: string
  user: number
  poll: number

  constructor(id: number, grade: number, datetime: string, user: number, idPoll: number, comment: string = "") {
    this.id = id;
    this.grade = grade;
    this.comment = comment;
    this.datetime = datetime;
    this.user = user;
    this.poll = idPoll;
  }
}
