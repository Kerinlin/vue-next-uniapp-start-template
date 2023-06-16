<template>
  <view class="flex flex-col items-center">
    <view class="pt-4 text-red-500">{{ appStore.motto }}</view>
    <van-button type="primary">主要按钮</van-button>
    <view class="chart-container">
      <CommChart :height="chartHeight.one" :options="chartOptions.one" />
    </view>
  </view>
</template>

<script setup>
import { useAppStore } from '@/store/app';
const appStore = useAppStore();
import { ref } from 'vue';
import CommChart from '@/components/Chart.vue';

const chartHeight = ref({
  one: '300px',
});
const chartOptions = ref({
  one: {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
      },
    ],
  },
});
</script>

<style lang="scss" scoped>
.chart-container {
  width: 100%;
}
</style>
