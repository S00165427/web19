import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpaces } from './shared/convert-to-spaces.pipe';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestoreModule } from '@angular/fire/firestore'; 
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AddproductComponent } from './addproduct/addproduct.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SignupComponent } from './signup/signup.component';
import {MatButtonModule, MatMenuModule, MatToolbarModule,MatIconModule,MatCardModule, MatFormFieldModule,MatListModule} from '@angular/material';
import { AuthGuard } from './service/auth.guard';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full',canActivate: [AuthGuard] },
  {path: 'product-list', component: ProductListComponent,canActivate: [AuthGuard] },
  {path: 'add-product', component: AddproductComponent,canActivate: [AuthGuard] },
  {path: 'home', component: ProductListComponent,canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent },
  {path: '**', redirectTo: 'login', canActivate: [AuthGuard] }

];

NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpaces,
    StarRatingComponent,
    LoginComponent,
    NavbarComponent,
    NotificationsComponent,
    SignupComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase,),
    AngularFirestoreModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,


    
  ],
  providers: [],
  bootstrap: [AppComponent]

 
})


export class AppModule { }
