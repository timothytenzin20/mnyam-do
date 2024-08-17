import React from 'react';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import { Typography } from '@mui/material';

function TripPlan() {
  return (
    <div>
      <AppBar />
      <div className="flex flex-col items-center justify-center min-h-screen rounded-full bg-box-gray">
        <Typography variant="h6" component="h2" align="center" mb={2}>
          Please be patient, trip plan loading!
        </Typography>
        <Loading />
      </div>
      <Footer />
    </div>
  );
}

export default TripPlan;
