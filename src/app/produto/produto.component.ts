import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { ProdutoService } from '../produto.service';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit{

  public produto:Produto = new Produto();

  public fornecedor: boolean = false;

  


  constructor(private produtoService: ProdutoService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if(id !== 'novo'){
        this.produtoService.get(id).subscribe(r =>{
          this.produto = r;
        })
      }
      console.log(id);
    });
  }

  salvar(){
    this.produtoService.add(this.produto).subscribe(r => {

      this.produto = new Produto();
      this.router.navigateByUrl('/produtoList');
  
    });
  }


}
