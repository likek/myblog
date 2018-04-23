import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ArticleGroupService} from "../../Services/ServiceImpl/ArticleGroup.service";
import {BlogConfigService} from "../../Services/ServiceImpl/BlogConfig.service";
import {Dict_ArticleGroup,Dict_ResultInfo,Dict_BlogConfig} from "../../Services/Models/Dict.model";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {
  protected articleGroupList: Dict_ArticleGroup[];
  protected title: string = '';
  protected bgColor: string = '#fff';
  protected bgImg: string = '';
  protected currGroupID?: number = null;
  protected userID:number = +this.route.snapshot.paramMap.get('id');

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
    this.articleGroupService.searchArticleGroup(this.userID).subscribe(res=>{
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
    });
  }
  private loadBlogConfig(){
    this.blogConfigService.loadBlogConfig(this.userID).subscribe(blogConfigRes=>{
      switch (blogConfigRes.ErrorCode){
        case '0000':
          const res: Dict_BlogConfig = blogConfigRes.Result;
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
    });
  }
}
