

export const useListUser = defineStore<string, UserWithPaginationState, {}, {fetchStatistics: () => Promise<void>;}>('useListUser', {
  state: () => ({
    result:[],
    isLoading: true,
  }),

  actions: {
    async fetchStatistics() {
      this.isLoading = true;
      const { get } = useApi();
      const result = await get<UserCredentialResponse>('uwang/dev/account/v1/admin/get-list-user');
      this.result = result
      this.isLoading = false;
    },
  },
});
