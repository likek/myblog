import {IIdentity,IResultInfo,IPageInfo} from './ICommon'
interface ISaveArticleInput{
  ID?: number; // null表示新增
  UserCode: number;
  GroupID?: number;
  Title?: string;
  Content?: string;
}

export interface IArticleService {
  // 保存文章(新增和修改)
  saveArticle(idetity: IIdentity, json: ISaveArticleInput): IResultInfo;
  // 删除文章
  deleteArticle(idetity: IIdentity, articleID: number): IResultInfo;
  // 加载文章
  loadArticle(articleID: number): IResultInfo;
  // 查询用户某分组下的所有文章
  searchArticle(userID: number, groupID: number, pageInfo: IPageInfo): IResultInfo;
}
