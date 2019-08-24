import { Injectable } from '@angular/core';
import { IProduct } from '../product-list/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Injectable()

export class ProductService {
  private _productUrl = 'http://localhost:3000/products';
  productsCollection : AngularFirestoreCollection<IProduct>;
  products: Observable<IProduct[]>;
  allProducts: IProduct[];
  errorMessage: string;

  constructor(private _http:HttpClient,private _afs: AngularFirestore) {
    this.productsCollection = _afs.collection<IProduct>("products");
   }

  getProducts(): Observable<IProduct[]> {
    this.products = this.productsCollection.valueChanges();

    this.products.subscribe(data => console.log("getProducts" + data));
    return this.products;

    //return this._http.get<IProduct[]>(this._productUrl)
    //.do(data=>console.log('All: '+JSON.stringify(data)))
    //.catch(this.handleError);
  }
  addProduct(product : IProduct): void {
    this.productsCollection.add(product);
  }

  addAllProducts(){
    this._http.get<IProduct[]>(this._productUrl).subscribe( 
      products => {
        this.allProducts = products;
        for (let product of this.allProducts){
          console.log("Adding: "+ product.productName)
          this.productsCollection.add(product);
        }
      }, 
      error => (this.errorMessage = <any>error)
      
    );
    }
  private handleError(err: HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
