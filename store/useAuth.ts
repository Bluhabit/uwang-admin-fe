import { defineStore } from 'pinia';

const {post} = useApi()

export const useAuth = defineStore('auth', {
  state: () => ({
    token: '',
    user: {
      id: '',
      full_name: '',
      email: '',
      dateOfBirth: '',
      auth_provider: '',
      status: '',
      created_at: '',
      updated_at: '',
      roles: [],
      profile: []
    },
    isLoggedIn: false,
    errorMessage: ''
  }),
  actions: {
    async signIn(email: string, password: string) {
      try {
        const response = await post<{ token: string; user: any }>(
          'https://api.bluhabit.id/auth/v1/admin/sign-in',
          {
            email,
            password,
          }
        );
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
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
});
