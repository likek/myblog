import {IBlogConfigService} from "../IServices/IBlogConfigService";
import {IResultInfo,IBlogConfig} from '../IServices/ICommon'
import {Injectable} from "@angular/core";
import {BLOGCONFIG, RESULTINFO} from "./mock-data";
import {of} from "rxjs/observable/of";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BlogConfigService implements IBlogConfigService {
  loadBlogConfig(userID: number): Observable<IResultInfo> {
    // ...
    return of(BLOGCONFIG);
  }
  saveBlogConfig(userID: number, blogConfig): Observable<IResultInfo>{
    // ...
    return of(RESULTINFO);
  }
}
