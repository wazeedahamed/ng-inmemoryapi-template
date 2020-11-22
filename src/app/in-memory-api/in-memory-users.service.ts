import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IUser } from '../__interface/IUser';

export class InMemoryUsersService implements InMemoryDbService {
  constructor() { }
  private _id: number = 0;

  createDb() {
    let users: IUser[] = [
      { id: 1, name: 'User 1', gender: "Male" },
      { id: 2, name: 'User 2', gender: "Female" },
      { id: 3, name: 'User 3', gender: "Male" },
      { id: 4, name: 'User 4', gender: "Female" }
    ];
    this._id = users.length;
    return { users };
  }

  // Overrides the genId method to ensure that a user always has an id.
  genId = (users: IUser[]): number => ++this._id;

  responseInterceptor = (responseOptions: any, requestInfo: any) => {
    switch (requestInfo.method) {
      case 'put': {
        responseOptions.body = { ...requestInfo.collection.find((u: IUser) => u.id == requestInfo.id) };
        break;
      }
      case 'delete': {
        responseOptions.body = true;
        break;
      }
    }
    return responseOptions;
  }

}
