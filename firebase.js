import firebase from 'firebase/app'
import 'firebase/firestore'
// import "@firebase/auth";

import firebaseConfig from './firebaseConfig'

// Firebase App
export default firebase.initializeApp(firebaseConfig)

// Auth
// export const auth = firebase.auth();
// export const authProviders = {
//   facebook: new firebase.auth.FacebookAuthProvider(),
//   google: new firebase.auth.GoogleAuthProvider(),
//   twitter: new firebase.auth.TwitterAuthProvider()
// };

// Firestore
export const database = firebase.firestore()
export const ordersRef = database.collection('orders')

// Firestore Methods
const { Timestamp, GeoPoint, FieldValue } = firebase.firestore
export { Timestamp, GeoPoint, FieldValue }
