import * as firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"
import env from "./env"
import mime from "mime-types"

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: env.VUE_APP_API_KEY,
  authDomain: env.VUE_APP_AUTH_DOMAIN,
  databaseURL: env.VUE_APP_DATABASE_URL,
  projectId: env.VUE_APP_PROJECT_ID,
  storageBucket: env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: env.VUE_APP_MESSAGING_SENDER_ID,
  appId: env.VUE_APP_APP_ID
  // measurementId: env.VUE_APP_MEASUREMENT_ID
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
export { db, auth, utils }
