import { Image } from '../Image';

export class UserProfilePayload {
  public username: string;
  public email: string;
  public user: string;
  //public picture: Image;

  constructor(username: string, email: string, user: string) {
    this.username = username;
    this.email = email;
    this.user = user;
  }
}
