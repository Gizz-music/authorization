import { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';


firebase.initializeApp({
  apiKey: "AIzaSyAyb2qZcyaGKPzsk4cKyyKgZvYlsrNxpQA",
  authDomain: "chat-react-e7b28.firebaseapp.com",
  projectId: "chat-react-e7b28",
  storageBucket: "chat-react-e7b28.appspot.com",
  messagingSenderId: "901017779458",
  appId: "1:901017779458:web:f1e5102a0683f0b176161b",
  measurementId: "G-L41LEKYHCB"
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
    <App  />
  </Context.Provider>,
  document.getElementById('root')
);
