<template>
  <view class="container-wrapper">
    <custom-nav-bar :title="title"></custom-nav-bar>
    <view class="container-content" :style="`margin-top:${barHeight}px`">
      <slot></slot>
    </view>
  </view>
</template>

<script setup>
import { useAppStore } from '@/store/app';
const { barHeight } = useAppStore();
import { defineProps } from 'vue';
defineProps({
  title: String,
});
</script>

<style lang="scss" scoped>
.container-wrapper {
  width: 100%;
  .container-content {
    width: 100%;
  }
}
</style>
