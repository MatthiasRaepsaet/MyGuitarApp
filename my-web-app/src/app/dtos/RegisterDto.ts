import {GuitarDto} from "./GuitarDto";
/**
 * Created by Matthias on 20/08/2017.
 */
export class RegisterDto{
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  guitars: GuitarDto[];
}
