import {IResultInfo} from "../IServices/ICommon";
import {ErrorCode} from "../IServices/ICommon";

// 所有模拟数据
export const RESULTINFO: IResultInfo = {
  ErrorCode : ErrorCode.E0000,
  Message :'',
  Result :''
};
export const ARTICLEGROUPLIST: IResultInfo = {
  ErrorCode : ErrorCode.E0000,
  Message : '',
  Result :  [
    {GroupID:null,GroupTitle:'全部文章'},
    {GroupID:1,GroupTitle:'数据结构与算法'},
    {GroupID:2,GroupTitle:'程序员的数学'},
  ]
};

export const BLOGCONFIG: IResultInfo = {
  ErrorCode : ErrorCode.E0000,
  Message : '',
  Result :  {
    BlogBgImag:'',
    BlogBgColor:'#fff',
    BlogTitle:'xxx的博客主页'
  }
};
export const ARTICLELISTGROUP1: IResultInfo = {
  ErrorCode : ErrorCode.E0000,
  Message : '',
  Result :  [
    {ID: 1, Title: '文章1', Content: '文章内容简略信息1', UserCode: 1, GroupID: 1},
    {ID: 2, Title: '文章2', Content: '文章内容简略信息2', UserCode: 1, GroupID: 1},
    {ID: 3, Title: '文章3', Content: '文章内容简略信息3', UserCode: 1, GroupID: 1},
    {ID: 6, Title: '文章6', Content: '文章内容简略信息6', UserCode: 1, GroupID: 1},
    {ID: 7, Title: '文章7', Content: '文章内容简略信息7', UserCode: 1, GroupID: 1},
  ]
};
export const ARTICLELISTGROUP2: IResultInfo = {
  ErrorCode : ErrorCode.E0000,
  Message : '',
  Result :  [
    {ID: 4, Title: '文章4', Content: '文章内容简略信息4', UserCode: 1, GroupID: 2},
    {ID: 5, Title: '文章5', Content: '文章内容简略信息5', UserCode: 1, GroupID: 2},
  ]
};

export const ARTICLELISTGROUPALL: IResultInfo = {
  ErrorCode : ErrorCode.E0000,
  Message : '',
  Result :  ARTICLELISTGROUP1.Result.concat(ARTICLELISTGROUP2.Result),
};
