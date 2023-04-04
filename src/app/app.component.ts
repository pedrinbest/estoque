import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produto } from './produto';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'produto-view';

  public produto: Produto = new Produto();

  public produtos:Produto[] = [];

  constructor(private produtoService: ProdutoService){}

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
