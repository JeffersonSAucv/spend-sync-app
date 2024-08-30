import {
  AuthResponse,
  UserLocalStorage,
} from '../../utils/interfaces/auth/auth.interface';

export function userMapper(response: AuthResponse): UserLocalStorage {
  return {
    token: response.token,
    nickname: response.user.nickname,
    email: response.user.email,
    firstName: response.user.firstName ?? null,
    lastName: response.user.lastName ?? null,
  };
}
