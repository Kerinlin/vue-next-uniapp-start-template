class Storage {
  get(key, parse = false) {
    const value = uni.getStorageSync(key);
    return parse ? JSON.parse(value) : value;
  }
  set(key, value, parse = false) {
    uni.setStorageSync(key, parse ? JSON.stringify(value) : value);
  }
}

const storage = new Storage();

export default {
  setToken(token) {
    storage.set('token', token);
  },
  getToken() {
    return storage.get('token');
  },
};
