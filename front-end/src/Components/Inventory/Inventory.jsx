import {useRef} from 'react';
import "./Inventory.css"; 
import back_icon from "../../assets/back-icon.jpg";
import next_icon from "../../assets/forward-icon.jpg";
//import {AllProducts} from '../AllProducts/AllProducts';
import product1 from "../../assets/products1.jpg";
import product2 from "../../assets/products2.jpg";
import product3 from "../../assets/products3.jpg";
import product4 from "../../assets/products4.jpg";
import product5 from "../../assets/products5.jpg";
import product6 from "../../assets/products6.jpg";
import product7 from "../../assets/products7.jpg";
import product8 from "../../assets/products8.jpg";
import product9 from "../../assets/products9.jpg";
import product10 from "../../assets/products10.jpg";
import product11 from "../../assets/products11.jpg";
import product12 from "../../assets/products12.jpg";
import product13 from "../../assets/products13.jpg";
import product14 from "../../assets/products14.jpg";
import product15 from "../../assets/products15.jpg";
import product16 from "../../assets/products16.jpg";
import product17 from "../../assets/products17.jpg";
import product18 from "../../assets/products18.jpg";
import product19 from "../../assets/products19.jpg";
import product20 from "../../assets/products20.jpg";
import product21 from "../../assets/products21.jpg";
import product22 from "../../assets/products22.jpg";
import product23 from "../../assets/products23.jpg";
import product24 from "../../assets/products24.jpg";
import product25 from "../../assets/products24.jpg";
import product26 from "../../assets/products24.jpg";
import product27 from "../../assets/products24.jpg";




