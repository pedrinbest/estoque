import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Pessoa } from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private httpClient: HttpClient) { }

  public get(): Observable<any>{
    return this.httpClient.get('http://localhost:8080/pessoa');
  }

  public post(pessoa: Pessoa): Observable<any>{
    return this.httpClient.post('http://localhost:8080/pessoa', pessoa);
  }

}
