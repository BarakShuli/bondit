import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { 

  }

  getProtfolios() {
    return this.http.get('http://localhost:3000/api/v1/my_portfolios/portfolios');
  }

  getMetaData() {
    return this.http.get('http://localhost:3000/api/v1/my_portfolios/metadata');
  }
}
