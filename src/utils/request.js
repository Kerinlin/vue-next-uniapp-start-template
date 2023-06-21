import config from '@/config/index';
import { getToken, removeToken } from './storage';

// options同request,withAuth用来注明是否需要校验token
export const request = (options, withAuth = true) => {
  return new Promise((resolve, reject) => {
    const token = withAuth ? getToken() : null;

    if (withAuth && !token) {
      removeToken();
      uni.redirectTo({
        url: `/pages/login/index`,
      });
      uni.showToast({
        title: '请先登录',
        duration: 2000,
      });
      return;
    }

    options.header = {
      ...options.header,
      Authorization: withAuth ? `${token}` : '',
    };

    uni.request({
      url: `${config.baseUrl}${options.path}`,
      method: options.method || 'GET',
      ...options,
      success: res => {
        const { data, code, msg } = res.data;
        if (code == 0) {
          resolve(data);
        } else {
          uni.showToast({
            icon: 'none',
            title: msg,
            duration: 4000,
          });
          reject(msg);
        }
      },
      fail: err => {
        reject(err);
      },
    });
  });
};
