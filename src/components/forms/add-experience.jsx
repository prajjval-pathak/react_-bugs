import React, { Fragment, useState } from 'react';
import { Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './exp.css'

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, location, from, to, } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <section className="container">
      <div className="col-1 col-12">
      <h1 className='large text-primary'>Add An Experience</h1>
      <p className='lead'>
        <i className='fas fa-code'></i> Add any developer/programming positions
        that you have had in the past
      </p>
        <div className='form-group'>
          <input
            type='text'
            name='title'
            value={title}
            onChange={(e) => onChange(e)}
            required
          />
          <label>Job title</label>
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='company'
            value={company}
            onChange={(e) => onChange(e)}
            required
          />
          <label>Yo</label>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Location'
            value={location}
            onChange={(e) => onChange(e)}
            name='location'
          />
        </div>
        <div className='form-group'>
        <span>From Date</span>
          <input
            type='date'
            name='from'
            value={from}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
        <span>To Date</span>
          <input
            type='date'
            name='to'
            value={to}
            onChange={(e) => onChange(e)}
            disabled={toDateDisabled ? 'disabled' : ''}
          />
        </div>
        <input type='submit' className='btn' />
      </div>
      </section>
    </div>
  );
};

// AddExperience.propTypes = { addExperience: PropTypes.func.isRequired };

export default AddExperience;
