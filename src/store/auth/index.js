import { auth, utils } from "../../services/firebase";

export default {
  namespaced: true,
  getters: {
    isAuth() {
      return utils.isAuth();
    }
  },
  actions: {
    async signIn(context, { mail, password }) {
      return await auth.signInWithEmailAndPassword(mail, password);
    }
  }
};
