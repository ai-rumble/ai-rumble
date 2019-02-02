import { Image } from '../Image';
import { Identity } from './Identity';

export class UserProfile {
  username: string;
  email: string;
  about_me: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
  user: Identity;
  picture: Image;
  sent_invitations?: (null)[] | null;
  received_invitations?: (null)[] | null;
  registrations?: (null)[] | null;
}
