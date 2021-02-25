import React, { useEffect } from 'react';
// import axios from 'axios';
import './ProductDetail.css';
import { useSelector, useDispatch } from 'react-redux';
import { detailProduct } from '../actions/product.js';
// import products from '../data.js';

function ProductDetail(props) { // Route path='/product/:id'

    // const product = products.find(p => p._id === props.match.params.id);
    // const [product, setProduct] = useState({});
    const productDetail = useSelector(state => state.productDetail);
    const { product, loading, error } = productDetail;
    const dispatch = useDispatch();

    useEffect(() => {
        //const fetchData = async (id) => {
        //  const {data} = await axios.get(`/api/product/${id}`);
        //  setProduct(data);
        //}
        //fetchData(props.match.params.id);
        dispatch(detailProduct(props.match.params.id));
        return () => {};
    }, []);

    return loading ? < div > กำลั ง load อยู่ นะครั บ < /div> :
    error ? < div className = "error" > ERRRR { error } < /div> : ( <
    div >
        <
        div className = "detail" >
        <
        div className = "detail-image" >
        <
        img src = { product.url }
    /> < /
    div > <
        div className = "detail-info" >
        <
        ul >
        <
        li > < h4 > { product.name } < /h4></li >
        <
        li >
        รีวิวแหล่ งท่ องเที่ ยว: { product.reviews }
    คะแนน < /li> <
    li > ชื่ อจั งหวั ด: < b > จั งหวั ด { product.name } < /b></li >
        <
        li > จำนวนประชากร: < i > { product.population }
    คนต่ อตารางเมตร < /i></li >
        <
        /ul> < /
    div > <
        div className = "detail-action" >
        <
        ul >
        <
        li > Price: { product.price } < /li> <
    li > Status: ท้ องฟ้ าแจ่ มใส ผู้ คนเป็ นมิตรกั บสิ่ งแวดล้ อม < /li> <
    li > งบประมาณ: < select >
        <
        option value = "น้อยกว่าสามพัน" > น้ อยกว่ าสามพั น < /option> <
    option value = "สามพันถึงห้าพันบาท" > สามพั นถึงห้ าพั นบาท < /option> <
    option value = "ห้าพันถึงเจ็ดพันบาท" > ห้ าพั นถึงเจ็ ดพั นบาท < /option> <
    option value = "เจ็ดพันบาทขึ้นไปขึ้นไป" > เจ็ ดพั นบาทขึ้ นไปขึ้ นไป < /option> < /
    select > <
        /li> <
    li > < button className = "checkout primary" > เพิ่ มลงตะกร้ า < /button></li >
        <
        /ul> < /
    div > <
        /div> < /
    div >
);
}

export default ProductDetail;