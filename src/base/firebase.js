import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDPbfyvLutUumw8T913ctqGSFh8WNcm7TM",
    authDomain: "fir-a1390.firebaseapp.com",
    projectId: "fir-a1390",
    storageBucket: "fir-a1390.appspot.com",
    messagingSenderId: "64137339033",
    appId: "1:64137339033:web:0a45589b2e227e0a3c9808"
};

let firebaseApp;

if (!firebase.apps.length) {
    firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
    firebaseApp = firebase.app(); // if already initialized, use that one
}

//const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export const send_verification = () => {
//     const user = firebase.auth().currentUser;
//     user.sendEmailVerification().then(() => (alert("Email has been sent"))).catch(error => alert(error.message));
// }

export { auth };
export default db;