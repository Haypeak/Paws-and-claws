import './VeterinaryCareAndProduct.css';
import '../VeterinaryService/VeterinaryService.css';
import dog from '../../assets/dog.jpeg';
import cat from '../../assets/cat.jpeg';
import fish from '../../assets/fish.jpeg';
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
       
        
    </div>
  )
}

export default VeterinaryCareAndProduct