import { useState, useEffect } from 'react';
import BackContext from './BackContext';
import CatsCrud from './Cats/Crud';
import ComCrud from './Com/Crud';
import Nav from './Nav';
import ProductsCrud from './Products/Crud';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import {authConfig} from '../Functions/auth';

function Back({ show }) {

    const [lastUpdate, setLastUpdate] = useState(Date.now());

    const [messages, setMessages] = useState([]);

    const [cats, setCats] = useState(null);
    const [createCat, setCreateCat] = useState(null);
    const [deleteCat, setDeleteCat] = useState(null);
    const [editCat, setEditCat] = useState(null);
    const [modalCat, setModalCat] = useState(null);


    const [products, setProducts] = useState(null);
    const [createProduct, setCreateProduct] = useState(null);
    const [deleteProduct, setDeleteProduct] = useState(null);
    const [editProduct, setEditProduct] = useState(null);
    const [modalProduct, setModalProduct] = useState(null);
    const [deletePhoto, setDeletePhoto] = useState(null);

    const [comments, setComments] = useState(null);
    const [deleteCom, setDeleteCom] = useState(null);

    // Read
    useEffect(() => {
        axios.get('http://localhost:3003/admin/cats', authConfig())
            .then(res => setCats(res.data));
    }, [lastUpdate]);
    useEffect(() => {
        axios.get('http://localhost:3003/admin/products', authConfig())
            .then(res => setProducts(res.data));
    }, [lastUpdate]);
    useEffect(() => {
        axios.get('http://localhost:3003/admin/comments', authConfig())
            .then(res => setComments(res.data));
    }, [lastUpdate]);

    // Create
    useEffect(() => {
        if (null === createCat) return;
        axios.post('http://localhost:3003/admin/cats', createCat, authConfig())
            .then(res => {
                showMessage(res.data.msg);
                setLastUpdate(Date.now());
            })
            .catch(error => {
                showMessage({ text: error.message, type: 'danger' });
            })
    }, [createCat]);
    useEffect(() => {
        if (null === createProduct) return;
        axios.post('http://localhost:3003/admin/products', createProduct, authConfig())
            .then(res => {
                showMessage(res.data.msg);
                setLastUpdate(Date.now());
            })
            .catch(error => {
                showMessage({ text: error.message, type: 'danger' });
            })
    }, [createProduct]);

    // Delete
    useEffect(() => {
        if (null === deleteCat) return;
        axios.delete('http://localhost:3003/admin/cats/' + deleteCat.id, authConfig())
            .then(res => {
                showMessage(res.data.msg);
                setLastUpdate(Date.now());
            })
            .catch(error => {
                showMessage({ text: error.message, type: 'danger' });
            })
    }, [deleteCat]);
    useEffect(() => {
        if (null === deleteProduct) return;
        axios.delete('http://localhost:3003/admin/products/' + deleteProduct.id, authConfig())
            .then(res => {
                showMessage(res.data.msg);
                setLastUpdate(Date.now());
            })
            .catch(error => {
                showMessage({ text: error.message, type: 'danger' });
            })
    }, [deleteProduct]);
    useEffect(() => {
        if (null === deletePhoto) return;
        axios.delete('http://localhost:3003/admin/photos/' + deletePhoto.id, authConfig())
            .then(res => {
                showMessage(res.data.msg);
                setLastUpdate(Date.now());
            })
            .catch(error => {
                showMessage({ text: error.message, type: 'danger' });
            })
    }, [deletePhoto]);
    useEffect(() => {
        if (null === deleteCom) return;
        axios.delete('http://localhost:3003/admin/comments/' + deleteCom.id, authConfig())
            .then(res => {
                showMessage(res.data.msg);
                setLastUpdate(Date.now());
            })
            .catch(error => {
                showMessage({ text: error.message, type: 'danger' });
            })
    }, [deleteCom]);


    // Edit
    useEffect(() => {
        if (null === editCat) return;
        axios.put('http://localhost:3003/admin/cats/' + editCat.id, editCat, authConfig())
            .then(res => {
                showMessage(res.data.msg);
                setLastUpdate(Date.now());
            })
            .catch(error => {
                showMessage({ text: error.message, type: 'danger' });
            })
    }, [editCat]);
    useEffect(() => {
        if (null === editProduct) return;
        axios.put('http://localhost:3003/admin/products/' + editProduct.id, editProduct, authConfig())
            .then(res => {
                showMessage(res.data.msg);
                setLastUpdate(Date.now());
            })
            .catch(error => {
                showMessage({ text: error.message, type: 'danger' });
            })
    }, [editProduct]);



    const showMessage = (m) => {
        const id = uuidv4();
        m.id = id;
        setMessages(msg => [...msg, m]);
        setTimeout(() => {
            setMessages(mes => mes.filter(ms => ms.id !== id))
        }, 5000);
    }


    return (
        <BackContext.Provider value={{
            setCreateCat,
            cats,
            setDeleteCat,
            messages,
            setEditCat,
            setModalCat,
            modalCat,
            setCreateProduct,
            products,
            showMessage,
            setDeleteProduct,
            setEditProduct,
            setModalProduct,
            modalProduct,
            setDeletePhoto,
            setDeleteCom,
            comments
        }}>
            {
                show === 'admin' ?
                    <>
                        <Nav />
                        <h1>BACK</h1>
                    </>
                    : show === 'cats' ? <CatsCrud /> 
                        : show === 'com' ? <ComCrud /> :
                            show === 'products' ? <ProductsCrud /> : null
            }
        </BackContext.Provider>
    )
}
export default Back;