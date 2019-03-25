import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { 

  }

  getProtfolios() {
    return this.http.get(environment.baseUrl+environment.ProtfoliosListUrl).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getMetaData() {
    return this.http.get(environment.baseUrl+environment.metaDataUrl).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  doDoLogin(loginObj) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(environment.baseUrl+environment.loginUrl ,loginObj).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
