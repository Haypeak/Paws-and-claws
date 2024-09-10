import UserProfile from '../Components/AppointmentForm/UserProfile';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const UserProfilePage = () => {
    return (
        <div>
            <Navbar color='#d07322'/>
            <UserProfile />
            <Footer />
        </div>
    );
};

export default UserProfilePage;
