import React from 'react';
import "./Products.css";
import product4 from "../../assets/products4.jpg";
import product6 from "../../assets/products6.jpg";
import product8 from "../../assets/products8.jpg";
import product18 from "../../assets/products18.jpg";
import carts from "../../assets/carts.jpg"

const SubProducts = () => {
  return (
    <div className='products'>
        <div className='products-left'>
        <img src={product4} alt='' className='product'/>
        <img src={product6} alt='' className='product'/>
        <img src={product8} alt='' className='product'/>
        <img src={product18} alt='' className='product' />
        </div>
        <div className='products-right'>
          <h3>WHAT WE OFFER</h3>
          <h2>Offering you the best products at great prices</h2>
          <p>At Paws and Claws, we offer a wide variety of high-quality products to meet all your pet’s needs. Our nutrient-rich pet food ensures your pets receive the nourishment they deserve, promoting their health and vitality. We also provide a range of toys, grooming supplies, and accessories, all chosen for their safety and effectiveness.</p>
          <p>Our specialized dietary products cater to pets with specific health needs. Our knowledgeable staff is here to help you find the perfect items for your pet. From premium kibble and organic treats to supplements, our products support your pet's growth and energy levels. We believe that happy, healthy pets lead to happy owners. Visit Paws and Claws Pet Shop today and see the difference quality makes! 
</p>
<button className='bbs'>Discover more
<img src={carts} alt='' className='cart'/></button>
        </div>
    </div>
  )
}

export default SubProducts
