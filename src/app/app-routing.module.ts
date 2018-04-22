import { NgModule } from '@angular/core';
import {RouterModule,Routes} from "@angular/router";
import {BlogComponent} from "./blog/blog.component";
import {IndexComponent} from "./index/index.component";

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'blog/:id',component:BlogComponent}
  ];


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
