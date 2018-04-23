import {ArticleModel} from '../Models/Article.model';
import {Dict_Identity,Dict_ResultInfo,Dict_PageInfo} from "../Models/Dict.model";
import {Injectable} from "@angular/core";
import { Observable} from 'rxjs/observable';
import {of} from "rxjs/observable/of";
import {ARTICLE, ARTICLELISTGROUP1, ARTICLELISTGROUP2, ARTICLELISTGROUPALL, RESULTINFO} from "./mock-data";

@Injectable()
export class ArticleService implements ArticleModel {
  public saveArticle(idetity: Dict_Identity, json): Observable<Dict_ResultInfo> {
    // ...
    return of(RESULTINFO);
  }

  public deleteArticle(idetity: Dict_Identity, articleID: number): Observable<Dict_ResultInfo> {
    // ...
    return of(RESULTINFO);
  }

  public loadArticle(articleID: number): Observable<Dict_ResultInfo> {
    // ...
    return of(ARTICLE);
  }

  public searchArticle(userID: number | null, groupID: number, pageInfo: Dict_PageInfo): Observable<Dict_ResultInfo> {
    // ...
    if(!groupID){
      return of(ARTICLELISTGROUPALL)
    }
    return +groupID===1? of(ARTICLELISTGROUP1) : of(ARTICLELISTGROUP2);
  }
}
