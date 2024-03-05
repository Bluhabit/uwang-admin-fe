<script setup lang="ts">
const props = defineProps({
  icon:{
    type:String,
  },
  title:{
    type:String,
  },
  amount:{
    type:String,
  },
  statistic:{
    type:Number,
    default:null,
  },
  showStatistic:{
    type:Boolean,
    default:false,
  }
});

function isStatisticDown(statistic:number) {
  if (statistic < 0) {
    console.log("down",statistic);
    return true
  }
  
  return false
}
</script>

<template>
  <div class="flex font-inter gap-4 p-6 items-center">
    <div class="bg-state-primary-surface rounded-full p-4 w-16 h-16">
      <img :src="icon" alt="" />
    </div>
    <div class="flex flex-col justify-center gap-2">
      <p class="font-normal text-base">{{ title }}</p>
      <div class="flex gap-2">
        <h1 class="font-semibold text-2xl">{{ amount }}</h1>
        <div v-show="showStatistic" class="flex gap-1 items-center">
          <img
            :src="
               isStatisticDown(statistic)
                ? 'image/trending-down.svg'
                : 'image/trending-up.svg'
            "
            alt=""
          />
          <p
            :class="
              isStatisticDown(statistic)
                ? 'text-state-error-main'
                : 'text-state-success-main'
            "
          >
            {{ isStatisticDown(statistic)? "" : "+" }}{{ props.statistic }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
