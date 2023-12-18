import React, { useState } from 'react';

import { db, auth, googleProvider } from '../Firebase';

import { useEffect } from 'react';
import { doc, query, docs, getDocs, collection, addDoc, deleteDoc, setDoc, updateDoc, getDoc } from 'firebase/firestore'


// import Toast from './BasicExample';
import Datasend from './Datasend';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import './Login.css';


import { createUserWithEmailAndPassword, signInWithPopup, signOut, signIn, signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
  const [email, setemail] = useState();
  const [login, setlogin] = useState(false);
  const [Signin, setsignin] = useState(false);
  const [password, setpassword] = useState();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState();
  const [isvalidemail, setisvalidemail] = useState(true);
  const [isvalidpassword, setisvalidpassword] = useState(true);

  const Loggedin = () => {
    setlogin(true);

    setsignin(false);
  }
  const signedin = () => {
    setlogin(false);
    setsignin(true);

  }
  const emailcheck = (e) => {
    const email = e.target.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isvalidemail = emailPattern.test(email);
    setisvalidemail(isvalidemail);
    //salert("hi");
    setemail(email);
  }
  const passwordcheck = (e) => {
    const password = e.target.value;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const isValid = passwordPattern.test(password);
    setisvalidpassword(isValid);
    setpassword(password);
  }
  const Creatingfields = async (e) => {
    const UserID = auth.currentUser ? auth.currentUser.uid : null;

    if (UserID) {
      try {
        alert("UserID: " + UserID);

        // Use the user's UID as the document ID within the 'users' collection
        const userDocRef = doc(db, 'profitandLoss', UserID);

        // Create a collection reference within the user's document
        const userCollectionRef = collection(userDocRef, 'profitandLoss');

        // You can now add documents to this collection
        const documentData = {
          PandL: 100,

        };

        // Add a new document with a unique auto-generated ID
        const newDocRef = await addDoc(userCollectionRef, documentData);

        console.log("Document added with ID: ", newDocRef.id);
      } catch (error) {
        console.error("Error adding document:", error);
      }
    } else {
      console.log("User is not authenticated");
    }


  }

  const signin = async () => {
    try {
      console.log(email, password);
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Successfully signed in!");
      console.log('Toast should be shown now');
      // toast.success('successful', { autoClose: 3000 })
      Creatingfields();
    } catch (error) {
      console.error('Error signing in:', error.message);
      console.log('Toast should not be shown now');
      // toast.error('successful', { autoClose: 3000 });
      alert("Sign in failed  " + error.message);
    }
  };
  const Login = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert("yes");
        setToastMessage("signed in successfully ");
        setShowToast(true);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.success('Logged in!');
        setShowToast(true);
        setToastMessage("Sign in failed: " + error.message);
        console.log("showToast", showToast);
        alert("NO");
      });



  }
  const signinwithgoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    }
    catch (error) {
      console.error('Error signing in with Google:', error.message);
      setToastMessage("Error signing in with Google");

    }

  }
  const Logoutf = async () => {
    try {
      await signOut(auth);
    }
    catch (err) {
      console.error(err);
    }

  }
  return (
    <div className='form-signin'>
      <button onClick={Loggedin}>login</button>
      <button onClick={signedin}>signin</button>
      <form style={{ "boxBoxSizing": "border-box" }}>


        <h1 className="h3 mb-5 mt-5 fw-normal" style={{ color: 'black', textAlign: 'center' }}>
          Please {Signin ? 'Sign In' : 'Log In'}
        </h1>

        <div className="form-floating mb-2">
          <input type="email" id="form2Example1" className="form-control" onChange={emailcheck} />
          <label className="form-label" htmlFor="form2Example1" >Email address</label>
        </div>


        <div className="form-floating mb-2">
          <input type="password" id="form2Example2" className="form-control s" onChange={passwordcheck} />
          <label className="form-label" htmlFor="form2Example2">Password</label>
        </div>


        <div className="row mb-4">


          <div className="col">

            <a href="#!">Forgot password?</a>
          </div>
        </div>
        {/* <span>{showToast && <Toast message={toastMessage} />}</span> */}
        {!isvalidemail && <span style={{ color: "red" }}>Please enter a valid email address.</span>}<br />
        {!isvalidpassword && <span style={{ color: "red" }}>Please enter a valid password</span>}




        <button type="button" disabled={!isvalidemail || !isvalidpassword} className="w-100 btn btn-lg btn-primary" onClick={Signin ? signin : Login}>{Signin ? 'Sign In' : 'Log In'}</button>

        {showToast ? <div className="toasts" role="alert" aria-live="assertive" aria-atomic="true">

          <div className="toast-body" style={{color:'black'}}>
           {toastMessage}
          </div>
        </div> : ""}





      </form>
    </div>

  )
}

export default Login