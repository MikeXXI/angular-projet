import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';


@Pipe({ name: 'sortByDate' })
export class SortByDatePipe implements PipeTransform {
    transform(products: Product[], order?: any) : Product[]{
        let desc = !(order && order === 'asc')
        return products.sort((a, b) => {
            if (desc) { return b.dateAdded.getTime() - a.dateAdded.getTime(); }
        else return a.dateAdded.getTime() - b.dateAdded.getTime();
        });
    }
    }