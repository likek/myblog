import {ArticleGroupModel} from "../Models/ArticleGroup.model";
import {Dict_ResultInfo,Dict_ArticleGroup} from '../Models/Dict.model'
import {Injectable} from "@angular/core";
import {of} from "rxjs/observable/of";
import {ARTICLEGROUPLIST, RESULTINFO} from './mock-data'
import {Observable} from "rxjs/Observable";

@Injectable()
export class ArticleGroupService implements ArticleGroupModel {
  searchArticleGroup(userID:number): Observable<Dict_ResultInfo> {
    // ...
    return of(ARTICLEGROUPLIST);
  }
  loadArticleGroup(groupID: number): Observable<Dict_ResultInfo> {
    // ...
    return of(RESULTINFO);
  }

  saveArticleGroup(userID:number, group): Observable<Dict_ResultInfo> {
    // ...
    return of(RESULTINFO);
  }
}
