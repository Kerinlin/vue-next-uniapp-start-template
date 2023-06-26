<template>
	<view >
		<view style="height: 750rpx; background-color: aquamarine;">
			<l-echart ref="chart" @finished="init"></l-echart>
		</view>
	</view>		
</template>

<script>
	// nvue 不需要引入
	// #ifdef VUE2
	import * as echarts from '@/uni_modules/lime-echart/static/echarts.min';
	// #endif
	// #ifdef VUE3
	// #ifdef MP
	// 由于vue3 使用vite 不支持umd格式的包，小程序依然可以使用，但需要使用require
	const echarts = require('../../static/echarts.min');
	// #endif
	// #ifndef MP
	// 由于 vue3 使用vite 不支持umd格式的包，故引入npm的包
	import * as echarts from 'echarts/dist/echarts.esm';
	// #endif
	// #endif
	export default {
		data() {
			return {
				option:  {
					tooltip: {
						trigger: 'axis',
						// shadowBlur: 0,
						textStyle: {
							textShadowBlur : 0
						}
					},
					legend: {
						data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
					},
					yAxis: {
						type: 'value'
					},
					series: [
						{
							name: '邮件营销',
							type: 'line',
							stack: '总量',
							data: [120, 132, 101, 134, 90, 230, 210]
						},
						{
							name: '联盟广告',
							type: 'line',
							stack: '总量',
							data: [220, 182, 191, 234, 290, 330, 310]
						},
						{
							name: '视频广告',
							type: 'line',
							stack: '总量',
							data: [150, 232, 201, 154, 190, 330, 410]
						},
						{
							name: '直接访问',
							type: 'line',
							stack: '总量',
							data: [320, 332, 301, 334, 390, 330, 320]
						},
						{
							name: '搜索引擎',
							type: 'line',
							stack: '总量',
							data: [820, 932, 901, 934, 1290, 1330, 1320]
						}
					]
				}
			}
		},
		methods: {
			init() {
				this.$refs.chart.init(echarts, chart => {
					chart.setOption(this.option);
					console.log('res::::')
				});
			},
			save() {
				this.$refs.chart.canvasToTempFilePath({
					success(res) {
						console.log('res::::', res)
					}
				})
			}
		}
	}
</script>
