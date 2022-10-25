import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const REST_API='http://localhost:8000/api/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  GetAll() {
    return this.http.get(`${REST_API}`);
  }

}
