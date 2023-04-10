export class Product {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public imageUrl: string,
        public price: number,
        public likes: number,
        public isLiked: boolean,
        public isFavorite: boolean,
        public dateAdded: Date,
        public sizes?: Array<{size:string, price:number}>
        
        ){
        }
}