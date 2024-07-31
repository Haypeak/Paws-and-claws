import ContactUs from '../Components/ContactUs/ContactUs';
import ContactUsHeader from '../Components/ContactUs/ContactUsHeader';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';


const AppointmentsPage = () => {
    return (
        <div>
            <Navbar color='#d07322'/>
            <ContactUsHeader/>
            <ContactUs />
            <Footer />
        </div>
    );
};

export default AppointmentsPage;