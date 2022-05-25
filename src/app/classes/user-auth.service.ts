import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserAuth {
  private id?: number | null
  private username?: string | null
  private password?: string | null
  private email?: string | null

  constructor() {
  }

  getUsername(): string {
    return <string>this.username
  }

  setAll(id: number | null, username: string | null, password: string | null, email: string | null) {
    this.id = id
    this.username = username
    this.email = email
    this.password = password
  }

  getId(): number {
    return <number>this.id
  }
}
