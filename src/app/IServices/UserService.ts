export interface UserService {
  // 查询所有用户
  searchUser(identity: Identity, pageInfo: PageInfo): ResultInfo;
  // 保存用户(包括新增和修改)
  saveUser(identity: Identity, user: User): ResultInfo;
  // 加载用户信息
  loadUser(identity: Identity, userCode: number): ResultInfo;
}
