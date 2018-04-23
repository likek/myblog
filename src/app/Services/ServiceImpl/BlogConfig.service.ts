import {BlogConfigModel} from "../Models/BlogConfig.model";
import {Dict_ResultInfo,Dict_BlogConfig} from '../Models/Dict.model'
import {Injectable} from "@angular/core";
import {BLOGCONFIG, RESULTINFO} from "./mock-data";
import {of} from "rxjs/observable/of";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BlogConfigService implements BlogConfigModel {
  loadBlogConfig(userID: number): Observable<Dict_ResultInfo> {
    // ...
    return of(BLOGCONFIG);
  }
  saveBlogConfig(userID: number, blogConfig): Observable<Dict_ResultInfo>{
    // ...
    return of(RESULTINFO);
  }
}
