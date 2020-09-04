import * as firebase from "firebase/app"
import "firebase/auth"
import "firebase/analytics"
import "firebase/firestore"
import "firebase/storage"
import env from "./env"
import mime from "mime-types"

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: env.apiKey,
  authDomain: env.authDomain,
  databaseURL: env.databaseURL,
  projectId: env.projectId,
  storageBucket: env.storageBucket,
  messagingSenderId: env.messagingSenderId,
  appId: env.appId,
  measurementId: env.measurementId
}

firebase.initializeApp(firebaseConfig)

// utils
const auth = firebase.auth()
const db = firebase.firestore()
const storageRef = firebase.storage().ref()

const utils = {
  // Auth
  isAuth: function() {
    return auth.currentUser != null
  },
  // DB
  docsIntoArray: function(docs) {
    let array = []
    docs.forEach(doc => {
      var item = doc.data()
      item.id = doc.id

      array.push(item)
    })
    return array
  },
  // Storage
  async uploadFileAndGetSecureURL(folder, id, name, file) {
    var nameFile = `${folder}/${id}/${name}.${mime.extension(file.type)}`
    console.log(nameFile)

    await storageRef.child(nameFile).put(file)

    return await storageRef.child(nameFile).getDownloadURL()
  }
}

// export utils/refs
export { firebase, db, auth, utils }
