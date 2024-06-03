
import React, { useState, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
// import { loginAsync } from '../authSlice';
import { FormInput } from '../../../components'; 
import { useNavigate } from 'react-router-dom';
import { loginAsync } from '../authSlice';

function SignInForm() {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await dispatch(loginAsync({ email, password }));

    
    if (status === 'succeeded') {
      navigate('/dashboard'); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        type="email"
        id="email"
        label="Email"
        value={email}
        onChange={(e:any) => setEmail(e.target.value)}
      />
      <FormInput
        type="password"
        id="password"
        label="Password"
        value={password}
        onChange={(e:any) => setPassword(e.target.value)}
      />
      {error && <p className="error">{error}</p>} 
      <button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Signing In...' : 'Sign In'}
      </button>
    </form>
  );
}

export default SignInForm;
