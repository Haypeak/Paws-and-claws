import PetAndWellness from '../Components/VeterinaryService/PetAndWellness';
// import VeterinaryServiceHeader from '../Components/VeterinaryService/VeterianaryServiceHeader';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';


const PetAndWellnessPage = () => {
    return (
        <div>
            <Navbar color='#d07322'/>
           
            <PetAndWellness />
            <Footer />
        </div>
    );
};

export default PetAndWellnessPage;