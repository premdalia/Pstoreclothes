import {provider} from '../pages/config'
import {getAuth,signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendSignInLinkToEmail,isSignInWithEmailLink, signInWithEmailLink} from "firebase/auth"
import React, { useEffect, useState } from "react";
import Home from './Home';

function Login() {

    const [data, setData] = useState();
    const [email,setEmail]= useState();
    const [password,setPassword]= useState();
    const auth = getAuth();

    const createaccount=()=>{
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("account created succesfully")
  })
  .catch((error) => {
    const errorCode = error.code;
    // const errorMessage = error.message;
    alert(errorCode)
    // ..
  });}
  const singin=()=>{
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        const user=userCredential.user;
        alert("welcome user")
    })
    .catch((error)=>{
        const errorCode =error.code;
        alert(errorCode)
    })
  }
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://prime-movie.vercel.app',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.example.ios'
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12'
    },
    dynamicLinkDomain: 'example.page.link'
  };
  
       const sendemail=()=>{
        sendSignInLinkToEmail(auth, email, actionCodeSettings)
  .then(() => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', email);
    // ...
    alert("succesfully login")
  })
  .catch((error) => {
    const errorCode = error.code;
alert(errorCode)    // ...
  });
       }
       if (isSignInWithEmailLink(auth, window.location.href)) {
        // Additional state parameters can also be passed via URL.
        // This can be used to continue the user's intended action before triggering
        // the sign-in operation.
        // Get the email if available. This should be available if the user completes
        // the flow on the same device where they started it.
        let email = window.localStorage.getItem('emailForSignIn');
        if (!email) {
          // User opened the link on a different device. To prevent session fixation
          // attacks, ask the user to provide the associated email again. For example:
          email = window.prompt('Please provide your email for confirmation');
        }
        // The client SDK will parse the code from the link for you.
        signInWithEmailLink(auth, email, window.location.href)
          .then((result) => {
            // Clear email from storage.
            window.localStorage.removeItem('emailForSignIn');
            // You can access the new user via result.user
            // Additional user info profile not available via:
            // result.additionalUserInfo.profile == null
            // You can check if the user is new or existing:
            // result.additionalUserInfo.isNewUser
          })
          .catch((error) => {
            // Some error occurred, you can inspect the code: error.code
            // Common errors could be invalid email and invalid or expired OTPs.
          });
      }
      
    
   
    const handleclick=()=>{
        signInWithPopup(auth, provider)
        .then((data)=>{
            setData(data.user.email)
            localStorage.setItem("email",data.user.email)
    })}
    useEffect(()=>{
        setData(localStorage.getItem('email'))
    })
    return (
        <>
            <label>Email</label>
            <input type='Email' name='email' onChange={(e)=>setEmail(e.target.value)}/>
            <input type='password' name='password' onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit' onClick={createaccount}>Create Account</button>
            <button type='submit' onClick={singin}>Singin</button>
            <button type='submit' onClick={sendemail}>sendemail</button>

            {data?<Home/>:
                    <button type="submit" onClick={handleclick}>Sign in with google</button>
    }
        </>
    );
}
export default Login;