import './VeterinaryCareAndProduct.css';
import '../VeterinaryService/VeterinaryService.css';
import dog from '../../assets/dog.jpeg';
import cat from '../../assets/cat.jpeg';
import fish from '../../assets/fish.jpeg';
import dogtreat from '../../assets/kibblesnbite.jpg';
import catfood from '../../assets/Tender&crunchy.jpg';
import cattreat from '../../assets/friskies-shred.jpg';
import bowls from '../../assets/bowls.jpeg';
import shirt from '../../assets/products13.jpg';
import clean from '../../assets/clean.jpeg';
import collar from '../../assets/collar.jpeg'
import leashset from '../../assets/Harness & Leash Set.jpg'
import dogfood from '../../assets/pedigree-smallDog.jpg'
import toys from '../../assets/tys.jpeg'
import cage from '../../assets/dogCage (1).jpg'
import cushion from '../../assets/catInBed.png'
import homespray from '../../assets/home-spray.jpg'
import shampoo from '../../assets/shampoo.webp'
import canfood from '../../assets/canned food.jpeg'
import artullano from '../../assets/artuluna.jpg'
import { useNavigate } from 'react-router-dom';




const VeterinaryCareAndProduct=()=> {
  const navigate = useNavigate();
  return (
    <div className='main-Vetcare-and-product-container'>
    <div className='Vet'>
        <div className='Vet-text'>
     <h1>Pet Care & Product</h1>
     <h3>All Your Pet Need Is Here</h3>
     <p>Your pet’s health and well-being are our top priority. We provide compassionate and professional care to ensure your furry friends live happy and healthy lives. Explore our services and let us partner with you in caring for your beloved pets. 
     Trust Paws and Claws to treat your pets like family.
  </p>
  <button className='service-btn' onClick={() => navigate('/login')}>Book an Appointment</button>
        </div>
      </div>
        <div className='VetCare-Header'>
            <h2>Veterinary PetCare & Products </h2>
        </div>
        <div className='Pet-section-row'>
        <div className='Pet-section-row-item'>
                <img src={dog} alt='dog' className='Pet-section-row-image'/>
                <p>Dog</p>
        </div>
            <div className='Pet-section-row-item'>
                <img src={cat} alt='cat' className='Pet-section-row-image'/>
                <p>Cat</p>
            </div>
            <div className='Pet-section-row-item'>
                <img src={fish} alt='fish' className='Pet-section-row-image'/>
                <p>Fish</p>
            </div>
        </div>
       
    <div>
      <h3 className='header-title'>Popular Category</h3>
      <div className='Popular-category-main-container'>
        <div className='Popular-category-col'>
          <div className='Popular-category-sub'>
            <img src={dogfood} alt='Dog food'/>
            <p>Dog Food</p>
          </div>
          <div className='Popular-category-sub'>
            <img src={dogtreat} alt='Dog treat'/>
            <p>Dog Treat</p>
          </div>
          <div className='Popular-category-sub'>
            <img src={catfood} alt='cat food'/>
            <p>Cat Food</p>
          </div>
          <div className='Popular-category-sub'>
            <img src={cattreat} alt='cat treat'/>
            <p>Cat Treat</p>
          </div>
          <div className='Popular-category-sub'>
            <img src={bowls} alt='bowls'/>
            <p>Bowls</p>
          </div>
          <div className='Popular-category-sub'>
            <img src={clean} alt='Supplies'/>
            <p>Supplies</p>
          </div>
          <div className='Popular-category-sub'>
            <img src={collar} alt='Collar'/>
            <p>Collar</p>
          </div>
          <div className='Popular-category-sub'>
            <img src={leashset} alt='Leash'/>
            <p>Leash Set</p>
          </div>
        </div>
        <div className='Popular-category-col'>
          <div className='Popular-category-sub'>
            <img src={shirt} alt='Clothes'/>
            <p>Clothes</p>
          </div>
          <div className='Popular-category-sub'>
            <img src={toys} alt='Toys'/>
            <p>Toys</p>
          </div>
          <div className='Popular-category-sub'>
            <img src={cage} alt='Cage'/>
            <p>Dog Cage</p>
          </div>
          <div className='Popular-category-sub'>
            <img src={cushion} alt='Sleep'/>
            <p>Sleep</p>
          </div>
          <div className='Popular-category-sub'>
            <img src={homespray} alt='Medicine'/>
            <p>Medicine</p>
          </div>
          <div className='Popular-category-sub'>
            <img src={shampoo} alt='Shampoo'/>
            <p>Shampoo</p>
          </div>
          <div className='Popular-category-sub'>
            <img src={canfood} alt='Canned food'/>
            <p>Can food</p>
          </div>
          <div className='Popular-category-sub'>
            <img src={artullano} alt='Treat'/>
            <p>Clothes</p>
          </div>
        </div>
      </div>
    </div>
        
    </div>
  )
}

export default VeterinaryCareAndProduct