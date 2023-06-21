<template>
  <view class="nav-wrapper">
    <van-nav-bar :title="title">
      <template #left>
        <view class="left-nav">
          <van-icon v-if="pagesLen == 1" class-prefix="iconfont" name="shouye" @click="backHome" />
          <van-icon v-if="pagesLen > 1" class-prefix="iconfont" name="zuo" @click="backPage" />
        </view>
      </template>
    </van-nav-bar>
  </view>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import { onReady } from '@dcloudio/uni-app';
let pagesLen = ref(0);
defineProps({
  title: String,
});
const backPage = () => {
  uni.navigateBack();
};
const backHome = () => {
  uni.switchTab({
    url: `/pages/index/index`,
  });
};

onReady(() => {
  const pages = getCurrentPages();
  pagesLen.value = pages?.length;
});
</script>

<style lang="scss" scoped>
.nav-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 46px;
  line-height: 46px;
}
</style>
