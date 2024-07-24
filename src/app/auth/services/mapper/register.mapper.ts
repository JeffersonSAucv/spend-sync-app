import {
  RegisterResponse,
  UserLocalStorage,
} from '../../utils/interfaces/register-req-res/register-rq-rs.interface';

export function registerMapper(response: RegisterResponse): UserLocalStorage {
  return {
    token: response.token,
    nickname: response.user.nickname,
    email: response.user.email,
  };
}
