import React from 'react';
import Appointments from '../Components/AppointmentForm/AppointmentForm';
import Footer from '../Components/Footer/Footer';

const AppointmentsPage = () => {
    return (
        <div>
            <Navbar />
            <Appointments />
            <Footer />
        </div>
    );
};

export default AppointmentsPage;