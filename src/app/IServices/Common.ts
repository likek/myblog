interface Article {
  ID: number;
  Title: string;
  Content: string;
  UserCode?: number;
}

interface ResultInfo {
  ErrorCode: '0000'|'0001'|'0002'|'0003'|'0004';
  Message: string;
  Result?: any;
}

interface Identity {
  UserCode: number;
  SessionID: string;
}

interface Age {
  Value: number;
  Unit: 'Y'|'M'|'D'|'W';
}

interface User {
  readonly UserCode: number;
  UserName: string;
  NickName: string;
  SexCode?: 'M'|'F';
  Age?: Age;
  Tel?: number;
  // ....
}
// 分页信息(入参)
interface PageInfo {
  PageSize: number;
  PageIndex: number;
}
