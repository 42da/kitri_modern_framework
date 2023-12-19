/* root 컴포넌트 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';    // angular 에서 서버와 통신하는 방법
import { Injectable } from '@angular/core';                 // 자주 쓰는 서비스를 빠르게 사용할 수 있도록 함.

import { AppComponent } from './app.component';
import { ShopHeaderComponent } from './shop-header/shop-header.component';
import { ShopBreadcrumbComponent } from './shop-breadcrumb/shop-breadcrumb.component';
import { ShopContentComponent } from './shop-content/shop-content.component';
import { ContentDescriptionComponent } from './shop-content/content-description/content-description.component';
import { ContentListComponent } from './shop-content/content-list/content-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopHeaderComponent,
    ShopBreadcrumbComponent,
    ShopContentComponent,
    ContentDescriptionComponent,
    ContentListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,       // angular 에서 서버와 통신하는 방법
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
