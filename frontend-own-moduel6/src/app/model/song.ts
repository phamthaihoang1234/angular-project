import {album} from './album';
import {singer} from './singer';

class User {
}

export interface song {
  id?: number;
  name?: string;
  file?: string;
  creationTime?: any;
  numberOfView?: number;
  author?: string;
  avatar?: string;
  lyric?: string;
  album?: album;
  user?: User;
  singers?: singer[];

}
