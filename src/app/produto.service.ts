import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  public produtos: Produto[] = [];

  constructor(private httpClient: HttpClient) { }

  public add(produto: Produto): Observable<any>{
    return this.httpClient.post(`http://localhost:8080/produto`, produto);
  }

  public get(idx: number): Observable<any>{
    return this.httpClient.get(`http://localhost:8080/produto/${idx}`);
  }

  public list(): Observable<any>{
    return this.httpClient.get("http://localhost:8080/produto");
  }

}
