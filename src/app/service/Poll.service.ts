import { Poll } from '../classes/Poll';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";

@Injectable({providedIn: 'root'})
export class PollService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public addPoll(poll: Poll): Observable<Poll>{
    return this.http.post<Poll>('${this.apiServerUrl}/poll/add', poll);
  }

  public updatePoll(poll: Poll): Observable<Poll>{
    return this.http.put<Poll>('${this.apiServerUrl}/poll/update', poll);
  }

  public findPollById(id: number):  Observable<Poll>{
      return this.http.get<Poll>('${this.apiServerUrl}/poll/find/${id}');
  }

  public getListOfPools(): Observable<Poll[]> {
    return this.http.get<Poll[]>('${this.apiServerUrl}/poll/findAll')
  }

  public getListOfLatestPools(): Observable<Poll[]> {
    return this.http.get<Poll[]>('${this.apiServerUrl}/poll/findLatest')
  }

  public deletePollById(id: number): Observable<void> {
    return this.http.get<void>('${this.apiServerUrl}/poll/delete/{id}')
  }

}
