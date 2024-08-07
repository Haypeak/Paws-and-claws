import Grooming from '../Components/VeterinaryService/Grooming';
// import VeterinaryServiceHeader from '../Components/VeterinaryService/VeterianaryServiceHeader';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';


const AppointmentsPage = () => {
    return (
        <div>
            <Navbar color='#d07322'/>
           
            <Grooming />
            <Footer />
        </div>
    );
};

export default AppointmentsPage;