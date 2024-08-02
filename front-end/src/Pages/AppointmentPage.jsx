// import React from 'react';
import Appointments from '../Components/AppointmentForm/AppointmentForm';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import AppointmentFormHeader from '../Components/AppointmentForm/AppointmentFormHeader';

const AppointmentsPage = () => {
    return (
        <div>
            <Navbar color='#d07322'/>
            <AppointmentFormHeader/>
            <Appointments />
            <Footer />
        </div>
    );
};

export default AppointmentsPage;