import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";
import React, {useState} from 'react'

const firebaseConfig = {
    apiKey: "AIzaSyDhYge-QWZNyjH1VvpwFoHKoMAkK5S5RF8",
    authDomain: "gaiagems-1b1b3.firebaseapp.com",
    databaseURL: "https://gaiagems-1b1b3.firebaseio.com",
    projectId: "gaiagems-1b1b3",
    storageBucket: "gaiagems-1b1b3.appspot.com",
    messagingSenderId: "314908420598",
    appId: "1:314908420598:web:92f87b346951ba138a3fd7",
    measurementId: "G-5S24LVSVTZ"
};

const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();



function Admin() {
    const [text, set] = useState('')

    async function addText() {
        const docRef = await db.collection("users").add({
            first: "Chiara",
            last: "Carbone",
            says: text,
            born: 1997
        })

        console.log(docRef)
    }

    return (
        <div>
            <input value={text} onChange={e => set(e.target.value)}/>

            <button onClick={addText}>Add shit to the database :)</button>
        </div>
    )
}

export default Admin
