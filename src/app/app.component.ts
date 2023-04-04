import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produto } from './models/produto';
import { ProdutoService } from './produtos/produto.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'produto-view';

  value = "";

  public produto: Produto = new Produto();

  public produtos:Produto[] = [];



  constructor(private produtoService: ProdutoService, private primengConfig: PrimeNGConfig){}

  ngOnInit(): void {
    this.listar();
  }

  public salvar(){
    console.log(this.produto);
    this.produtoService.post(this.produto).subscribe(r => {
      this.listar();
    })
  }

  listar(){
    this.produtoService.get().subscribe(r => {
      this.produtos = r;
    })
  }


}
