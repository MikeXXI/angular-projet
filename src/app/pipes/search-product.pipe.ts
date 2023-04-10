import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(products: Product[], search: string) {
    // Si des espaces sont entrés, on retourne tous les produits
    if (!search.trim()) {
      return products;
    }
    return products.filter(product => {
      return product.title.toLowerCase().includes(search.toLowerCase());
    });
    

    
  }

}
