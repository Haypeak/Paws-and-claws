import PainManagement from '../Components/VeterinaryService/PainManagement';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';


const PainManagementPage = () => {
    return (
        <div>
            <Navbar color='#d07322'/>
            <PainManagement  />
            <Footer />
        </div>
    );
};

export default PainManagementPage;