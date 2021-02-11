import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: 'AIzaSyCvCRpBxBaa4orYy6xjapwDUB2nQD28Vnc',
  authDomain: 'doabledata.firebaseapp.com',
  projectId: 'doabledata',
  storageBucket: 'doabledata.appspot.com',
  messagingSenderId: '761507761345',
  appId: '1:761507761345:web:e0965dfe0dab2f2fdb5840',
  measurementId: 'G-T7EYNF5G76'
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
// firebase.analytics();
// eslint-disable-next-line prefer-const
let firebaseAuth = firebaseApp.auth()
const firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
