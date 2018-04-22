import {IResultInfo} from "../IServices/ICommon";
import {ErrorCode} from "../IServices/ICommon";

export const RESULTINFO = {
  ErrorCode : ErrorCode.E0000,
  Message :'',
  Result :''
};
export const ARTICLEGROUPLIST = {
  ErrorCode : ErrorCode.E0000,
  Message : '',
  Result :  [
    {GroupID:1,GroupTitle:'数据结构与算法'},
    {GroupID:0,GroupTitle:'程序员的数学'},
  ]
};

export const BLOGCONFIG = {
  ErrorCode : ErrorCode.E0000,
  Message : '',
  Result :  {
    BlogBgImag:'',
    BlogBgColor:'#fcdb1b',
    BlogTitle:'xxx的博客主页'
  }
};
