export const useUserStatisticsStore = defineStore('getStatisticsCard', {
  state: () => ({
    statistics: {
      user_active: '',
      user_claim: '',
      total_user: '',
    },
    isLoading: true,
  }),
  actions: {
    async fetchStatistics() {
      this.isLoading = true;
      try {
        const response = await fetch('https://api.bluhabit.id/account/v1/admin/get-statistic');
        const data = await response.json();
        this.statistics = data.data;
      } catch (error) {
        console.error('Error fetching statistics:', error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
