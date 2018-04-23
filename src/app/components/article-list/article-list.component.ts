import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from "../../Services/ServiceImpl/Article.service";
import {Dict_Article, Dict_PageInfo,Dict_ErrorCode} from "../../Services/Models/Dict.model";
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
        case Dict_ErrorCode.E0000:
          this.articleList = res.Result;
          break;
        case Dict_ErrorCode.E0001:
        case Dict_ErrorCode.E0002:
        case Dict_ErrorCode.E0003:
        case Dict_ErrorCode.EFFFF:
        default:
          // ...
      }
    })
  }

}
