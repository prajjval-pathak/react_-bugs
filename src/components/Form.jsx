import React, { useState } from 'react';
import './Form.css';
import FormSignup from './studentSignup';
import Logo from '../images/leftImage.jpg'


const Form = () => {
  const [ setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
    <main>
      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src=  {Logo} alt='spaceship' />
        </div>
          <FormSignup submitForm={submitForm} />
      </div>
      </main>
    </>
  );
};

export default Form;
