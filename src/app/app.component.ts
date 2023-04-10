import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import { ProductsService } from './services/products.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  products!: Product[];
  search: string = '';
  title: string = '';
  nameTriDate: string = '';
  nameTriName: string = '';
  afficherFavori: boolean = false;
  nameButtonFav = "Afficher les favoris";


  constructor(private productsService: ProductsService) { }

  triDate(e:any){
        this.nameTriDate  = e.target.value;
        console.log(e.target.value);
      }
  triName(e:any){
        this.nameTriName = e.target.value;
        console.log(e.target.value);
      }

  lookFavori(){
    if(this.afficherFavori == false){
        this.products = this.productsService.getFavori();
        this.afficherFavori = true;
        this.nameButtonFav = "Afficher tous les produits";

    }else{
        this.products = this.productsService.getAllProducts();
        this.afficherFavori = false;
        this.nameButtonFav = "Afficher les favoris";
    }
    }
  ngOnInit(){
    this.search = ""
    this.products = this.productsService.getAllProducts(); 
    this.title = "My Store"
    this.nameTriDate = ""
    this.nameTriName = ""
  }

  
  
}
