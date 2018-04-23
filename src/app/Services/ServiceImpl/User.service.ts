import {UserModel} from '../Models/User.model';
import {Dict_ResultInfo,Dict_Identity} from '../Models/Dict.model'
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {RESULTINFO} from "./mock-data";
import {of} from "rxjs/observable/of";

@Injectable()
export class UserService implements UserModel {
  public searchUser(identity: Dict_Identity): Observable<Dict_ResultInfo> {
    // ...
    return of(RESULTINFO);
  }
  public saveUser(identity: Dict_Identity, user): Observable<Dict_ResultInfo> {
    // ...
    return of(RESULTINFO);
  }
  public loadUser(userID: number): Observable<Dict_ResultInfo> {
    // ...
    return of(RESULTINFO);
  }
}
