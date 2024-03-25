import type { StatisticState } from "~/type/statisticState";
import type { StatisticResponse } from "~/type/statisticResponse";

export const useStatistic = defineStore<string, StatisticState, {}, {
  fetchStatistics: () => Promise<void>;
}>('statistic', {
  state: () => ({
    statistics: {
      activeUser: 0,
      userClaim: 0,
      totalUser: 0,
    },
    isLoading: true,
  }),

  actions: {
    async fetchStatistics() {
      this.isLoading = true;
      const { get } = useApi();
      const { data } = await get<StatisticResponse>('uwang/dev/account/v1/admin/get-statistic');
      if (data && data.data) {
        this.statistics = data.data;
      }
      this.isLoading = false;
    },
  },
});
