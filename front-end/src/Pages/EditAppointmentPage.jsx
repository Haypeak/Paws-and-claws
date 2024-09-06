import React from 'react';
import EditAppointment from '../Components/AppointmentForm/EditAppointment';
import Footer from '../Components/Footer/Footer';

const EditAppointmentPage = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <EditAppointment />
      </div>
      <Footer />
    </div>
  );
};

export default EditAppointmentPage;
