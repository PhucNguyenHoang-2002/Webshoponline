import React from "react";
import "./footer.css";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {

  const year = new Date().getFullYear()
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg="4" className="mb-4" md='6'>
          <div className="logo">
            <div>
              <h1 className="text-white">LeoPard</h1>
            </div>
          </div>
          <p className="footer__text">
          Chất lượng tạo nên sự khác biệt!
          </p>
        </Col>

        <Col lg="3"  md='3' className="mb-4">
          <div className="footer__quick-links">
            <h4 className="quick__links-title">Danh Mục Hàng Đầu</h4>
            <ListGroup>
              <ListGroupItem className="ps-0 border-0">
                <Link to='#'>Mobile Phones</Link>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0">
                <Link to='#'>Morden Sofa</Link>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0">
                <Link to='#'>Arm Chair</Link>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0">
                <Link to='#'>Smart Watches</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg="2"  md='3' className="mb-4">
        <div className="footer__quick-links">
            <h4 className="quick__links-title">Liên Kết Hữu Ích</h4>
            <ListGroup>
              <ListGroupItem className="ps-0 border-0">
                <Link to="/shop">Shop</Link>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0">
                <Link to='/cart'>Giỏ Hàng</Link>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0">
                <Link to='/login'>Đăng Nhập</Link>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0">
                <Link to='#'>Privacy Policy</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg="3" d="4">
        <div className="footer__quick-links">
            <h4 className="quick__links-title">Liên Hệ Chúng Tôi</h4>
            <ListGroup className="footer__contact">
              <ListGroupItem className="ps-0 border-0 d-flex align-item-center gap-2">
                <span><i class="ri-map-pin-line"></i></span>
                <p>Landmark 81, Điện Biên Phủ, Vinhomes Tân Cảng, Phường 22, Bình Thạnh, Thành phố Hồ Chí Minh</p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-item-center gap-2">
              <span><i class="ri-phone-line"></i></span>
                <p>0939793979</p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-item-center gap-2">
              <span><i class="ri-mail-line"></i></span>
                <p>leopard2023@gmail.com</p>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg='12'>
          <p className="footer__copyright">Copyright {year} developed by LeoPardTeam. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
};

export default Footer;