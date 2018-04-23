import {Component, Input, OnInit} from '@angular/core';
import {ArticleService} from "../../Services/ServiceImpl/Article.service";
import {Dict_Article, Dict_ErrorCode} from "../../Services/Models/Dict.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  protected article: Dict_Article;
  protected articleID: number;
  // ...
  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params)=>{
      this.articleID = params['articleID'];
      this.loadArticle();
    });
  }

  private loadArticle(){
    if(!this.articleID)return;
    this.articleService.loadArticle(this.articleID).subscribe(res=>{
      switch (res.ErrorCode){
        case Dict_ErrorCode.E0000:
          this.article = res.Result;
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
