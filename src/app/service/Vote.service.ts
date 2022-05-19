import {Vote} from '../classes/Vote';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";

@Injectable({providedIn: 'root'})
export class VoteService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public addVote(poll_id: string | null | undefined, grade: number, comment: string, datetime: string): Observable<Vote> {
    return this.http.post<any>(this.apiServerUrl + '/vote/add', {
      "poll_id": poll_id,
      "grade": grade,
      "comment": comment,
      "datetime": datetime
    })
  }

  public updateVote(Vote: Vote): Observable<Vote> {
    return this.http.put<Vote>(this.apiServerUrl + '/vote/update', Vote)
  }

  public findVoteByPollId(id: number): Observable<Vote> {
    return this.http.get<Vote>(this.apiServerUrl + '/vote/find/' + id)
  }

  public deleteVoteById(id: number): Observable<void> {
    return this.http.get<void>(this.apiServerUrl + '/vote/delete/' + id)
  }

}
