function random(char) {
  let chars = "";
  for (let i = 0; i < char; i++) {
    chars += Math.floor(Math.random() * 32).toString(32);
  }
  return chars;
}

export default {
  namespaced: true,
  state: () => [],
  mutations: {
    push: (state, text) => {
      state.push({ key: random(4), state: true, text });
    },
  },
};
