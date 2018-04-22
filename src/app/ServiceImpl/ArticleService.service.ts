import {ArticleService} from '../IServices/ArticleService';

class ArticleServiceService implements ArticleService {
  public saveArticle(idetity: Identity, json: Article): ResultInfo {
    // ...
    return {
      ErrorCode: '0000',
      Message: '',
      Result: ''
    };
  }
  public deleteArticle(idetity: Identity, articleID: number): ResultInfo {
    // ...
    return {
      ErrorCode: '0000',
      Message: '',
      Result: ''
    };
  }
  public loadArticle(articleID: number): ResultInfo {
    // ...
    return {
      ErrorCode: '0000',
      Message: '',
      Result: ''
    };
  }
  public searchArticle(usercode: number, pageInfo: PageInfo): ResultInfo {
    // ...
    return {
      ErrorCode: '0000',
      Message: '',
      Result: ''
    };
  }
}
