const albums = [
  {
    photos: [
      "https://res.cloudinary.com/dkxcax6es/image/upload/s--zilcPPcD--/v1572186760/dml-laille/ik5wnaeqfjeabsk4wmgw.jpg",
      "https://res.cloudinary.com/dkxcax6es/image/upload/s--cxchK_D5--/v1572186778/dml-laille/othdpd48pylgeaitgtey.jpg",
      "https://res.cloudinary.com/dkxcax6es/image/upload/s--Ev55uzOZ--/v1572186779/dml-laille/xkddlc9wnkfrtudcip7s.jpg",
      "https://res.cloudinary.com/dkxcax6es/image/upload/s--OcN_Z4pS--/v1572186786/dml-laille/j0lbayn5mkj244rswk0c.jpg",
      "https://res.cloudinary.com/dkxcax6es/image/upload/s--HAsZFIU4--/v1572186791/dml-laille/nhdpfssv3jqwjiusdx9f.jpg"
    ],
    _id: "5db5aaa85fb23200111b21c8",
    doneOn: "2018-10-20",
    name: "Santa Suzanna"
  },
  {
    photos: [
      "https://res.cloudinary.com/dkxcax6es/image/upload/s--7Ow2PfcG--/v1572186859/dml-laille/blmavlhhgbopppxzh4lz.jpg",
      "https://res.cloudinary.com/dkxcax6es/image/upload/s--QDTS5j7S--/v1572186860/dml-laille/yflypvxatqxn96dwqvkv.jpg",
      "https://res.cloudinary.com/dkxcax6es/image/upload/s--DeIinUdS--/v1572186862/dml-laille/k6hy324mbtalsiraqd7b.jpg",
      "https://res.cloudinary.com/dkxcax6es/image/upload/s--cLxrTaNF--/v1572186864/dml-laille/raqj5b1j1gjqmctgfcob.jpg",
      "https://res.cloudinary.com/dkxcax6es/image/upload/s--XfvBTFQ2--/v1572186865/dml-laille/mymnzojslvikstiqppi0.jpg",
      "https://res.cloudinary.com/dkxcax6es/image/upload/s--G9LkZMAo--/v1572186866/dml-laille/g87jukx9c5ojfdnkjoct.jpg"
    ],
    _id: "5db5aaf35fb23200111b21c9",
    doneOn: "2019-05-18",
    name: "Ambon"
  }
];

export default {
  namespaced: true,
  state: {
    albums: []
  },
  mutations: {
    initAlbums(state) {
      state.albums = albums;
    }
  },
  actions: {
    initAlbums(context) {
      context.commit("initAlbums");
    }
  }
};
