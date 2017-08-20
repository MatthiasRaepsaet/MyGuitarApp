import {GuitarDto} from './GuitarDto';
/**
 * Created by Matthias on 19/08/2017.
 */
export class UserDto {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  guitars: GuitarDto[];
}
