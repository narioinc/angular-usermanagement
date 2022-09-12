import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Usergroup } from './models/usergroup.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsergroupService {

  constructor(private http: HttpClient,) { }
  private usergroupUrl = 'http://20.12.196.43/api/usergroup';

  getUsergroups(): Observable<Usergroup[]> {
    return this.http.get<Usergroup[]>(this.usergroupUrl)
  }
}
