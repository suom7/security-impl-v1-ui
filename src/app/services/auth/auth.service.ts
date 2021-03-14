import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../../model/login';
import { User } from '../../model/user';
import { Register } from '../../model/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  login(domain: Login) {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    return this.http
      .post<User>(this.baseUrl + '/rest/1.0/auth/signin', domain, {headers});
  }

  register(domain: Register) {
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    return this.http
      .post<String>(this.baseUrl + '/rest/1.0/auth/signup', domain, {headers});
  }

  public setUserToLocalStorage(user: User): void {
    localStorage.setItem(this.keyUser, JSON.stringify(user));
  }

  public getUserFromLocalStorage(): User {
    return JSON.parse(localStorage.getItem(this.keyUser));
  }

  public remove(): void {
    localStorage.removeItem(this.keyUser);
  }
}
