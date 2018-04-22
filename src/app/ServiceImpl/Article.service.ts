import {IArticleService} from '../IServices/IArticleService';

class ArticleService implements IArticleService {
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
  public searchArticle(userID: number, groupID: number, pageInfo: IPageInfo): IResultInfo {
    // ...
    return {
      ErrorCode: '0000',
      Message: '',
      Result: ''
    };
  }
}
