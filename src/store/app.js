import { defineStore } from 'pinia';
import { setToken, getToken } from '@/utils/storage';
export const useAppStore = defineStore('app', {
  state: () => {
    return {
      barHeight: 0,
    };
  },
  actions: {
    setBarHeight(height) {
      this.barHeight = height;
    },
  },
});

export const useAccountStore = defineStore('account', {
  state: () => {
    return {
      account: null,
    };
  },
  getters: {
    isLogin: state => {
      const isHaveToken = state.account?.token || getToken();
      if (isHaveToken) {
        return true;
      }
      return false;
    },
  },
  actions: {
    setAccount(data) {
      console.log('accountData', data);
      if (data) {
        const token = data?.token || '';
        setToken(token);
        this.account = data;
      }
    },
  },
});
