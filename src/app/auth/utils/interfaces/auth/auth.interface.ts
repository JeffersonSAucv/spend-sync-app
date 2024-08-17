export interface AuthResponse {
  statusCode: number;
  message: string;
  token: string;
  user: UserData;
}
export interface UserData {
  firstname: null;
  lastname: null;
  nickname: string;
  email: string;
}
export interface UserLocalStorage {
  nickname: string;
  email: string;
  firstname: null;
  lastname: null;
  token: string;
}

export interface RegisterRequest {
  nickname: string;
  email: string;
  password: string;
}
