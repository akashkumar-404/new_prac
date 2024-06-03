// src/features/auth/components/SignInForm.test.tsx

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit/query/react'; 
import authReducer, { loginAsync } from '../authSlice';
import SignInForm from './SignInForm';
import { MemoryRouter as Router } from 'react-router-dom';


jest.mock('../authSlice', () => ({
  ...jest.requireActual('../authSlice'), 
  loginAsync: jest.fn(() => ({ type: 'auth/login/pending' })), 
}));

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

describe('SignInForm Component', () => { 
  test('renders form and dispatches login action on submit', async () => {

    render(
      <Provider store={store}>
        <Router>
          <SignInForm />
        </Router>
      </Provider>
    );

    
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'password123' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Sign In' }));

   
    await waitFor(() => {
      
      expect(loginAsync).toHaveBeenCalledWith({ 
        email: 'test@example.com', 
        password: 'password123' 
      });
    });
  });

  
});
