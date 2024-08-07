import Vaccination from '../Components/VeterinaryService/Vaccination';
// import VeterinaryServiceHeader from '../Components/VeterinaryService/VeterianaryServiceHeader';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';


const VaccinationPage = () => {
    return (
        <div>
            <Navbar color='#d07322'/>
           
            <Vaccination />
            <Footer />
        </div>
    );
};

export default VaccinationPage;