const TOKEN_KEY = 'xx-token';
class Storage {
  get(key, parse = false) {
    const value = uni.getStorageSync(key);
    return parse ? JSON.parse(value) : value;
  }
  set(key, value, parse = false) {
    uni.setStorageSync(key, parse ? JSON.stringify(value) : value);
  }
  remove(key) {
    uni.removeStorageSync(key);
  }
  removeAll() {
    uni.clearStorageSync();
  }
}

const storage = new Storage();

export const setToken = token => {
  storage.set(TOKEN_KEY, token);
};
export const getToken = () => {
  return storage.get(TOKEN_KEY);
};
export const removeToken = () => {
  return storage.remove(TOKEN_KEY);
};
export const setCookie = (key, value, parse) => {
  return storage.set(key, value, parse);
};
export const getCookie = (key, parse) => {
  return storage.get(key, parse);
};
export const removeCookie = (key, type) => {
  if (type == 'all') {
    return storage.removeAll();
  }
  return storage.remove(key);
};
