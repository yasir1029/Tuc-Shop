import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyNameService {
  // name = 'Syed Yasir Noor';
  constructor(private http:HttpClient) { }

  showName(): Observable<any>{
    return this.http.get("http://localhost:3000/products")
  }

  getSideNavCategories(): Observable<any>{
    return this.http.get("http://localhost:3000/category")
  }
  
}
