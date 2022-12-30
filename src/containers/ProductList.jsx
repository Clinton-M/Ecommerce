import React,{useEffect, useState} from 'react'
import '../styles/ProductList.scss'
import ProductItem from '../components/ProductItem'
import axios from 'axios'
import fetch from "node-fetch";
import {json} from "react-router-dom";

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () =>{
            const response = await fetch(API);
            const data = await response.json()
            setProducts(data);
        }
    
        getProducts();

        }, []);

    return (
        <section className="main-container">
            <div className="ProductList">
            {products.map((product) => {
          return <ProductItem />;
        })}
            </div>
        </section>
    )
}

export default ProductList;