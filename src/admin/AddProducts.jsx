import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { toast } from "react-toastify";

import { db, storage } from '../firebase.config';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {

    const [enterTitle, setEnterTitle] = useState('');
    const [enterShortDesc, setEnterShortDesc] = useState('');
    const [enterDescription, setEnterDescription] = useState('');
    const [enterCategory, setEnterCategory] = useState('');
    const [enterPrice, setEnterPrice] = useState('');
    const [enterProductImg, setEnterProductImg] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    const addPoduct = async (e) => {
        e.preventDefault();
        setLoading(true);


        try {

            const docRef = await collection(db, 'products')

            const storageRef = ref(storage, `productImages/${Date.now() + enterProductImg.name}`)
            const uploadTask = uploadBytesResumable(storageRef, enterProductImg)

            uploadTask.on(() => {
                toast.error('Không thể tải ảnh!');
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    await addDoc(docRef, {
                        productName: enterTitle,
                        shortDesc: enterShortDesc,
                        description: enterDescription,
                        category: enterCategory,
                        price: enterPrice,
                        imgUrl: downloadURL,
                    });
                });
            }
            );

            setLoading(false);
            toast.success('Thêm sản phẩm thành công!');
            navigate("/dashboard/all-products");
        } catch (err) {
            setLoading(false)
            toast.error('Sản phảm không được thêm!!');
        }

    };

    return (
        < section>
            <Container>
                <Row>
                    <Col lg='12'>
                        {
                            loading ? (
                                <h4 className="py-5">Đang tải......</h4>
                            ) : (
                                <>
                                    <h4 className="mb-5">Thêm sản phẩm</h4>
                                    <Form onSubmit={addPoduct}>
                                        <FormGroup className="form__group">
                                            <span>Tên sản phẩm</span>
                                            <input type="text" placeholder="Nhập tên sản phẩm" value=
                                                {enterTitle} onChange={e => setEnterTitle(e.target.value)}
                                                required />
                                        </FormGroup>
                                        <FormGroup className="form__group">
                                            <span>Mô tả ngắn</span>
                                            <input type="text" placeholder="Nhập mô tả ngắn" value=
                                                {enterShortDesc} onChange={e => setEnterShortDesc(e.target.value)}
                                                required />
                                        </FormGroup>
                                        <FormGroup className="form__group">
                                            <span>Mô tả </span>
                                            <input type="text" placeholder="Nhập mô tả " value=
                                                {enterDescription} onChange={e => setEnterDescription(e.target.value)}
                                                required />
                                        </FormGroup>
                                        <div className="d-flex algin-items-center justify-content-between gap-5">
                                            <FormGroup className="form__group w-50">
                                                <span>Giá</span>
                                                <input type="number" placeholder="Nhập giá" value=
                                                    {enterPrice} onChange={e => setEnterPrice(e.target.value)}
                                                    required />
                                            </FormGroup>

                                            <FormGroup className="form__group w-50">
                                                <span>Loại sản phẩm</span>
                                                <select className="w-100 p-2" value=
                                                    {enterCategory} onChange={e => setEnterCategory(e.target.value)}>
                                                    <option value="category">Chọn loại sản phẩm</option>
                                                    <option value="headphone">Tai nghe</option>
                                                    <option value="charger">Cục sạc</option>
                                                    <option value="mobile">Điện thoại</option>
                                                    <option value="watch">Đồng hồ</option>
                                                    <option value="chargingCable">Cáp sạc</option>
                                                </select>
                                            </FormGroup>
                                        </div>

                                        <div>
                                            <FormGroup className="form__group">
                                                <span>Ảnh sản phẩm</span>
                                                <input type="file" onChange={e => setEnterProductImg(e.target.files[0])} required />
                                            </FormGroup>
                                        </div>

                                        <button className="buy__btn " type="submit">Thên sản phẩm</button>
                                    </Form>
                                </>
                            )
                        }
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AddProducts;