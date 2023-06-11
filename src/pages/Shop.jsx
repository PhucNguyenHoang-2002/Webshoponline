import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";

import "../styles/shop.css";

import useGetData from "../custom-hooks/useGetData";
import ProductsList from "../components/UI/ProductsList";

const Shop = () => {

  const {data: products, loading} =useGetData("products");

  

  const [watchProducts, setwatchProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [headphoneProducts, setheadphoneProducts] = useState([]);
  const [chargingCableProducts, setchargingCableProducts] = useState([]);
  const [chargerProducts, setchargerProducts] = useState([]);
  
  const handleSearch = e => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) => item.productName.
      toLowerCase().includes(searchTerm.toLowerCase()));

      products(searchedProducts);
  }

  useEffect(() => {
    const filterdWatchProducts = products.filter(
      (item) => item.category === "watch"
    );

    const filterdMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );

    const filterdchargingCableProducts = products.filter(
      (item) => item.category === "chargingCable"
    );
    const filterdchargerProducts = products.filter(
      (item) => item.category === "charger"
    );

    const filterdheadphoneProducts = products.filter(
      (item) => item.category === "headphone"
    );
 
    setMobileProducts(filterdMobileProducts);
    setchargingCableProducts(filterdchargingCableProducts);
    setwatchProducts(filterdWatchProducts);
    setheadphoneProducts(filterdheadphoneProducts);
    setchargerProducts(filterdchargerProducts);

  }, [products]);

  return (
    <Helmet title="Sản Phẩm">

      <CommonSection title=" Sản Phẩm" />


      <section>
        <Container>
          <Row>
            
            <Col lg="6" md="12">
              <div className="search__box">
                <input type="text" placeholder="Tìm kiếm...." onChange={handleSearch} />
                <span>
                  <i class=" ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="watch_products">
      <Container>
        <Row>
          <Col lg='12' className="text-left">
            <h2
              className="section__title">Đồng hồ
            
              </h2>
              <motion.button  whileTap={{ scale: 1.2 }}
                className="buy__btn "><Link to='/Home'>Xem thêm</Link>
              </motion.button>
              
          </Col>
          {
            loading ? (<h5 className="fw-bold">Đang tải....</h5>
            ):(
              <ProductsList data={watchProducts} />
            )
          }
          
        </Row>
      </Container>
    </section>

    <section className="mobile_products">
      <Container>
        <Row>
          <Col lg='12' className="text-left">
            <h2
              className="section__title">Điện thoại
             </h2>
              <motion.button  whileTap={{ scale: 1.2 }}
                className="buy__btn "><Link to='/Home'>Xem thêm</Link>
              </motion.button>
          </Col>
          {
            loading ? (<h5 className="fw-bold">Đang tải....</h5>
            ):(
              <ProductsList data={mobileProducts} />
            )
          }
          
        </Row>
      </Container>
    </section>

    <section className="chargingCable_products">
      <Container>
        <Row>
        <Col lg='12' className="text-left">
            <h2
              className="section__title">Cáp sạc
             </h2>
              <motion.button  whileTap={{ scale: 1.2 }}
                className="buy__btn "><Link to='/Home'>Xem thêm</Link>
              </motion.button>
          </Col>
          {
            loading ? (<h5 className="fw-bold">Đang tải....</h5>
            ):(
              <ProductsList data={chargingCableProducts} />
            )
          }
          
        </Row>
      </Container>
    </section>

    <section className="charger_products">
      <Container>
        <Row>
          <Col lg='12' className="text-left">
            <h2
              className="section__title">Cục sạc
              </h2>
              <motion.button  whileTap={{ scale: 1.2 }}
                className="buy__btn "><Link to='/Home'>Xem thêm</Link>
              </motion.button>
          </Col>
          {
            loading ? (<h5 className="fw-bold">Đang tải....</h5>
            ):(
              <ProductsList data={chargerProducts} />
            )
          }
          
        </Row>
      </Container>
    </section>

    <section className="headphone_products">
      <Container>
        <Row>
          <Col lg='12' className="text-left">
            <h2
              className="section__title">Tai nghe
              </h2>
              <motion.button  whileTap={{ scale: 1.2 }}
                className="buy__btn "><Link to='/Home'>Xem thêm</Link>
              </motion.button>
          </Col>
          {
            loading ? (<h5 className="fw-bold">Đang tải....</h5>
            ):(
              <ProductsList data={headphoneProducts} />
            )
          }
          
        </Row>
      </Container>
    </section>
    </Helmet>
  );
};

export default Shop;