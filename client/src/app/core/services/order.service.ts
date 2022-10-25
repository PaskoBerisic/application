import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const REST_API='http://localhost:8000/api/orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${REST_API}`);
  }
}
