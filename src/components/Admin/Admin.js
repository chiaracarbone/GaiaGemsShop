import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/storage";

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

const storage = firebase.storage().ref();

async function addProduct([{name, description, price, image}]) {
    const docRef = await db.collection('products').add({name, description, price})
    const productImageRef = await storage.child(`productImages/${docRef.id}`)
    const addedImage = await productImageRef.put(image[0])
    const imageUrl = await addedImage.ref.getDownloadURL()

    const docRefWithImage = await docRef.set({imageUrl})

    return docRefWithImage
}

function Admin() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        db.collection('products').onSnapshot(({docs}) => setProducts(docs.map(doc => doc.data())))
    }, [])
    
    return (
        <div className={'Admin'}>
            <div className={'Admin__section'}>
                <AddCard />

                {products.map(product => <Product key={product.id} {...product}/>)}
            </div>
        </div>
    )
}

function Product({name, description, price, imageUrl}) {
    return <div>
        {imageUrl && <img src={imageUrl} style={{width: '200px'}} alt={'product'}/>}
        
        <span>
            {name}
        </span>

        <span>
            {description}
        </span>

        <span>
            {price}
        </span>
    </div>
}

function AddCard() {
    const addProductAsync = useAsync({deferFn: addProduct})
    const { register, handleSubmit, watch, errors } = useForm()
    const [image, setImage] = useState(null)

    useEffect(() => {
        console.log('added', addProductAsync.data)
    }, [addProductAsync.data])

    function handleAddImage(e) {
        console.log(e.target.files)
        const file = e.target.files[0]
        const reader = new FileReader()
        
        reader.addEventListener('loadend', () => {
            setImage(reader.result)
        })

        reader.readAsDataURL(file)
    }

    return <div className={'AddCard'}>
        {image && <img className={'AddCard__image'} src={image} alt='new product'/>}

        <input name='name' type='text' ref={register({required: true})} />

        <input name='description' type='text' ref={register({required: true, minLength: 12})} />

        <input name='price' type='number' ref={register({required: true, min: 0, max: 999})} />

        <input name='image' onChange={handleAddImage} type='file' ref={register({required: true})} />

        <button onClick={handleSubmit(addProductAsync.run)}>Add product</button>
    </div>
}


export default Admin
