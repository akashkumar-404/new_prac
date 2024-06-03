import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Navigate } from 'react-router-dom';

function Dashboard() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.status === 'succeeded'
  );

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <div>
      <h2>Dashboard</h2>
     
    </div>
  );
}

export default Dashboard;
