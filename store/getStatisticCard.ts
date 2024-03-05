interface StatisticData {
  user_active: string;
  user_claim: string;
  total_user: string;
}

export const useUserStatisticsStore = defineStore('getStatisticsCard', {
  state: () => ({
    statistics: {
      user_active: '',
      user_claim: '',
      total_user: '',
    } as StatisticData,
    isLoading: true,
  }),
  actions: {
    async fetchStatistics() {
      this.isLoading = true;
      try {
        const api = useApi();
        const response = await api.get('https://api.bluhabit.id/account/v1/admin/get-statistic');
        const responseData = response.data as StatisticData; 
        this.statistics = responseData;
      } catch (error) {
        console.error('Error fetching statistics:', error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
