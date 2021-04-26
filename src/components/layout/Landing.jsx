import React from 'react';
import { Link } from 'react-router-dom';
import './landingp.css'
const Landing = () => {
  return (
    <>
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Easy Recruit</h1>
          <p className='lead'>
          Our aim is every student of our college is placed
          </p>
          <div className='buttons'>
            <Link to='/signup' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login_Student' className='btn'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};


export default Landing;
