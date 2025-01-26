import { addDoc, collection } from '@firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyCAoQyj5FwY15s_qtr_6-ufV9jTYqII_ns',

	authDomain: 'myportfolio-70018.firebaseapp.com',

	projectId: 'myportfolio-70018',

	storageBucket: 'myportfolio-70018.firebasestorage.app',

	messagingSenderId: '668808735782',

	appId: '1:668808735782:web:8acef47713b7709abc8ae7',

	measurementId: 'G-S2YVX8K0MK',
}

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app')
const db = getFirestore(app)
const storage = getStorage(app)

export { addDoc, collection, db, storage }
