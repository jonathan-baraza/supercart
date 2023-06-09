export interface UserType {
  id: string;
  username: string;
  email: string;
  phone: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  dob?: string;
  country?: string;
  language?: string;
  profile: any;
}

export interface AuthStateType {
  isAuthenticated: boolean;
  user: UserType | string | null;
  accessToken: string | null;
  refreshToken: string | null;
  loading: boolean;
}

export interface AuthPayloadType {
  user: UserType;
  accessToken: string;
  refreshToken: string;
}

export interface PhoneInputDataType {
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
}

export interface RegisterType {
  username: string;
  email: string;
  password: string;
  phone: string;
}
export interface LoginType {
  email: string;
  password: string;
}

export interface DecodedTokenType {
  id: string;
  email: string;
  iat: number;
  exp: number;
}

export interface RefreshTokensType {
  accessToken: string;
  refreshToken: string;
}
