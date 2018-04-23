import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { BlogComponent } from './components/blog/blog.component';
import { ArticleListComponent } from './components/article-list/article-list.component';

import {ArticleService} from "./Services/ServiceImpl/Article.service";
import {ArticleGroupService} from "./Services/ServiceImpl/ArticleGroup.service";
import {BlogConfigService} from "./Services/ServiceImpl/BlogConfig.service";
import {UserService} from "./Services/ServiceImpl/User.service";
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    IndexComponent,
    ArticleListComponent,
    ArticleDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AppRoutingModule,
    MatListModule,
  ],
  providers: [ArticleService,ArticleGroupService,BlogConfigService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
