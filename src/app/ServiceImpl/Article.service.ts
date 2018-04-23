import {IArticleService} from '../IServices/IArticleService';
import {IIdentity,IResultInfo,IPageInfo} from "../IServices/ICommon";
import {Injectable} from "@angular/core";
import { Observable} from 'rxjs/observable';
import {of} from "rxjs/observable/of";
import {ARTICLELISTGROUP1,ARTICLELISTGROUP2,ARTICLELISTGROUPALL, RESULTINFO} from "./mock-data";

@Injectable()
export class ArticleService implements IArticleService {
  public saveArticle(idetity: IIdentity, json): Observable<IResultInfo> {
    // ...
    return of(RESULTINFO);
  }

  public deleteArticle(idetity: IIdentity, articleID: number): Observable<IResultInfo> {
    // ...
    return of(RESULTINFO);
  }

  public loadArticle(articleID: number): Observable<IResultInfo> {
    // ...
    return of(RESULTINFO);
  }

  public searchArticle(userID: number | null, groupID: number, pageInfo: IPageInfo): Observable<IResultInfo> {
    // ...
    if(!groupID){
      return of(ARTICLELISTGROUPALL)
    }
    return +groupID===1? of(ARTICLELISTGROUP1) : of(ARTICLELISTGROUP2);
  }
}
