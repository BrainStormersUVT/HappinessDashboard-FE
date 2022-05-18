export class Poll {
  id: number
  title: string
  description: string
  date: string
  creator: string

  constructor(id: number, title: string, description: string, date: string, creator: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.creator = creator;
  }


}
