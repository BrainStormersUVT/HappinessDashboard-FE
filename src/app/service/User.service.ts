import {User} from '../classes/User';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";

@Injectable({providedIn: 'root'})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public adduser(user: User): Observable<User> {
    return this.http.post<User>(this.apiServerUrl + '/user/add', user)
  }

  public updateuser(user: User): Observable<User> {
    return this.http.put<User>(this.apiServerUrl + '/user/update', user)
  }

  public finduserById(id: number): Observable<User> {
    return this.http.get<User>(this.apiServerUrl + '/user/find/' + id)
  }

  public finduserByUsername(username: string): Observable<User> {
    return this.http.get<User>(this.apiServerUrl + '/user/find/' + username)
  }

  public findPasswordByUsername(username: string): Observable<string> {
    return this.http.get<string>(this.apiServerUrl + '/user/find/' + username + '/password')
  }

  public deleteuserById(id: number): Observable<void> {
    return this.http.get<void>(this.apiServerUrl + '/user/delete/' + id)
  }

}
