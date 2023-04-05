import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { ProdutoService } from '../produto.service';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit{

  public source: LocalDataSource = new LocalDataSource();


  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
      custom: [{ name: 'edit', title: 'Editar' }],
      position: 'right'
    },
    add: false,
    hideHeader: false,
    hideSubHeader: false,
    columns: {
      nome: {
        title: 'Nome',
        type: 'string',
      },
      descricao: {
        title: 'Descricao',
        type: 'string',
      },
      preco: {
        title: 'Preço',
        type: 'string',
      },
      quantidade: {
        title: 'Quantidade',
        type: 'string',
      },
    },
  };  

  constructor(private produtoService: ProdutoService, private router: Router){}

  ngOnInit(): void {
    this.produtoService.list().subscribe(resp => {
      this.source.load(resp);
    });
  }

  novo(){
    this.router.navigateByUrl('/produto/novo');
  }

  onCustomAction(event: any) {
    let produto:Produto = event.data;
    console.log(event);
    this.router.navigate([`produto/${produto.id}`]);
  }  

}
