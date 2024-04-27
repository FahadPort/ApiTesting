import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Productimg from "../Assets/Images/Product01.jpg"







const Products = () => {

   useEffect(()=>{

    axios.get("../SData/Sdata")
    .then((response)=>{
        console.log(response)

    })

   },[])




  return (
   <>

   <div id="products">
    <Container>
    <div className="product-inner">
    <Row>
        <Col md={3}>
            <div className="product-wrapper">
                <div className="image">
                    <img src={Productimg} alt="" />
                </div>
                <div className="product-info">
                    <div className="product-module">
                        <div className="product-sku"><p>SKU#</p></div>
                        <div className="product-model">EQ702438U</div>
                    </div>
                    <div className="product-title">
                        <h3>Harris NEXIO NX AMP 3801 HDI</h3>
                    </div>
                    <div className="product-des">
                        <p>Broadcast video server integrated with 8SD or 4 HD channels, with channelView option and 4TB RAID</p>
                    </div>
                    <div className="product-btn">
                        <button className='cta-btn'><Link to={"/"}>Add to cart</Link></button>
                    </div>

                </div>
            </div>


        </Col>

    </Row>
   
   </div>
   </Container>
   </div>
   
   
   </>



  )
}

export default Products