import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";


import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from '../assets/images/ip14pro2.jpg'

import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";

import Clock from "../components/UI/Clock";

import counterImg from "../assets/images/counter-timer-img.png";

import useGetData from "../custom-hooks/useGetData";

const Home = () => {

  const {data: products, loading} =useGetData("products");

  const [watchProducts, setwatchProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [headphoneProducts, setheadphoneProducts] = useState([]);
  const [chargingCableProducts, setchargingCableProducts] = useState([]);
  const [chargerProducts, setchargerProducts] = useState([]);
  

  const year = new Date().getFullYear();

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
  return <Helmet title={"Trang Chủ"}>
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
              <p className="hero_subtitle">Trending product in {year}</p>
              <h2>Find The Best Device For You</h2>
              <p>Tìm Kiếm Thiết Bị Tốt Nhất Cho Bạn</p>

              <motion.button whileTap={{ scale: 1.2 }}
                className="buy__btn"><Link to='/shop'>Mua Ngay</Link>
              </motion.button>
            </div>
          </Col>

          <Col lg="6" md="6" >
            <div className="hero__img">
              <img src={heroImg} alt="" style={{ display: "block", width: "100%" }} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <Services />
    <section className="trending__products">
      <Container>
        <Row>
          <Col lg='12' className="text-center">
            <h2
              className="section__title">Sản Phẩm Thịnh Hành</h2>
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

    <section className="best__sales">
      <Container>
        <Row>
          <Col lg='12' className="text-center">
            <h2
              className="section__title">Sản Phẩm Bán Chạy</h2>
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

    <section className="timer__count">
      <Container>
        <Row>
          <Col lg='6' md='12' className="count__down-col">

            <div className="clock__top-content">
              <h4 className="text-white fs-6" mb-2>Ưu đãi có hạn</h4>
              <h3 className="text-white fs-5" mb-3>Ghế bành chất lượng</h3>
            </div>
            <Clock />

            <motion.button whileTap={{ scale: 1.2 }} className="buy__btn store__btn"><Link to='/shop'>Ghé thăm cửa hàng</Link></motion.button>

          </Col>

          <Col lg='6' md='12' className="text_end counter__img">
            <img src={counterImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>

    <section className="new__arrivals">
      <Container>
        <Row>
          <Col lg='12' className="text-center mb-5">
            <h2
              className="section__title">Sản Phẩm Mới</h2>
          </Col>
          {
            loading ? (<h5 className="fw-bold">Đang tải....</h5>
            ):(
              <ProductsList data={mobileProducts} />
            )
          }
          {
            loading ? (<h5 className="fw-bold">Đang tải....</h5>
            ):(
              <ProductsList data={chargingCableProducts} />
            )
          }
          
        </Row>
      </Container>
    </section>

    <section className="popular__category">
      <Container>
        <Row>
          <Col lg='12' className="text-center mb-5">
            <h2
              className="section__title">Phổ Biến Trong Danh Mục</h2>
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


  </Helmet>
};

export default Home;