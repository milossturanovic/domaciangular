import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  public url = 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  constructor(private http: HttpClient) { }


  public async getBrands():Promise<Product[]>{

  

    let products = [];

   products = await this.http.get<any>(this.url).toPromise();

   let productList:Product[] = [] ;

   products.forEach((product: any) => {
    
     
    productList.push({
      id: product.id,
      brand: product.brand,
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image_link
     });
   });

   return productList;

  }



}
