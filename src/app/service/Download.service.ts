import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({providedIn: 'root'})

export class DownloadService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  downloadFile(id: number | undefined): any {
    return this.http.get(this.apiServerUrl + '/poll/exportToCSV/' + id, {observe: 'response', responseType: 'blob'})
  }
}
