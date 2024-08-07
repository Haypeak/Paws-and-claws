import MedicalCheckUp from '../Components/VeterinaryService/MedicalCheckUp';
// import VeterinaryServiceHeader from '../Components/VeterinaryService/VeterianaryServiceHeader';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';


const MedicalCheckupPage = () => {
    return (
        <div>
            <Navbar color='#d07322'/>
           
            <MedicalCheckUp />
            <Footer />
        </div>
    );
};

export default MedicalCheckupPage;