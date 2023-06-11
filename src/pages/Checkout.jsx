import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/checkout.css"
import { useSelector } from "react-redux"

const Checkout = () => {

  const totalQty = useSelector(state=>state.cart.totalQuantity)
  const totalAmount = useSelector(state=>state.cart.totalAmount)

  return (
    <Helmet title='Thủ Tục Thanh Toán'>
      <CommonSection title='Thủ Tục Thanh Toán' />
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className="mb-4 fw-bold">Thông Tin Hóa Đơn</h6>
              <Form className="billing__form">
                <FormGroup className="form__group">
                  <input type="text" placeholder="Nhập Tên Của Bạn" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="email" placeholder="Nhập Email Của Bạn" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="number" placeholder="Nhập Số Điện Thoại Của Bạn" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Nhập Địa Chỉ Của Bạn" />
                </FormGroup>

                <FormGroup className="form__group">
                  <input type="text" placeholder="Nhập Thành Phố Của Bạn" />
                </FormGroup>
              </Form>
            </Col>

            <Col lg='4'>
              <div className="check__cart">
                <h6>Tổng Số Lượng: <span>{totalQty} Sản Phẩm</span>
                </h6>
                <h6>Tổng Phụ: <span>${totalAmount}</span>
                </h6>
                <h6><span> Phí Vận Chuyển: <br />
                  Miễn Phí Vận Chuyển
                </span>
                  <span>$0</span>
                </h6>
                <h4>Tổng Chi Phí: <span>${totalAmount}</span>
                </h4>
                <button className="buy__btn auth__btn w-100">Đặt Hàng</button>
              </div>
            </Col>
          </Row>
        </Container>

      </section>
    </Helmet>

  );
};

export default Checkout;