import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ArticleGroupService} from "../../Services/ServiceImpl/ArticleGroup.service";
import {BlogConfigService} from "../../Services/ServiceImpl/BlogConfig.service";
import {Dict_ArticleGroup,Dict_ErrorCode,Dict_BlogConfig} from "../../Services/Models/Dict.model";

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
        case Dict_ErrorCode.E0000:
          this.articleGroupList = res.Result;
          break;
        case Dict_ErrorCode.E0001:
        case Dict_ErrorCode.E0002:
        case Dict_ErrorCode.E0003:
        case Dict_ErrorCode.EFFFF:
        default:
        // ...
      }
    });
  }
  private loadBlogConfig(){
    this.blogConfigService.loadBlogConfig(this.userID).subscribe(blogConfigRes=>{
      switch (blogConfigRes.ErrorCode){
        case Dict_ErrorCode.E0000:
          const res: Dict_BlogConfig = blogConfigRes.Result;
          if(res){
            this.title = res.BlogTitle;
            this.bgColor = res.BlogBgColor;
            this.bgImg = res.BlogBgImag;
          }
          break;
        case Dict_ErrorCode.E0001:
        case Dict_ErrorCode.E0002:
        case Dict_ErrorCode.E0003:
        case Dict_ErrorCode.EFFFF:
        default:
        // ...
      }
    });
  }
}
