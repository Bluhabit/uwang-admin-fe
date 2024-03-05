import { defineStore } from 'pinia';

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
    async signIn(email : string, password : string) {
      try {
        const response = await fetch('https://api.bluhabit.id/auth/v1/admin/sign-in', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (response.ok) {
          this.token = data.data.token;
          this.user = data.data.user;
          this.isLoggedIn = true;
          console.log(data.message);
        } else {
          this.errorMessage = data.message;
          console.error(data.message); 
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
});
