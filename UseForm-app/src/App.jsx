import { useState } from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

function App() {
  const [state, setState] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Submitted', data);
    setState(true)
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='container'>
            {state && <h1>Registration successfull!</h1>}
            <input {...register('firstname', { required: true, minLength: 5 })} placeholder='First name' />
            {errors.firstname && <p>Enter your First name.</p>}

            <input {...register('lastname', { required: true })} placeholder='Last name' />
            {errors.lastname && <p>Enter your Last name.</p>}

            <input {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} placeholder='E-mail' />
            {errors.email && <p>Please enter a valid email.</p>}

            <input
              type='password'
              {...register('password', { required: 'Password is required', minLength: 4, maxLength: 10 })}
              placeholder='Password'
            />
            {errors.password && <p> {errors.password.message }</p>}
            {errors.password && errors.password.type === 'minLength' && <p>Password must be more than 4 characters.</p>}
            {errors.password && errors.password.type === 'maxLength' && <p>Password must be less than 20 characters.</p>}

            <button type='submit'>Register</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
