import { Identity } from './Identity';

export interface User {
  jwt: string;
  user: Identity;
}
