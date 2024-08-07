import DentalCare from '../Components/VeterinaryService/DentalCare';
// import VeterinaryServiceHeader from '../Components/VeterinaryService/VeterianaryServiceHeader';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';


const DentalCarePage = () => {
    return (
        <div>
            <Navbar color='#d07322'/>
           
            <DentalCare />
            <Footer />
        </div>
    );
};

export default DentalCarePage;