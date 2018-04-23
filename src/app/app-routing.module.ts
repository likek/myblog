import { NgModule } from '@angular/core';
import {RouterModule,Routes} from "@angular/router";
import {BlogComponent} from "./components/blog/blog.component";
import {IndexComponent} from "./components/index/index.component";
import {ArticleListComponent} from "./components/article-list/article-list.component";
import {ArticleDetailComponent} from "./components/article-detail/article-detail.component";

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'blog/:id',component:BlogComponent,children:[
      {path:'articleList',component:ArticleListComponent},
      {path:'article',component:ArticleDetailComponent},
    ]}
  ];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
