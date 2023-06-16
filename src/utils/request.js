export const request = (url, data, method = 'POST') => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: import.meta.env.VITE_BASE_API + url,
      method,
      data: data || {},
      header: {
        Authorization: '',
      },
      success(response) {
        const res = response.data;
        if (res.code !== 0) {
          uni.showToast({ title: res.msg ?? '服务出错了:(', icon: 'none' });
          return reject(response);
        }
        resolve(res);
      },
      fail(error) {
        uni.showToast({ title: '服务出错了:(', icon: 'none' });
        reject(error);
      },
    });
  });
};
