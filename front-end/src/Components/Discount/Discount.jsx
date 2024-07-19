import React from 'react';
import "./Discount.css";
import discount from "../../assets/Discount.jpg"; 

const Discount = () => {
  return (
    <div className='Discount'>
        <div className="discount-left">
            <img src={discount} alt='' />
        </div>
        <div className="discount-right">
            <p>
This May, take advantage of our fantastic discount offer and get 10% off on all items at Paws and Claws Veterinary Pet Shop! Whether you're looking for premium pet food, fun and engaging toys, or essential health products, everything is on sale. Our store is stocked with a wide range of high-quality items to keep your pets happy and healthy.

But that's not all—our customers can look forward to more exciting surprises and special releases throughout the year. From exclusive products to additional discounts, you never know what great deals are just around the corner. Don't miss out on these amazing opportunities to pamper your furry friends with the best care and products at unbeatable prices. Visit us today and experience the Paws and Claws difference!</p>
        </div>
      
    </div>
  )
}

export default Discount
