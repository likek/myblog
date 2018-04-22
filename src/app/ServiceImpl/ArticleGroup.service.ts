import {IArticleGroupService} from "../IServices/IArticleGroupService";

class ArticleGroupService implements IArticleGroupService {
  searchArticleGroup(userID:number): IResultInfo {
    // ...
    return {
      ErrorCode: '0000',
      Message: '',
      Result: ''
    };
  }
  loadArticleGroup(groupID: number): IResultInfo {
    // ...
    return {
      ErrorCode: '0000',
      Message: '',
      Result: ''
    };
  }
  saveArticleGroup(userID:number, group): IResultInfo {
    // ...
    return {
      ErrorCode: '0000',
      Message: '',
      Result: ''
    };
  }
}
