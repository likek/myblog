import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from "../../Services/ServiceImpl/Article.service";
import {Dict_Article, Dict_PageInfo} from "../../Services/Models/Dict.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  protected userID: number;
  protected groupID: number;
  protected articleList?: Dict_Article[];
  constructor(
    private articleService: ArticleService,
    private activatedRoute:ActivatedRoute,
  ) {}

  ngOnInit() {
    this.userID = this.activatedRoute.snapshot.queryParams['userID'];
    this.groupID = this.activatedRoute.snapshot.queryParams['groupID'];
    this.activatedRoute.queryParams.subscribe((params:Params)=>{
      this.userID = params['userID'];this.groupID = params['groupID'];
      this.loadArticleList();
    });
  }

  private loadArticleList() {
    const pageInfo: Dict_PageInfo = {
      PageSize: 9999,
      PageIndex: 1,
    };
    this.articleService.searchArticle(this.userID,this.groupID,pageInfo).subscribe(res=>{
      switch (res.ErrorCode){
        case '0000':
          this.articleList = res.Result;
          break;
        case '0001':
        case '0002':
        case '0003':
        default:
          // ...
      }
    })
  }

}
