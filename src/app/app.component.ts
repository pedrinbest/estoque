import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from './pessoa';
import { PessoaService } from './pessoa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pessoa-view';

  public pessoa: Pessoa = new Pessoa();

  public pessoas:Pessoa[] = [];

  constructor(private pessoaService: PessoaService){}

  ngOnInit(): void {
    this.listar();
  }

  public salvar(){
    console.log(this.pessoa);
    this.pessoaService.post(this.pessoa).subscribe(r => {
      this.listar();
    })
  }

  listar(){
    this.pessoaService.get().subscribe(r => {
      this.pessoas = r;
    })
  }


}
