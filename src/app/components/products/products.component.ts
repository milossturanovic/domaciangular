import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/common/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public items: any;


  constructor(private productsService: ProductsService) { }

  public async ngOnInit(){
    this.items = await this.productsService.getBrands();
    console.log(this.items);
    
  }
}
