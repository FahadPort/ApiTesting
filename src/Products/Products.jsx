import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sdata from '../SData/Sdata';

const Products = () => {
    console.log(Sdata[0])
  return (
    <>
      <div id="products">
        <Container>
          <div className="product-inner">
            <Row>
              {Sdata.map((val, index) => (
                <Col key={index} md={3}>
                  <div className="product-wrapper">
                    <div className="image">
                    <img src={val.proimg} alt="" />
                    </div>
                    <div className="product-info">
                      <div className="product-module">
                        <div className="product-sku">
                          <p>SKU#</p>
                        </div>
                        <div className="product-model">{val.sku}</div>
                      </div>
                      <div className="product-title">
                        <h3>{val.protitle}</h3>
                      </div>
                      <div className="product-des">
                        <p>{val.prodes}</p>
                      </div>
                      <div className="product-btn">
                        <button className="cta-btn">
                          <Link to="/">Add to cart</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Products;
