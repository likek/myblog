import {IBlogConfigService} from "../IServices/IBlogConfigService";

class BlogConfigService implements IBlogConfigService {
  loadBlogConfig(userID: number): IResultInfo {
    // ...
    return {
      ErrorCode: '0000',
      Message: '',
      Result: ''
    };
  }
  saveBlogConfig(userID: number, userConfig){
    // ...
    return {
      ErrorCode: '0000',
      Message: '',
      Result: ''
    };
  }
}
