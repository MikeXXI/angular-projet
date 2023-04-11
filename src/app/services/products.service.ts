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

    ),
    new Product(
     4 ,
      'Thresh',
      "ouahhhhh !",
      'https://ae01.alicdn.com/kf/S5e686f1a580d473d96a89b9fa0462727a/Funko-Pop-Mech-Strike-hunter-Doctor-Doom-990-Funko.jpg_Q90.jpg_.webp',
      103,
      15,
      true,
      false,
      new Date("12/03/2023"),
      [{ size: "S", price: 50 }, { size: "M", price: 80 }, { size: "L", price: 100 }]

    ),
    new Product(
      5,
      'Mushu',
      "Le dragon de l'année",
      'https://boutique.plushtoy.fr/WebRoot/ce_fr/Shops/186372/62BA/B896/74C3/15F4/FFBE/C0A8/190D/5EA6/pop-disney-mulan-mushu-xl-10inch.jpg',
      8000,
      12,
      true,
      false,
      new Date("04/25/2023"),
      [{ size: "S", price: 30 }, { size: "M", price: 50 }, { size: "L", price: 70 }]

    ),
    new Product(
      6,
      'Harry Potter',
      "Le sorcier le plus célèbre de tous les temps",
      'https://www.lamarquezone.fr/images/Image/funko-harry-potter-world-cup-120-48563.jpeg',
      103,
      15,
      false,
      false,
      new Date("06/12/2023"),
      [{ size: "S", price: 30 }, { size: "M", price: 50 }, { size: "L", price: 70 }]

    ),
    new Product(
      7 ,
       'Tanjiro',
       "Le meilleur des démons slayers",
       'https://www.dracaugames.com/11282-product_hd/funko-pop-animation-demon-slayer-867-tanjiro-kamado.jpg',
       202,
       1000,
       true,
       true,
       new Date("09/09/2023"),
       [{ size: "S", price: 50 }, { size: "M", price: 80 }, { size: "L", price: 100 }]
 
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