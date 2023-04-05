import { Component } from '@angular/core';
import { Produto } from './models/produto';
import { LocalDataSource } from 'ng2-smart-table';
import { ProdutoService } from './produto.service';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'produto';


  items: NbMenuItem[] = [
    {
      title: 'Produto',
      link: 'produtoList'
    }
  ];  




}
