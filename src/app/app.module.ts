import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { BlogComponent } from './blog/blog.component';

import {ArticleService} from "./ServiceImpl/Article.service";
import {ArticleGroupService} from "./ServiceImpl/ArticleGroup.service";
import {BlogConfigService} from "./ServiceImpl/BlogConfig.service";
import {UserService} from "./ServiceImpl/User.service";
import {IArticleGroupService} from "./IServices/IArticleGroupService";

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    IndexComponent,
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
