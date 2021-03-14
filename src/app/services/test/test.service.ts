import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  findAll() {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      responseType: 'text' as 'json'
    };
    return this.http
      .get<string>(this.baseUrl + '/rest/1.0/secure/all', httpOptions);
  }
}
