export class Poll {
  id : number
  title : string
  description : string
  date : string
  idCreator : number
  creator : string
  constructor(id: number, title : string, description:string, date : string, idCreator : number) {
    this.id = id;
    this.title=title;
    this.description=description;
    this.date = date;
    this.idCreator = idCreator;
    this.creator = this.getCreatorName(idCreator);
  }

  getCreatorName(idCreator: number) {
    let creators: string[]=["creator1", "creator2", "creator3"]
    return creators[idCreator]
  }

}
