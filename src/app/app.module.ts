import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HomeComponent } from './template/home/home.component';
import { ArticleListComponent } from './shared/article-helper/article-list/article-list.component';
import { ArticleMetaComponent } from './shared/article-helper/article-meta/article-meta.component';
import { ArticleDetaiilComponent } from './article-detaiil/article-detaiil.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ArticleListComponent,
    ArticleMetaComponent,
    ArticleDetaiilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
