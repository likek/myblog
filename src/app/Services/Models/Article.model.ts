import {Dict_Identity,Dict_ResultInfo,Dict_PageInfo} from './Dict.model'
import {Observable} from "rxjs/Observable";
interface ISaveArticleInput{
  ID?: number; // null表示新增
  UserCode: number;
  GroupID?: number;
  Title?: string;
  Content?: string;
}

export interface ArticleModel {
  // 保存文章(新增和修改)
  saveArticle(idetity: Dict_Identity, json: ISaveArticleInput): Observable<Dict_ResultInfo>;
  // 删除文章
  deleteArticle(idetity: Dict_Identity, articleID: number): Observable<Dict_ResultInfo>;
  // 加载文章
  loadArticle(articleID: number): Observable<Dict_ResultInfo>;
  // 查询用户某分组下的所有文章简略信息
  searchArticle(userID: number, groupID: number, pageInfo: Dict_PageInfo): Observable<Dict_ResultInfo>;
}
