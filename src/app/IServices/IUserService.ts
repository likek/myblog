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
  searchUser(identity: IIdentity, pageInfo: IPageInfo): IResultInfo;
  // 保存用户信息(新增和修改)
  saveUser(identity: IIdentity, user: ISaveUserInput): IResultInfo;
  // 加载用户信息
  loadUser(userID: number): IResultInfo;
}
