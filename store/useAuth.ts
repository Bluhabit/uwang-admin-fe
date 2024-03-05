import { defineStore } from 'pinia';

const { post } = useApi();

export const useAuth = defineStore('auth', {
  state: () => ({
    token: '',
    user: {} as UserResponse,
    isLoggedIn: false,
    errorMessage: ''
  }),
  actions: {
    signIn(email: string, password: string) {
      const signInRequest = post<{ token: string; user: any }>('auth/v1/admin/sign-in', {
        email,
        password,
      });

      signInRequest.then((response) => {
        if (response.isSuccessful) {
          if (response.data) {
            this.token = response.data.token;
            this.user = response.data.user;
            this.isLoggedIn = true;
            console.log('Sign in successful');
          } else {
            this.errorMessage = 'No data received from the server';
            console.error('Sign in failed: No data received');
          }
        } else {
          this.errorMessage = response.message || 'Sign in failed';
          console.error('Sign in failed');
        }
      });

      signInRequest.catch((error) => {
        console.error('Error:', error);
      });
    }
  }
});
