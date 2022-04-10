import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetaiilComponent } from './article-detaiil/article-detaiil.component';
import { HomeComponent } from './template/home/home.component';

const routes: Routes = [
  {path : '',component : HomeComponent},
  {path : 'article/:id' , component : ArticleDetaiilComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
