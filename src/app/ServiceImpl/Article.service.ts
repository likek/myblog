import {IArticleService} from '../IServices/IArticleService';
import {IIdentity,IResultInfo,IPageInfo} from "../IServices/ICommon";

export class ArticleService implements IArticleService {
  public saveArticle(idetity: IIdentity, json): IResultInfo {
    // ...
    return {
      ErrorCode: '0000',
      Message: '',
      Result: ''
    };
  }
  public deleteArticle(idetity: IIdentity, articleID: number): IResultInfo {
    // ...
    return {
      ErrorCode: '0000',
      Message: '',
      Result: ''
    };
  }
  public loadArticle(articleID: number): IResultInfo {
    // ...
    return {
      ErrorCode: '0000',
      Message: '',
      Result: ''
    };
  }
  public searchArticle(userID: number|null, groupID: number, pageInfo: IPageInfo): IResultInfo {
    // ...
    return {
      ErrorCode: '0000',
      Message: '',
      Result: ''
    };
  }
}