const AllProducts = [

    {
        id: 1,
        productnum: "001",
        image: product1,
        productName: "Friskies Shred",
        productPrice: "GHC 500",
        currentStock: 30 },
    {
      id: 2,
      productnum: "002",
      image: product2,
      productName: "DOG CHOW",
      productPrice: "GHC 500",
      currentStock: 30 
    },
    {
        id: 3,
        productnum: "003",
        image: product3,
        productName: "Friskies Shred",
        productPrice: "GHC 500",
        currentStock: 30
    },
    {
        id: 4,
        productnum: "004",
        image: product4,
        productName: "Milk Bone",
        productPrice: "GHC 500",
        currentStock: 30
    },
    {
        id: 5,
        productnum: "005",
        image: product5,
        productName: "Milk Bone",
        productPrice: "GHC 500",
        currentStock: 30
    },
    {
        id: 6,
        productnum: "006",
        image: product6,
        productName: "Milk Bone",
        productPrice: "GHC 500",
        currentStock: 30
    },
    {
        id: 7,
        productnum: "007",
        image: product7,
        productName: "Milk Bone",
        productPrice: "GHC 500",
        currentStock: 30
    },
    {
        
        id: 8,
        productnum: "008",
        image: product8,
        productName: "Milk Bone",
        productPrice: "GHC 500",
        currentStock: 30
    },
    {
        id: 9,
        productnum: "009",
        image: product9,
        productName: "Milk Bone",
        productPrice: "GHC 500",
        currentStock: 30
    },
    {
        id: 10,
        productnum: "010",
        image: product10,
        productName: "Milk Bone",
        productPrice: "GHC 500",
        currentStock: 30
    },
    {
        id: 11,
        productnum: "011",
        image: product11,
        productName: "Milk Bone",
        productPrice: "GHC 500",
        currentStock: 30
    },
    {
        id: 12,
        productnum: "012",
        image: product12,
        productName: "Milk Bone",
        productPrice: "GHC 500",
        currentStock: 30
    },
    {
        id: 13,
        productnum: "013",
        image: product13,
        productName: "Milk Bone",
        productPrice: "GHC 500",
        currentStock: 30
    },
    {
        id: 14,
        productnum: "014",
        image: product14,
        productName: "Milk Bone",
        productPrice: "GHC 500",
        currentStock: 30
    },
    {
        id: 15,
        productnum: "015",
        image: product15,
        productName: "Milk Bone",
        productPrice: "GHC 500",
        currentStock: 30
    },
    {
        id: 16,
        productnum: "016",
        image: product16,
        productName: "Milk Bone",
        productPrice: "GHC 500",
        currentStock: 30
    },
    {
        id: 17,
        productnum: "017",
        image: product17,
        productName: "Milk Bone",
        productPrice: "GHC 500",
        currentStock: 30
    },
    {
        id: 18,
        productnum: "018",
        image: product18,
        productName: "Milk Bone",
        productPrice: "GHC 500",
        currentStock: 30
    },
    {
        id: 19,
        productnum: "019",
        image: product19,
        productName: "Milk Bone",
        productPrice: "GHC 500",
        currentStock: 30
    },
    {
        id: 20,
        productnum: "020",
        image: product20,
        productName: "Milk Bone",
        productPrice: "GHC 500",
        currentStock: 30
    },
    {
        id: 21,
        productnum: "021",
        image: product21,
        productName: "Milk Bone",
        productPrice: "GHC 500",
        currentStock: 30
    },
    {
        id: 22,
        productnum: "022",
        image: product22,
        productName: "Milk Bone",
        productPrice: "GHC 500",
        currentStock: 30
    },
    {
        id: 23,
        productnum: "023",
        image: product23,
        productName: "Milk Bone",
        productPrice: "GHC 500",
        currentStock: 30
    },
    {
        id: 24,
        productnum:"024",
        image: product24,
        productName: "Milk Bone",
        productPrice: "GHC 500",
        currentStock: 30
    },
    {
        id: 25,
        productnum: "025",
        image: product25,
        productName: "Milk Bone",
        productPrice: "GHC 500",
        currentStock: 30
    },
    {
        id: 26,
        productnum: "026",
        image: product26,
        productName: "Milk Bone",
        productPrice: "GHC 500",
        currentStock: 30
    },
    {
        id: 27,
        productnum: "027",
        image: product27,
        productName: "Milk Bone",
        productPrice: "GHC 500",
        currentStock: 30
    },
]
const Inventory = () => {

    const slider = useRef();
    let tx = 0;
    const slideForward = () =>{
        if(tx > -50) {
            tx -= 25
        }
        slider.current.style.transform = `translate(${tx}%)`;
   
    }
const slideBackward = () =>{
    if(tx < 0) {
        tx += 25
    }
    slider.current.style.transform = `translate(${tx}%)`;        
    }


  return (
    <div className='Inventory'>
        <nav>
        <h4>Product ID</h4>
        <h4>Image</h4>
        <h4>Product Name</h4>
        <h4>Price</h4>
        <h4>Current Stock</h4>
        <h4>Actions</h4></nav>
        <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt='' className='back-btn'onClick={slideBackward} />
        <slider className="slider">
            <ul ref={slider}>
                <div className='slide'></div>
        {AllProducts.map((item) => (
            <div key={item.id} style={styles.productContainer} className='productContainer'>
             <li><p style={styles.productnum} className='productnum'>{item.productnum}</p></li>
            <li><img style={styles.productImage} src={item.image} alt={item.productName} className='productImage'/></li>
              <li><p style={styles.productName} className='productName'>{item.productName}</p></li>
              <li><p style={styles.productPrice} className='productPrice'>{item.productPrice}</p></li>
                <li><p style={styles.currentStock} className='currentStock'>{item.currentStock}</p></li>
                </div>
        ))}
        </ul>
        </slider>
    </div>
  )
}





const styles = {

    productContainer: {
        display: "flex",
        flexDirection: "column", // Ensures the elements inside are stacked vertically
        alignItems: "center",
        margin: "10px",
        flexDirection: 'column',  // Ensures the elements inside are stacked vertically
        alignItems: 'center',
        margin: 10,
    },
    productImage: {
        width: "100%",
        height: "auto",
        

    },
    productName: {
        fontSize: "16px",
        fontWeight: "bold",
    },
    productPrice: {
        fontSize: "14px",
        color: "#333",
        marginLeft: "100px"
    },
    currentStock: {
        fontSize: "12px",
        color: "#666",
    },
    productnum: {
        marginTop: "30px",
        width: "100px",
        display: "flex",
        flexDirection: "column"
    }
};


export default Inventory
