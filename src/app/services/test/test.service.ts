import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  findAll() {
    return this.http
      .get<String>(this.baseUrl + '/rest/1.0/secure/all');
  }
}
