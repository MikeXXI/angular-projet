import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {

  transform(products: Product[], order?: any) : Product[]{
    let descName = !(order && order === 'ascName')
    return products.sort((a, b) => {
        if (descName) { return b.title.toLowerCase().localeCompare(a.title.toLowerCase()); }
    else return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    });
}
}
