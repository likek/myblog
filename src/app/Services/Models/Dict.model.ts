/*
* 0000: 成功
* 0001: 入参相关错误
* 0002: 没有权限
* 0003: DBService相关错误
* FFFF: 未知错误
* */
export enum Dict_ErrorCode {
  E0000 = '0000',
  E0001 = '0001',
  E0002 = '0002',
  E0003 = '0003',
  EFFFF = 'FFFF',
}

export enum Dict_AgeUnit {
  Y = 'Y',
  M = 'M',
  D = 'D',
  W = 'W',
}
export enum Dict_SexCode {
  M = 'M',
  F = 'F',
}

export interface Dict_Article {
  readonly ID: number;
  Title: string;
  Content: string;
  UserID: number;
  GroupID: number;
  // ....
}

export interface Dict_ResultInfo {
  ErrorCode: Dict_ErrorCode;
  Message: string;
  Result?: any;
}

export interface Dict_Identity {
  UserID: number;
  SessionID: string;
}

export interface Dict_Age {
  Value: number;
  Unit: Dict_AgeUnit;
}

export interface Dict_User {
  readonly UserID: number;
  UserName: string;
  NickName: string;
  password: string;
  SexCode?: Dict_SexCode;
  Age?: Dict_Age;
  Tel?: number;
  // ....
}
// 分页信息(入参)
export interface Dict_PageInfo {
  PageSize: number;
  PageIndex: number;
}

export interface Dict_ArticleGroup{
  readonly GroupID?:number,
  GroupTitle:string;
}

export interface Dict_BlogConfig {
  readonly UserID: number;
  BlogTitle: string;
  BlogBgImag?: string;
  BlogBgColor?: string;
  // ...
}
