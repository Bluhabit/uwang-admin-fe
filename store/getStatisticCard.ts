import type { StatisticData } from "~/type/statisticData";

export const useUserStatisticsStore = defineStore('getStatisticsCard', {
  state: () => ({
    statistics: {
      active_user: 0,
      user_claim: 0,
      total_user: 0,
    } as StatisticData,
    isLoading: true,
  }),
  actions: {
    async fetchStatistics() {
      this.isLoading = true;
      try {
        const { get } = useApi();
        const response = await get<StatisticData>('https://api.bluhabit.id/uwang/dev/account/v1/admin/get-statistic');
        if (response && response.data && typeof response.data === 'object') {
          const { active_user, total_user, user_claim } = response.data;
          this.statistics = { active_user, user_claim, total_user };
        }
      } catch (error) {
        console.error('Error fetching statistics:', error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
