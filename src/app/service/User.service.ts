import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {User} from "../classes/User";

@Injectable({providedIn: 'root'})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public addUser(username: string, password: string, email: string): Observable<User> {
    return this.http.post<User>(this.apiServerUrl + '/user/add', {
      "name": username,
      "email": email,
      "password": password
    })
  }

  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.apiServerUrl + '/user/update', user)
  }

  public login(username: string, password: string): Observable<User> {
    return this.http.get<User>(this.apiServerUrl + '/user/checkIfUserExists/' + username + '/' + password)
  }

  public deleteUserById(id: number): Observable<void> {
    return this.http.get<void>(this.apiServerUrl + '/user/delete/' + id)
  }

}
