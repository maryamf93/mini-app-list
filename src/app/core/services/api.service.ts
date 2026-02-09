import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  //  TODO: add environment folder for base url: `${environment.api_url}${path}`

  get(
    path: string,
    params: HttpParams = new HttpParams(),
    headers?: HttpHeaders,
  ): Observable<any> {
    return this.http
      .get(path, {
        params,
        headers,
      })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http
      .put(path, JSON.stringify(body), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(catchError(this.formatErrors));
  }

  post(
    path: string,
    body: Object = {},
    headers?: HttpHeaders,
  ): Observable<any> {
    return this.http
      .post(path, JSON.stringify(body), {
        headers: headers,
      })
      .pipe(catchError(this.formatErrors));
  }

  delete(
    path: string,
    option?: {
      headers?: HttpHeaders;
      params?: HttpParams;
      body?: any | null;
    },
  ): Observable<any> {
    return this.http.delete(path, option).pipe(catchError(this.formatErrors));
  }
}
