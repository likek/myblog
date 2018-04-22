import {IUserService} from '../IServices/IUserService';
import {IResultInfo,IIdentity} from '../IServices/ICommon'
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {RESULTINFO} from "./mock-data";
import {of} from "rxjs/observable/of";

@Injectable()
export class UserService implements IUserService {
  public searchUser(identity: IIdentity): Observable<IResultInfo> {
    // ...
    return of(RESULTINFO);
  }
  public saveUser(identity: IIdentity, user): Observable<IResultInfo> {
    // ...
    return of(RESULTINFO);
  }
  public loadUser(userID: number): Observable<IResultInfo> {
    // ...
    return of(RESULTINFO);
  }
}
