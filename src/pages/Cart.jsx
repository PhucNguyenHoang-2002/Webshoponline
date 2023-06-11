import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSecttion from "../components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";

import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Cart">
      <CommonSecttion title="Giỏ hàng" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {
                cartItems.length === 0 ? (
                  <h2 className="fs-4 text-center">Không có sản phẩm trong giỏ</h2>
                ) :
                  (<table className="table bordered">
                    <thead>
                      <tr>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>SL</th>
                        <th >Xóa</th>
                      </tr>
                    </thead>

                    <tbody>
                      {
                        cartItems.map((item, index) => (
                          <Tr item={item} key={index} />
                        ))}
                    </tbody>
                  </table>
                  )
              }

            </Col>

            <Col lg="3">
              <div>
                <h6 d-flex algin-item-center justify-content-between>
                  Tổng tiền
                  <span className="fs-4 fw-bold algin-item-center d-flex">
                    ${totalAmount}</span>
                </h6>

              </div>
              <p className="fs-6 mt-2">Thuế và phí vận chuyển sẽ được tính trong thanh toán</p>
              <div>
                <button className="buy__btn w-100">
                  <Link to="/checkout">Thanh toán</Link>
                  </button>

                <button className="buy__btn w-100 mt-3">
                  <Link to="/shop">Tiếp tục mua sắm</Link>
                  </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};


const Tr = ({ item }) => {

  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id))
  };

  return (
    <tr >
      <td><img src={item.imgUrl} alt="" /></td>
      <td> {item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <motion.i
          whileTap={{ scale: 1.2 }}
          onClick={deleteProduct}
          class="ri-delete-bin-line">
        </motion.i>
      </td>
    </tr>
  );
};

export default Cart;