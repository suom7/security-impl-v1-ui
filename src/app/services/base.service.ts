import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  public baseUrl: string;
  public keyUser: string;

  constructor() {
    this.baseUrl = environment.base;
    this.keyUser = environment.key;
  }
}
