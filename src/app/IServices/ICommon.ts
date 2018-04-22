interface IArticle {
  ID: number;
  Title: string;
  Content: string;
  UserCode: number;
  GroupID: number;
}

/*
* 0000: 成功
* 0001: 入参相关错误
* 0002: 没有权限
* 0003: DBService相关错误
* FFFF: 未知错误
* */
interface IResultInfo {
  ErrorCode: '0000'|'0001'|'0002'|'0003'|'FFFF';
  Message: string;
  Result?: any;
}

interface IIdentity {
  UserCode: number;
  SessionID: string;
}

interface IAge {
  Value: number;
  Unit: 'Y'|'M'|'D'|'W';
}

interface IUser {
  readonly UserCode: number;
  UserName: string;
  NickName: string;
  password: string;
  SexCode?: 'M'|'F';
  Age?: IAge;
  Tel?: number;
  // ....
}
// 分页信息(入参)
interface IPageInfo {
  PageSize: number;
  PageIndex: number;
}

interface IArticleGroup{
  readonly GroupID:number,
  GroupTitle:string;
}

interface IBlogConfig {
  BlogTitle: string;
  BlogBgImag?: string;
  BlogBgColor?: string;
  // ...
}
