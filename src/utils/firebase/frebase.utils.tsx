import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCPDZ-WNyd8H6rVrQrrOyGeZ4tv004lhMw",
    authDomain: "crwn-clothing-db-8f230.firebaseapp.com",
    projectId: "crwn-clothing-db-8f230",
    storageBucket: "crwn-clothing-db-8f230.appspot.com",
    messagingSenderId: "7143922302",
    appId: "1:7143922302:web:71342fb6e9588a8018d62f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);