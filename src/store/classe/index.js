export default {
  namespaced: true,
  state: {
    classes: []
  },
  mutations: {
    initClasses(state) {}
  },
  actions: {
    initClasses(context) {
      context.commit("initClasses");
    }
  }
};
