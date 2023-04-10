import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    new Product(
      1,
      'Deadpool',
      "Deadpool le mec increvable par excellence! Ses membres repoussent! ",
      'https://i.ebayimg.com/images/g/QlYAAOSw7eleSoRx/s-l500.jpg',
      100,
      10,
      false,
      false,
      new Date("01/01/2023"),
      [{ size: "S", price: 30 }, { size: "M", price: 50 }, { size: "L", price: 70 }]

    ),
    new Product(
      2,
      'Minato',
      "L'éclair jaune de Konoha ! ",
      'https://media.cdnws.com/_i/152231/14357/3542/60/figfun36441-1.jpeg',
      102,
      0,
      false,
      true,
      new Date("02/02/2023"),
      [{ size: "S", price: 30 }, { size: "M", price: 50 }, { size: "L", price: 70 }]

    ),
    new Product(
      3,
      'Groot',
      "Quelle mignonne créature !",
      'https://www.coindugeek.com/5024-medium_default/figurine-pop-dancing-groot-exclusive-65-marvel.jpg',
      103,
      15,
      true,
      false,
      new Date("03/03/2023"),
      [{ size: "S", price: 30 }, { size: "M", price: 50 }, { size: "L", price: 70 }]

    )
  ];

  getAllProducts(): Product[] {
    return this.products;
  }
  getFavori(): Product[] {
    return this.products.filter(product => product.isFavorite);
  }


  onLike(myProduct: Product): void {
    if (myProduct.isLiked) {
      myProduct.likes--;
    } else {
      myProduct.likes++;
    }
    myProduct.isLiked = !myProduct.isLiked;
  }
  onFavori(myProduct: Product): void {
    myProduct.isFavorite = !myProduct.isFavorite;
  }

}