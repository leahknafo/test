import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Housework } from '../models/housework';

@Injectable({
  providedIn: 'root'
})
export class HouseworkService {

  constructor(private httpClient: HttpClient) { }
     post(Housework: Housework): Observable<object> {
      return this.httpClient.post('http://localhost:8888/addtodo', Housework);
    }
  
    get(): Observable<Housework> {
      return this.httpClient.get<Housework>('http://localhost:8888/todolist');
    }
}
