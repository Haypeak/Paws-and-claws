// import VeterinaryServiceHeader from "../Components/VeterinaryService/VeterianaryServiceHeader";
import VeterianaryService from "../Components/VeterinaryService/VeterinaryService";
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';


const VeterianaryServicePage = () => {
    return (
        <div>
            <Navbar color='#d07322'/>
            {/* <VeterinaryServiceHeader/> */}
            <VeterianaryService />
            <Footer />
        </div>
    );
};

export default VeterianaryServicePage;