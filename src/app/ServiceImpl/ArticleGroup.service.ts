import {IArticleGroupService} from "../IServices/IArticleGroupService";
import {IResultInfo,IArticleGroup} from '../IServices/ICommon'
import {Injectable} from "@angular/core";
import {of} from "rxjs/observable/of";
import {ARTICLEGROUPLIST, RESULTINFO} from './mock-data'
import {Observable} from "rxjs/Observable";

@Injectable()
export class ArticleGroupService implements IArticleGroupService {
  searchArticleGroup(userID:number): Observable<IResultInfo> {
    // ...
    return of(ARTICLEGROUPLIST);
  }
  loadArticleGroup(groupID: number): Observable<IResultInfo> {
    // ...
    return of(RESULTINFO);
  }

  saveArticleGroup(userID:number, group): Observable<IResultInfo> {
    // ...
    return of(RESULTINFO);
  }
}
