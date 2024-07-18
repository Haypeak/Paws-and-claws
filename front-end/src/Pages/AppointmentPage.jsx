import React from 'react';
import Appointments from '../Components/AppointmentForm/AppointmentForm';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';

const AppointmentsPage = () => {
    return (
        <div>
            <Navbar color='#d07322'/>
            <Appointments />
            <Footer />
        </div>
    );
};

export default AppointmentsPage;