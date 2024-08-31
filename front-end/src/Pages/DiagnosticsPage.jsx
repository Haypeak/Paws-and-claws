import Diagnostics from '../Components/VeterinaryService/Diagnostics';
// import VeterinaryServiceHeader from '../Components/VeterinaryService/VeterianaryServiceHeader';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';


const DiagnosticsPage = () => {
    return (
        <div>
            <Navbar color='#d07322'/>
           
            <Diagnostics  />
            <Footer />
        </div>
    );
};

export default DiagnosticsPage;