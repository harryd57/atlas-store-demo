import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductList } from '../products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = "http://127.0.0.1:8000/api";
  constructor(private http: HttpClient) { }

  public header(){
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json')
    return headers;
  }

  public get(endpoint:string):Observable<any>{
    let apiPath = `${this.apiUrl}/${endpoint}`;
    return this.http.get(apiPath, {headers:this.header()})
  }

  getProducts() {
    return this.get('products')
  }
  
  getProductById(id : number){
    return this.get(`products/${id}`)
  }

  getProductByBrand(id : number){
    return this.get(`products/brand/${id}`)
  }
}
