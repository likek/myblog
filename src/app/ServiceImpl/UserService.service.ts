import {UserService} from '../IServices/UserService';

class UserServiceService implements UserService {
  public searchUser(identity: Identity): ResultInfo {
    // ...
    return {
      ErrorCode: '0000',
      Message: '',
      Result: ''
    };
  }
  public saveUser(identity: Identity, user: User): ResultInfo {
    // ...
    return {
      ErrorCode: '0000',
      Message: '',
      Result: ''
    };
  }
  public loadUser(identity: Identity, userCode: number): ResultInfo {
    // ...
    return {
      ErrorCode: '0000',
      Message: '',
      Result: ''
    };
  }
}
