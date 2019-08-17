import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  pageTitle: string = "Ciara's products";
  imageWidth:number = 50;
  imageMargin: number = 2;
  showImage:boolean=false;


    products: any[] = [
    {
      'productId':2,
      'productName':'Garden Cart',
      'productCode':'123-abc',
      'releaseDate':'March 18, 2016',
      'description':'This is a test product1',
      'price':22.22,
      'starRatin':4.5,
      'imageUrl':'https://www.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.jpg' 
        },
        {
          'productId':5,
          'productName':'Garden Cart233',
          'productCode':'123-abc',
          'releaseDate':'March 18, 2016',
          'description':'This is a test product1',
          'price':22242.22,
          'starRatin':4.5,
          'imageUrl':'https://i.ytimg.com/vi/YCaGYUIfdy4/maxresdefault.jpg' 
            }
  ];
  toggleImage():void{
    this.showImage=!this.showImage;
  }
}
 