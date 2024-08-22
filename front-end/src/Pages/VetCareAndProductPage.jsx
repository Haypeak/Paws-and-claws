// import VeterinaryServiceHeader from "../Components/VeterinaryService/VeterianaryServiceHeader";
import VeterianaryCareAndProduct from "../Components/VeterinaryCare&Products/VeterinaryCareAndProduct";
// import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';


const VetCareAndProductPage = () => {
    return (
        <div>
            <Navbar color='#d07322'/>
            {/* <VeterinaryServiceHeader/> */}
            <VeterianaryCareAndProduct />
            {/* <Footer /> */}
        </div>
    );
};

export default VetCareAndProductPage;