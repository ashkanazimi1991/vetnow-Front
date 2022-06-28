import axios from "axios";
import { useState , useEffect } from "react";
import Layout from "../../components/Adviser/Layout";
import styles from "../../styles/ProductsDetails.module.css"
import Head from 'next/head'
import * as cookie from 'cookie'
import { useRouter } from 'next/router';
import { isInCard } from "../../components/product/ButtonsFunction";
import { qunatityManager } from "../../components/product/ButtonsFunction";
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, increase, decrease } from '../../components/redux/Cart/CartActions';
import {BaseUrl} from "../../components/baseUrl/BaseUrl";
import { splitedUrl } from "../../components/functions/splitedUrl";



export default function ProductsDetails(props) {
    
    const productSlug = splitedUrl(window.location.pathname)[2];


    const [data , setData] = useState([]);



    useEffect(async () =>{
       if (localStorage.getItem('token')) {
            await axios.get(`${BaseUrl}/api/v1/product/${productSlug}/`,{
                headers:{
                    'Authorization': 'Token '+ localStorage.getItem('token'), 
                },
            }).then(response => setData(response.data))
        }else{
            await axios.get(`${BaseUrl}/api/v1/product/${productSlug}/`)
            .then(response => setData(response.data))
        }
    },[])

    const router = useRouter();
    const refreshData = () => {
    window.location.reload();
  }

  console.log(data);

  let state = useSelector(state => state.cartState)
  const dispatch = useDispatch()
    
    const [mainPhoto , setMainPhoto] = useState(data.image)
    const imageHandler = (event) =>{
        setMainPhoto(event)
    }

    const isFavHandler = async (id) =>{
        await axios.get(`${BaseUrl}/api/v1/marked/added_or_delete/${id}/`,{
            headers:{
                'Authorization': 'Token '+ localStorage.getItem('token'), 
            }
        })
        refreshData();
    }

    return(
        <div className={styles.container}>
            <Head>
                <title>جزئیات محصول</title>
                <meta name="description" content="وتنا" />
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <section className={styles.main}>
                    <section className={styles.details}>
                        <div className={styles.image}>
                            <img className={styles.big_img} src={data.image} alt="" />
                            <div className={styles.image_flex}>
                                <img onClick={() => imageHandler(data.image)} src={data.image} alt="" />
                                <img onClick={() => imageHandler(data.image2)} src={data.image2} alt="" />
                                <img onClick={() => imageHandler(data.image3)} src={data.image3} alt="" />
                            </div>
                        </div>
                        {console.log(data)}
                        <div className={styles.descreption}>
                            <div className={styles.titleBar}>
                            <h1>{data.name}</h1>
                            {data.is_fav ? <i onClick={() => isFavHandler(data.id)} style={{color: '#EF4056'}} class="fas fa-heart"></i> : <i onClick={() => isFavHandler(data.id)} class="fas fa-heart-circle"></i>}
                            
                            </div>
                            <hr />
                            <div className={styles.descreption_text}>
                                <div style={{fontSize: '14px' , textAlign: 'justify'}} className="product-des" dangerouslySetInnerHTML={{ __html: data.descreption }}></div>
                            </div>
                        </div>
                    </section>
                    <section className={styles.add_to_card}>
                        <p> <i className="fas fa-store-alt"></i> فروشنده : {data.manufacturer_company}</p>
                        <hr style={{opacity: '0.5'}} />
                        <p> <i className="fas fa-check"></i> گارانتی اصالت و کیفیت</p>
                        <hr style={{opacity: '0.5'}} />
                        {data.depository > 0 ? <p><i class="fas fa-sort-numeric-up"></i> {data.depository} تعداد موجود در انبار </p> : <p style={{color: 'red'}}><i class="fas fa-sort-numeric-up"></i> موجود نمیباشد</p>}
                        {data.pdf_file && 
                        <div>
                            <hr style={{opacity: '0.5'}}/>
                            <div style={{display: 'flex' , justifyContent: 'space-between' , alignItems: 'center'}}>
                                <p><i className="fas fa-warehouse"></i> فایل محصول </p>
                                <a href={data.pdf_file}>دانلود فایل</a>
                            </div>
                        </div>
                        }
                        <hr style={{opacity: '0.5'}} />
                        <div className={styles.add_to_card_price}>
                            <p> <i className="fas fa-dollar-sign"></i>  قیمت محصول : </p>
                            <p>{data.price}  ریال</p>
                        </div>
                        <div className={styles.add_to_card_btn}>
                        {data.depository > 0 ?
                             <div style={{display: 'flex' , justifyContent: 'space-between' , alignItems: 'center'}}>
                             {isInCard(state , data.id)?
                                 <button style={{width: '40%' , padding: '0px'}} onClick={() => dispatch(increase(data))}> + </button>
                                 :
                                 <button onClick={() => dispatch(addItem(data)) }>اضافه به سبد خرید</button>
                             }
                             {state.selectedItems.find(item => item.id == data.id) && <span style={{backgroundColor: '#19BFD3' , padding: '5px 8px' , color: 'white' , borderRadius: '5px'}}>{state.selectedItems.find(item => item.id == data.id).quantity}</span>}
                             {qunatityManager(state,data.id) === 1 &&  <button style={{width: '40%' , padding: '0px'}} onClick={() => dispatch(removeItem(data))}> remove </button> }
                             {qunatityManager(state,data.id) > 1 &&  <button style={{width: '40%' , padding: '0px'}} onClick={() => dispatch(decrease(data))}> - </button> }
                             </div>
                        : <button style={{width: '100%' , padding: '10px'}}><i class="fab fa-creative-commons-nc"></i> ناموجود </button>}
                        </div>
                    </section>
                </section>
            </Layout>
        </div>
    )
}


// export async function getServerSideProps(context){
//     const  slug = context.params;
//     const parsedCookies = cookie.parse(context.req.headers.cookie);
//     const data = await axios.get(`${BaseUrl}/api/v1/product/${slug.ProductsDetails}/`,{
//         headers:{
//             'Authorization': 'Token '+ parsedCookies.token, 
//         },
//     })
//     const response = data.data
  
//     return{
//       props:{data: response}
//     }
//   }
  