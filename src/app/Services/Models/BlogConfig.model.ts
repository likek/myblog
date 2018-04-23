import {Dict_ResultInfo} from './Dict.model'
import {Observable} from "rxjs/Observable";
interface ISaveBlogConfigInput {
  BlogTitle?: string;
  BlogBgImag?: string;
  BlogBgColor?: string;
  // ...
}

export interface BlogConfigModel {
  // 加载用户配置信息
  loadBlogConfig(userID: number): Observable<Dict_ResultInfo>;
  // 保存用户配置信息(修改)
  saveBlogConfig(userID: number, blogConfig: ISaveBlogConfigInput): Observable<Dict_ResultInfo>;
}
