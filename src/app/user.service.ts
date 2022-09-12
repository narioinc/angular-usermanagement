import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './models/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,) { }
  private usersUrl = 'http://20.12.196.43/api/users';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
  }

}
