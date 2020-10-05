import React, {useState,useEffect} from 'react';
import Layout from './Layout'
import {getProducts} from './apiCore'
import Card from  './Card';
import '../style.css';
import Search from './Search'


const Home = () =>{
    const [productBySell, setproductBySell] = useState([])
    const [productByArrival, setproductByArrival] = useState([])
    const [productByOffer, setproductByOffer] = useState([])
    const [productByCategory, setproductByCategory] = useState([])
    const [error, setError] = useState(false)

    const loadProductbyOffer =() => {
        getProducts('offer').then(data => {
            if(data.error){
                setError(data.error)
            } else{
                setproductByOffer(data)
            }            
        })
    }

    const loadProductbyArrival =() => {
        getProducts('date').then(data => {
            if(data.error){
                setError(data.error)
            } else{
                setproductByArrival(data)
            }            
        })
    }

    const loadProductbySell =() => {
        getProducts('sold').then(data => {
            if(data.error){
                setError(data.error)
            } else{
                setproductBySell(data)
            }            
        })
    }

    useEffect(() => {
        loadProductbyOffer()
        loadProductbyArrival()
        loadProductbySell()
    }, []);

    return (
        <Layout>
            <div className="jumbotron">
            <Search/>
                <h2 className="mb-4">New Arrivals</h2>
                <div className="container">
                    <div className="row row-sm ">    
                        {productByArrival.map((product,i) =>(
                            <Card key={i} product={product}  />
                        ))}
                    </div>
                </div>
            <h2 className="mb-4">Best Offers For you</h2>
            <div className="container">
                <div className="row "> 
                    {productByOffer.map((product,i) =>(
                        <Card key={i} product={product} />
                    ))}
                </div></div>
            <h2 className="mb-4">Most Popular</h2>
            <div className="container">
                <div className="row "> 
                    {productBySell.map((product,i) =>(
                        <Card key={i} product={product}  />
                    ))}
            </div></div></div>
        </Layout>
    ) ;
}

export default Home;