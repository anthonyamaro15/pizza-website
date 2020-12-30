import axios from 'axios';
import { serverUrl } from '../../envVariables';

interface NewPassword {
   password: string;
}

export const resetPassswordRequest = async (password: NewPassword, token: string) => {
   return await axios.patch(`${serverUrl}/api/resetpassword/${token}`, password);
}
