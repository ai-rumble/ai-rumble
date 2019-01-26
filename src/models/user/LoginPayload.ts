export class LoginPayload {
  public identifier: string;
  public password: string;

  constructor(username: string, password: string) {
    this.identifier = username;
    this.password = password;
  }
}
