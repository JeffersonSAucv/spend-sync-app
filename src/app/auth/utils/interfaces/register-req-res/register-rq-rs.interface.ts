export interface RegisterRequest {
  nickname: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  statusCode: number;
  message: string;
  token: string;
  user: UserData;
}

interface UserData {
  nickname: string;
  email: string;
}

export interface UserLocalStorage {
  nickname: string;
  email: string;
  token: string;
}
