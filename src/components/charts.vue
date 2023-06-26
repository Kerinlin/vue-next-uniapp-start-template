<template>
  <view class="chart-container" :style="{ height: height ?? '300px' }">
    <l-echart ref="chartRef" @finished="init"></l-echart>
  </view>
</template>
<script setup>
import { ref, defineProps } from 'vue';
import * as echarts from 'echarts/dist/echarts.esm';
import lEchart from '@/uni_modules/lime-echart/components/l-echart/l-echart.vue';

const chartRef = ref(null);
const props = defineProps({
  height: String,
  options: Object,
});

const init = () => {
  chartRef.value.init(echarts, chart => {
    chart.setOption(props.options);
    console.log('res::::', props.options);
  });
};
</script>
<style scoped lang="scss">
.chart-container {
  position: relative;
  width: 100%;
  #chart-dom {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
