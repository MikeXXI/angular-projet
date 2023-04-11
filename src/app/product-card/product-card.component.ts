import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{
  @Input() myProduct!: Product;
   
  selected = 0;     

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.selected = (this.myProduct.sizes && this.myProduct.sizes.length > 0) ? this.myProduct.sizes[0].price : 0;
  }
       
      changePrice(e:any){
        this.selected = e.target.value;
        console.log(e.target.value);
      }
      onAddLike(){
        this.productsService.onLike(this.myProduct);
      }
      onAddFavori(){
        this.productsService.onFavori(this.myProduct);        

      }
    }
      
