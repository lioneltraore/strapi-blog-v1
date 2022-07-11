import { ArticlesComponent } from './component/articles/articles.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './component/article/article.component';
import { CategoryComponent } from './component/category/category.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
  },
  {
    path: 'articles/:id',
    component: ArticleComponent,
  },
  {
    path: 'category/:id',
    component: CategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
