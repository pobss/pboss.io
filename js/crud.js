
import { app } from './firebase.js';

import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signOut
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

// Sign up function
// document.getElementById('signup').addEventListener('click', function () {
//     const email = document.getElementById('email').value;
//     const pwd = document.getElementById('pwd').value;

//     createUserWithEmailAndPassword(auth, email, pwd)
//     .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         // ...
//         console.log("Sign up success");
//         alert("Sign up success");
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//         console.log(errorCode + errorMessage);
//         alert(errorCode + errorMessage);
//     });
// })

// Sign in function
document.getElementById('login').addEventListener('click', function () {
    const emaillogin = document.getElementById('emaillogin').value;
    const pwdlogin = document.getElementById('pwdlogin').value;

    signInWithEmailAndPassword(auth, emaillogin, pwdlogin)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log("Login success");
        alert("Login success");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode + errorMessage);
        alert(errorCode + errorMessage);
    });
})

// // Sign in with Google
// const provider = new GoogleAuthProvider(app);

// document.getElementById('googlelogin').addEventListener('click', function () {
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             // This gives you a Google Access Token. You can use it to access the Google API.
//             const credential = GoogleAuthProvider.credentialFromResult(result);
//             const token = credential.accessToken;
//             // The signed-in user info.
//             const user = result.user;
//             // ...
//         }).catch((error) => {
//             // Handle Errors here.
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             // The email of the user's account used.
//             const email = error.customData.email;
//             // The AuthCredential type that was used.
//             const credential = GoogleAuthProvider.credentialFromError(error);
//             // ...
//         });
// })

// Set session
const auth = getAuth(app);
const user = auth.currentUser;

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // 登入成功新網址放這 location.href = './crud2.html';
        // ...
        console.log(user.uid);
    } else {
        // User is signed out
        // ...
        console.log("no user");
    }
})

// // Sign out function
// document.getElementById('logout').addEventListener('click', function () {
//     signOut(auth).then(() => {
//         // Sign-out successful.
//         console.log("Logout success");
//         alert("Logout success");
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//         console.log(errorCode + errorMessage);
//         alert(errorCode + errorMessage);
//     })
// })