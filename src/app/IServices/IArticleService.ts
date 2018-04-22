import {IIdentity,IResultInfo,IPageInfo} from './ICommon'
import {Observable} from "rxjs/Observable";
interface ISaveArticleInput{
  ID?: number; // null表示新增
  UserCode: number;
  GroupID?: number;
  Title?: string;
  Content?: string;
}

export interface IArticleService {
  // 保存文章(新增和修改)
  saveArticle(idetity: IIdentity, json: ISaveArticleInput): Observable<IResultInfo>;
  // 删除文章
  deleteArticle(idetity: IIdentity, articleID: number): Observable<IResultInfo>;
  // 加载文章
  loadArticle(articleID: number): Observable<IResultInfo>;
  // 查询用户某分组下的所有文章
  searchArticle(userID: number, groupID: number, pageInfo: IPageInfo): Observable<IResultInfo>;
}
