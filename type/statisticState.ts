import type { StatisticData } from "~/type/statisticData";

export type StatisticState = {
  statistics: StatisticData;
  isLoading: boolean;
};