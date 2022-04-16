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
import { HttpClientModule } from '@angular/common/http';
import { AddArticleComponent } from './add-article/add-article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ArticleListComponent,
    ArticleMetaComponent,
    ArticleDetaiilComponent,
    AddArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
