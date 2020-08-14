const events = [
  {
    _id: "5dac55a23a13d20011df9d5a",
    city: "Saint Viaud",
    club: "Country en Retz",
    isAtHome: true,
    doneOn: "2019-07-27",
    zipcode: "44",
    __v: 0,
    posterPdf:
      "https://res.cloudinary.com/dkxcax6es/image/upload/s--zDn8Pd3B--/v1576065130/dml-laille/tlytclptsthh8x7qd4z9.jpg"
  },
  {
    _id: "5dac55a23a13d20011df9d5b",
    city: "Pont Réan",
    club: "Jo's American Car \"Route 177",
    isAtHome: true,
    doneOn: "2019-09-29",
    zipcode: "35",
    __v: 0,
    posterPdf:
      "https://res.cloudinary.com/dkxcax6es/image/upload/s--GkDS658t--/v1572174602/dml-laille/tglfvkvhbkzdwo2dmqil.jpg"
  },
  {
    _id: "5dac55a23a13d20011df9d5c",
    city: "Pléchatel",
    club: "Vaincre La mucoviscidose",
    isAtHome: true,
    doneOn: "2019-11-09",
    zipcode: "35",
    __v: 0,
    posterPdf:
      "https://res.cloudinary.com/dkxcax6es/image/upload/s--sOdu02QE--/v1572174516/dml-laille/yp7xgqdnqp8sdqrbdvzj.pdf",
    playlistPdf:
      "https://res.cloudinary.com/dkxcax6es/image/upload/s--elBdcUgL--/v1572174521/dml-laille/trjzfugj3aihapyarfxh.pdf"
  },
  {
    _id: "5dac55a23a13d20011df9d5d",
    city: "Saint Pair sur mer",
    club: "Sealand",
    domicile: true,
    doneOn: "2019-08-03",
    zipcode: "50",
    __v: 0,
    posterPdf:
      "https://res.cloudinary.com/dkxcax6es/image/upload/s--C1tJodJi--/v1572179707/dml-laille/yjnw4pmufyvj6teveqvc.pdf",
    playlistPdf:
      "https://res.cloudinary.com/dkxcax6es/image/upload/s--cRdar1Zu--/v1572175694/dml-laille/uw3rvqxid7pexc7buahi.pdf"
  }
];

export default {
  namespaced: true,
  state: {
    events: []
  },
  mutations: {
    initEvents(state) {
      state.events = events;
    }
  },
  actions: {
    initEvents(context) {
      context.commit("initEvents");
    }
  }
};
