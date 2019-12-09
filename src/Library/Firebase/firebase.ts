import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'

import firebaseConfig from './config'

firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default firebase