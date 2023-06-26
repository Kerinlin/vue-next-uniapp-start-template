<template>
  <custom-base-container title="首页">
    <view class="flex flex-col items-center">
      <van-button type="primary">主要按钮</van-button>
      <view class="chart-container">
        <custom-charts class="chart-item" height="240px" :options="chartOptions?.lineOptions"></custom-charts>
      </view>
    </view>
  </custom-base-container>
</template>

<script setup>
import { ref } from 'vue';
const chartOptions = ref({
  lineOptions: {
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
  .chart-item {
    width: 100%;
  }
}
</style>
