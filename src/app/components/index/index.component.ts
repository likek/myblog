import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../Services/ServiceImpl/Article.service";
import {Dict_Article, Dict_ErrorCode, Dict_PageInfo} from "../../Services/Models/Dict.model";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  protected title: string = 'xxx博客平台';
  protected recommendedArticleList: Dict_Article[];

  constructor(
    private articleService: ArticleService,
  ) { }

  ngOnInit() {
    this.loadRecommendedArticleList();
  }

  private loadRecommendedArticleList(){
    const pageinfo: Dict_PageInfo = {
      PageIndex:1,
      PageSize:100,
    };
    this.articleService.searchArticle(null,null,pageinfo).subscribe(res=>{
      switch (res.ErrorCode) {
        case Dict_ErrorCode.E0000:
          this.recommendedArticleList = res.Result;
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
