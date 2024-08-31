import WellnessPlan from '../Components/VeterinaryService/WellnessVisitPlan';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';


const WellnessVisitPlanPage = () => {
    return (
        <div>
            <Navbar color='#d07322'/>
            <WellnessPlan  />
            <Footer />
        </div>
    );
};

export default WellnessVisitPlanPage;