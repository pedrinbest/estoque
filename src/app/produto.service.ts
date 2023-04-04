import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private httpClient: HttpClient) { }

  public get(): Observable<any>{
    return this.httpClient.get('http://localhost:8080/produto');
  }

  public post(produto: Produto): Observable<any>{
    return this.httpClient.post('http://localhost:8080/produto', produto);
  }

}
