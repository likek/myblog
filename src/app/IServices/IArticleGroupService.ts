import {IResultInfo} from "./ICommon";
import {Observable} from "rxjs/Observable";
interface ISaveArticleGroupInput {
  GroupID?: number;//空表示新增
  GroupTitle?: string;//默认为all
}
export interface IArticleGroupService {
  // 查询分组
  searchArticleGroup(userID:number): Observable<IResultInfo>;
  // 加载分组信息
  loadArticleGroup(groupID: number): Observable<IResultInfo>;
  //保存分组(新增和修改)
  saveArticleGroup(userID:number, group: ISaveArticleGroupInput): Observable<IResultInfo>;
}
