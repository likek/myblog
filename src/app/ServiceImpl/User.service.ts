import {IUserService} from '../IServices/IUserService';

class UserService implements IUserService {
  public searchUser(identity: IIdentity): IResultInfo {
    // ...
    return {
      ErrorCode: '0000',
      Message: '',
      Result: ''
    };
  }
  public saveUser(identity: IIdentity, user): IResultInfo {
    // ...
    return {
      ErrorCode: '0000',
      Message: '',
      Result: ''
    };
  }
  public loadUser(userID: number): IResultInfo {
    // ...
    return {
      ErrorCode: '0000',
      Message: '',
      Result: ''
    };
  }
}
