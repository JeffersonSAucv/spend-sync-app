export interface AuthResponse {
  statusCode: number;
  message: string;
  token: string;
  user: UserData;
}
export interface UserData {
  firstName: null;
  lastName: null;
  nickname: string;
  email: string;
}
export interface UserLocalStorage {
  nickname: string;
  email: string;
  firstName: null;
  lastName: null;
  token: string;
}

export interface RegisterRequest {
  nickname: string;
  email: string;
  password: string;
}
