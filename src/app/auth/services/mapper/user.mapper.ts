import {
  AuthResponse,
  UserLocalStorage,
} from '../../utils/interfaces/auth/auth.interface';

export function userMapper(response: AuthResponse): UserLocalStorage {
  return {
    token: response.token,
    nickname: response.user.nickname,
    email: response.user.email,
    firstname: response.user.firstname ?? null,
    lastname: response.user.lastname ?? null,
  };
}
