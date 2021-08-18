import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Client {
  idClient: number;
  nomClient: string;
  prenomClient: string;
  emailClient: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  configUrl = 'https://localhost:8000/api/clients?page=1';

  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get<Array<Client>>(this.configUrl, {headers: {'accept':'application/json'}, observe: 'body'})
      .pipe(
        retry(3)
      )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
