const Storage = {
  get(key, defaultValue) {
    return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
  },

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};