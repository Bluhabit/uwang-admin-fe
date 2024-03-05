import type { StatisticData } from "~/type/statisticData";
import type { StatisticResponse } from "~/type/statisticResponse";

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
        const { data } = await get<StatisticResponse>('https://api.bluhabit.id/uwang/dev/account/v1/admin/get-statistic');
        if (data && data.data) {
          this.statistics = data.data;
        }
      } catch (error) {
        console.error('Error fetching statistics:', error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
