import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ArticleGroupService} from "../ServiceImpl/ArticleGroup.service";
import {BlogConfigService} from "../ServiceImpl/BlogConfig.service";
import {IArticleGroup,IResultInfo,IBlogConfig} from "../IServices/ICommon";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public articleGroupList: IArticleGroup[];
  public title: string = '';
  public bgColor: string = '#fff';
  public bgImg: string = '';
  private userID:number = +this.route.snapshot.paramMap.get('id');

  constructor(
    private route: ActivatedRoute,
    private articleGroupService: ArticleGroupService,
    private blogConfigService: BlogConfigService,
  ) {}

  ngOnInit() {
    this.loadArticleGroupList();
    this.loadBlogConfig();
  }

  private loadArticleGroupList(){
    const res:IResultInfo = this.articleGroupService.searchArticleGroup(this.userID);
    switch (res.ErrorCode) {
      case '0000':
        this.articleGroupList = res.Result;
        break;
      case '0001':
      case '0002':
      case '0003':
      default:
        // ...
    }
  }
  private loadBlogConfig(){
    const blogConfigRes: IResultInfo = this.blogConfigService.loadBlogConfig(this.userID);
    switch (blogConfigRes.ErrorCode){
      case '0000':
        const res: IBlogConfig = blogConfigRes.Result;
        if(res){
          this.title = res.BlogTitle;
          this.bgColor = res.BlogBgColor;
          this.bgImg = res.BlogBgImag;
        }
        break;
      case '0001':
      case '0002':
      case '0003':
      default:
        // ...
    }
  }
}
