import { RelatedEntity } from './RelatedEntity';

export interface Image {
  _id: string;
  name: string;
  sha256: string;
  hash: string;
  ext: string;
  mime: string;
  size: string;
  url: string;
  provider: string;
  related?: (RelatedEntity)[] | null;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}
