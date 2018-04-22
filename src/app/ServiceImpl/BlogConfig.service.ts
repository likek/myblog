import {IBlogConfigService} from "../IServices/IBlogConfigService";
import {IResultInfo,IBlogConfig} from '../IServices/ICommon'
export class BlogConfigService implements IBlogConfigService {
  loadBlogConfig(userID: number): IResultInfo {
    // ...
    const res: IBlogConfig = {
      BlogBgImag:'',
      BlogBgColor:'#fcdb1b',
      BlogTitle:'xxx的博客主页'
    };
    return {
      ErrorCode: '0000',
      Message: '',
      Result: res
    };
  }
  saveBlogConfig(userID: number, blogConfig){
    // ...
    return {
      ErrorCode: '0000',
      Message: '',
      Result: ''
    };
  }
}
