import type { UserWithPaginationState } from "~/type/userWithPaginationState";
import type { UserWithPaginationResponse } from "~/type/userWithPaginationResponse";

export const useListUser = defineStore<string, UserWithPaginationState, {}, {
  fetchUserWithPagination: () => Promise<void>;
}>('listUser', {
  state: () => ({
    result:[],
    isLoading: true,
  }),

  actions: {
    async fetchUserWithPagination() {
      this.isLoading = true;
      const { get } = useApi();
      const result = await get<Array<UserWithPaginationResponse>>('uwang/dev/account/v1/admin/get-list-user');
      if (result && result.data) {
        this.result = result.data;
      }
      this.isLoading = false;
    },
  },
});
