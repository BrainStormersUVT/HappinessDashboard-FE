export class User {
  id: number
  name: string
  password: string
  email: string

  constructor(id: number, name: string, password: string, email: string) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
  }
}
