import { Image } from './Image';

export interface Competition {
  name: string;
  description: string;
  start_time: string;
  end_time: string;
  is_open: boolean;
  is_running: boolean;
  min_num_team_members: number;
  max_num_team_members: number;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
  image: Image;
  image_thumbnail?: null;
  games?: (null)[] | null;
  registrations?: (null)[] | null;
}
