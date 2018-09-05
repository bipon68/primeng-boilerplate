import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private USERS: User[] = [
    {
        firstName: 'Jane',
        lastName: 'Doe'
    },
    {
        firstName: 'John',
        lastName: 'Doe'
    }
];

  constructor() { }

  getUsers(): User[] {
    return this.USERS;
}

}
