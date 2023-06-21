<script setup>
import { onLaunch, onShow } from '@dcloudio/uni-app';
import { useAccountStore, useAppStore } from '@/store/app';
import config from '@/config/index';

const { isLogin } = useAccountStore();
const { setBarHeight } = useAppStore();

// 处理登录状态
const handleLoginStatus = path => {
  if (!config.whiteListPath.includes(path) && !isLogin) {
    uni.redirectTo({
      url: `/pages/login/index`,
    });
  }
};

// 状态栏高度
const handleBarHeight = async () => {
  const { statusBarHeight } = await uni.getSystemInfo();
  const barHeight = statusBarHeight + 46;
  setBarHeight(barHeight);
};

onShow(({ path }) => {
  handleLoginStatus(path);
});

onLaunch(() => {
  console.log('App Launch.');
  handleBarHeight();
});
</script>

<style lang="scss">
@import '@/style/index.scss';
@import '@/style/iconfont.css';
</style>
