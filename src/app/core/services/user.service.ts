import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from 'src/app/models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL = environment.url;
  constructor(
    private http: HttpClient
  ) { }

  save(user: User): Observable<User> {
    return this.http.post<User>(`${this.URL}/api/users`, user, httpOptions)
      .pipe(
        catchError(err => {
          console.log('UserService save error');
          return throwError(err);
        })
      );
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.URL}/api/users`, httpOptions);
  }
}
