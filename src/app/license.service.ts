import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { License } from './models/license.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  constructor(private http: HttpClient,) { }
  private licenseUrl = 'http://20.12.196.43/api/license';

  getLicenses(): Observable<License[]> {
    return this.http.get<License[]>(this.licenseUrl)
  }
}
