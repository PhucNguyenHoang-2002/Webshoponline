import React from "react";
import {Container, Row, Col} from 'reactstrap';
import "../styles/dashboard.css";

import useGetData from "../custom-hooks/useGetData";

const Dashboard =()=>{

    const {data: products } =useGetData("products");
    const {data: users } =useGetData("users");

    return (
        <section>
            <Container>
                <Row>
                    <Col className="lg-3">
                        <div className="revenue__box">
                            <h5>Tổng danh thu</h5>
                            <span>$123</span>
                        </div>
                    </Col>
                    <Col className="lg-3">
                    <div className="orders__box">
                            <h5>Đơn hàng</h5>
                            <span>123</span>
                        </div>
                    </Col>
                    <Col className="lg-3">
                    <div className="products__box">
                            <h5>Tổng sản phẩm</h5>
                            <span>{products.length}</span>
                        </div>
                    </Col>
                    <Col className="lg-3">
                    <div className="users__box">
                            <h5>Số lượng khách hàng</h5>
                            <span>{users.length}</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default Dashboard;