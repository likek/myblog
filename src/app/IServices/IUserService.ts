import {IResultInfo,IAge,IIdentity,IPageInfo} from './ICommon'
import {Observable} from "rxjs/Observable";

interface ISaveUserInput {
  UserCode?: number;//null表示新增
  UserName?: string;
  NickName?: string;
  password?: string;
  SexCode?: 'M'|'F';
  Age?: IAge;
  Tel?: number;
}

export interface IUserService {
  // 查询所有用户信息
  searchUser(identity: IIdentity, pageInfo: IPageInfo): Observable<IResultInfo>;
  // 保存用户信息(新增和修改)
  saveUser(identity: IIdentity, user: ISaveUserInput): Observable<IResultInfo>;
  // 加载用户信息
  loadUser(userID: number): Observable<IResultInfo>;
}
