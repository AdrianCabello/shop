import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyD9rGuNs-xMHX06xztloOcgYA5ZgRMQY7M",
    authDomain: "shop-aa67c.firebaseapp.com",
    projectId: "shop-aa67c",
    storageBucket: "shop-aa67c.appspot.com",
    messagingSenderId: "841588848103",
    appId: "1:841588848103:web:26129a6d01c7c918223942"
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;