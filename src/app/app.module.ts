import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { MessageComponent } from './components/message/message.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FavouriteAddComponent } from './components/favourite-add/favourite-add.component';
import { RateComponent } from './components/rate/rate.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ProductListComponent, ProductDetailsComponent, MessageComponent, SidebarComponent, FavouriteAddComponent, RateComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
