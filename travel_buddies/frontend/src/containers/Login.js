import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import axios from 'axios';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const {email, password} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        login(email, password);
    };

    //is the user authenticated?
    //redirect them to the home page
    if (isAuthenticated) {
        return <Redirect to='/' />
    }
    return (
        <div className='container mt-5'>
            <h1>Sign In</h1>
            <p>Sign into your Account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                         className='form-control'
                         type='email'
                         placeholder='Email'
                         name='email'
                         value={email}
                         onChange={e => onChange(e)}
                         required
                    />
                </div>
                <p></p>
                <div className='form-group'>
                    <input
                         className='form-control'
                         type='password'
                         placeholder='Password'
                         name='password'
                         value={password}
                         onChange={e => onChange(e)}
                         minLength='6'
                         required
                    />
                </div>
                <p></p>
                <button className='btn btn-primary' type='submit'>Login</button>
            </form>
            <p className='mt-3'>
                Don't have an account? <Link to='/signup'>Sign Up</Link>
            </p>
            <p>
                Forgot your Password? <Link to='/reset_password'>Reset Password</Link>
            </p>
        </div>
    );
};

const mapStateToProps = state => ({
    //is authenticated
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);