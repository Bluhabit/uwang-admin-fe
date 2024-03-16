import { defineStore } from 'pinia';

const { post } = useApi();

export const useAuth = defineStore<string, { token: string, user: UserResponse, isLoggedIn: boolean, errorMessage: string }, {}, {}>('auth', {
  state: () => ({
    token: '',
    user: {},
    isLoggedIn: false,
    errorMessage: ''
  }),
  actions: {
    async signIn(email: string, password: string) {
      if (!email || !password) {
        this.errorMessage = "Email and password are required.";
        return;
      }
  
      const signInRequest = post<{ token: string; user: any }>('auth/v1/admin/sign-in', {
        email,
        password,
      });
  
      const response = await signInRequest;

      if (!response.isSuccessful) {
        this.errorMessage = response.message || 'Sign in failed';
        return;
      }
      
      if (!response.data) {
        this.errorMessage = 'No data received from the server';
        return;
      }
      this.token = response.data.token;
      this.user = response.data.user;
      this.isLoggedIn = true;
    }
  }
});
