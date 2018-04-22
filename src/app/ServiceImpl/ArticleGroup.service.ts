import {IArticleGroupService} from "../IServices/IArticleGroupService";

export class ArticleGroupService implements IArticleGroupService {
  searchArticleGroup(userID:number): IResultInfo {
    // ...
    const res: IArticleGroup[] = [
      {GroupID:1,GroupTitle:'数据结构与算法'},
      {GroupID:0,GroupTitle:'程序员的数学'},
      ];
    return {
      ErrorCode: '0000',
      Message: '',
      Result: res
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
