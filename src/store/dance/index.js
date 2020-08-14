const dances = [
  {
    _id: "5dac55a23a13d20011df9d92",
    name: "Snap",
    __v: 0,
    type: 0,
    choreographyPdf:
      "https://res.cloudinary.com/dkxcax6es/image/upload/v1564905399/dml-laille/seed_danse/snap.pdf",
    songLink: "https://www.youtube.com/watch?v=WKBKLo4EiB0&feature=youtu.be"
  },
  {
    _id: "5dac55a23a13d20011df9d93",
    name: "Born to be great",
    __v: 0,
    type: 0,
    choreographyPdf:
      "https://res.cloudinary.com/dkxcax6es/image/upload/v1564905408/dml-laille/seed_danse/Born_to_be_great.pdf",
    songLink: "https://www.youtube.com/watch?v=O-gXwSDoIxg"
  },
  {
    _id: "5dac55a23a13d20011df9d98",
    name: "Indian sound",
    __v: 0,
    type: 0,
    choreographyPdf:
      "https://res.cloudinary.com/dkxcax6es/image/upload/v1564905421/dml-laille/seed_danse/indian_sound.pdf",
    choreographyLink: "https://www.youtube.com/watch?v=wMU2Zl-Bctk&t=216s",
    songLink: "https://www.youtube.com/watch?v=wMU2Zl-Bctk&t=216s"
  }
];
export default {
  namespaced: true,
  state: {
    dances: []
  },
  mutations: {
    initDances(state) {
      state.dances = dances;
    },
    fetchMoreDances(state) {
      state.dances.push(...dances);
    }
  },
  actions: {
    initDances(context) {
      context.commit("initDances");
    },
    async fetchMoreDances(context) {
      setTimeout(() => {
        context.commit("fetchMoreDances");
      }, 2000);
    }
  }
};
