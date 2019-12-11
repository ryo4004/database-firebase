import firebase from './firebase'

export const firestore = firebase.firestore()

export const loadCollection = () => {
  firestore.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`)
    })
  })
}

export const addCollection = () => {
  firestore.collection('users').add({
    data: 'sampledata'
  }).then((docRef) => {
    console.log('Document written with ID: ', docRef.id, {docRef})
  }).catch((error) => {
    console.log('Error adding document: ', error)
  })
}
