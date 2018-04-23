import {Dict_ResultInfo} from "./Dict.model";
import {Observable} from "rxjs/Observable";
interface ISaveArticleGroupInput {
  GroupID?: number;//空表示新增
  GroupTitle?: string;//默认为all
}
export interface ArticleGroupModel {
  // 查询分组
  searchArticleGroup(userID:number): Observable<Dict_ResultInfo>;
  // 加载分组信息
  loadArticleGroup(groupID: number): Observable<Dict_ResultInfo>;
  //保存分组(新增和修改)
  saveArticleGroup(userID:number, group: ISaveArticleGroupInput): Observable<Dict_ResultInfo>;
}
