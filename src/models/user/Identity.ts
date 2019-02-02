import { Role } from './Role';
import { UserProfile } from './UserProfile';

export interface Identity {
  _id: string;
  confirmed: boolean;
  blocked: boolean;
  username: string;
  email: string;
  provider: string;
  role: Role;
  __v: number;
  userprofile: UserProfile;
  id: string;
}
