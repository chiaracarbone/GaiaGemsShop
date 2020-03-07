import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";

import React, {useState, useEffect} from 'react';
import {useAsync} from 'react-async';
import { useForm } from 'react-hook-form';

import './Admin.css';

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

async function getProducts() {
    return db.collection('products').onSnapshot(({docs}) => docs.map(doc => doc.data()))
}

function addProduct([{name, description, price}]) {
    return db.collection('products').add({name, description, price})
}

function Admin() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        db.collection('products').onSnapshot(({docs}) => setProducts(docs.map(doc => doc.data())))
    }, [])
    
    console.log('render')
    return (
        <div className={'Admin'}>
            <div className={'Admin__section'}>
                <AddCard />

                {products.map(product => <Product key={product.id} {...product}/>)}
            </div>
        </div>
    )
}

function Product({name, description, price}) {
    return <div>
        {name}
        {description}
        {price}
    </div>
}

function AddCard() {
    const addProductAsync = useAsync({deferFn: addProduct})
    const { register, handleSubmit, watch, errors } = useForm()

    useEffect(() => {
        console.log('added', addProductAsync.data)
    }, [addProductAsync.data])

    return <div className={'AddCard'}>
        <input name='name' type='text' ref={register({required: true})} />

        <input name='description' type='text' ref={register({required: true, minLength: 12})} />

        <input name='price' type='number' ref={register({required: true, min: 0, max: 999})} />

        <button onClick={handleSubmit(addProductAsync.run)}>Add product</button>
    </div>
}


export default Admin
