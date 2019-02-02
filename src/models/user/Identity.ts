import { Role } from './Role';

export interface Identity {
  _id: string;
  confirmed: boolean;
  blocked: boolean;
  username: string;
  email: string;
  provider: string;
  role: Role;
  __v: number;
  userprofile: string;
  id: string;
}
