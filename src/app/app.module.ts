import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HeadphonesComponent } from './headphones/headphones.component';
import { SunglassesComponent } from './sunglasses/sunglasses.component';
import { WatchComponent } from './watch/watch.component';
import { ProductsComponent } from './products/products.component';
import { GetAPIService } from './get-api.service';
import { CommonModule } from '@angular/common'
@NgModule({
  declarations: [
    AppComponent,
    HeadphonesComponent,
    SunglassesComponent,
    WatchComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GetAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
