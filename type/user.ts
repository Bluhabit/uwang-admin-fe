export type UserResponse = {
    id: string;
    full_name: string;
    email: string;
    dateOfBirth: string;
    auth_provider: string;
    status: string;
    created_at: string;
    updated_at: string;
    roles: string[];
    profile: string[];
}

export type SignInResponse = {
    token: string;
    user: any;
    isSuccessful: boolean;
    message?: string;
  };
  
  export type ErrorResponse = {
    message: string;
  };
  
  export type SignInRequestParams = {
    email: string;
    password: string;
  };
  
  export type SignInRequest = {
    then: (callback: (response: SignInResponse) => void) => void;
    catch: (callback: (error: ErrorResponse) => void) => void;
  };