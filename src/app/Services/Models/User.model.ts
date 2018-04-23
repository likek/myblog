import {Dict_ResultInfo,Dict_Age,Dict_Identity,Dict_PageInfo} from './Dict.model'
import {Observable} from "rxjs/Observable";

interface ISaveUserInput {
  UserCode?: number;//null表示新增
  UserName?: string;
  NickName?: string;
  password?: string;
  SexCode?: 'M'|'F';
  Age?: Dict_Age;
  Tel?: number;
}

export interface UserModel {
  // 查询所有用户信息
  searchUser(identity: Dict_Identity, pageInfo: Dict_PageInfo): Observable<Dict_ResultInfo>;
  // 保存用户信息(新增和修改)
  saveUser(identity: Dict_Identity, user: ISaveUserInput): Observable<Dict_ResultInfo>;
  // 加载用户信息
  loadUser(userID: number): Observable<Dict_ResultInfo>;
}
