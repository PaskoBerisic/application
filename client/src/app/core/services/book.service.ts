import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http'
import { Book } from 'src/app/model/book/book.model';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

const REST_API='http://localhost:8000/api';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  GetAll() {
    return this.http.get(`${REST_API}`);
  }

  GetById(id: any): Observable<any> {
    let API_URL = `${REST_API}/model/${id}`;
    return this.http.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  Add(data: Book): Observable<any> {
    let API_URL = `${REST_API}/add-model`;
    return this.http.post(API_URL, data)
    .pipe(catchError(this.handleError));
}

  Update(id: any, data: any): Observable<any> {
    let API_URL = `${REST_API}/update-model/${id}`;
    return this.http.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  Delete(id: any): Observable<any> {
    let API_URL = `${REST_API}/delete-model/${id}`;
    return this.http.delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      errorMessage;
    });
  }
}
