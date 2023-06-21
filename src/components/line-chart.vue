<template>
  <view class="container" :style="{ height: props.height ?? '300px' }">
    <ec-charts id="mychart-dom-bar" canvas-id="mychart-bar" :ec="ecoptions" />
  </view>
</template>
<script setup>
import { ref, defineProps } from 'vue';
const echarts = require('../wxcomponents/ec-canvas/echarts');
// import * as echarts from '@/wxcomponents/ec-canvas/echarts';
const props = defineProps({
  height: {
    type: String,
    default: '300px',
  },
  options: {
    type: Object,
    default: null,
  },
});

const ecoptions = ref({
  onInit: echartBarInit,
});
function echartBarInit(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width,
    height,
    devicePixelRatio: dpr,
  });
  chart.setOption(props.options || {});
  canvas.setChart(chart);
  return chart;
}
</script>
<style scoped lang="scss">
.container {
  width: 100%;
}
.mychart-bar {
  width: 100%;
  height: 100%;
}
</style>
