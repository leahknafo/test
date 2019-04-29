import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FamilyMembers } from '../models/family-members';

@Injectable({
  providedIn: 'root'
})
export class FamilyMembersService {

  constructor(private httpClient: HttpClient) { }
    // post(FamilyMembers: FamilyMembers): Observable<object> {
    //   return this.httpClient.post('http://localhost:8888/addtodo', FamilyMembers);
    // }
  
    get(): Observable<FamilyMembers> {
      return this.httpClient.get<FamilyMembers>('http://localhost:8888/addtodo');
    }
  }

