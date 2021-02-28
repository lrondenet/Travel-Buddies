import React from 'react';
import { Link } from 'react-router-dom';



const Home = () => (
    <div className='container'>
        <nav className="navbar fixed-top navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Travel Buddies</a>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Link className="btn btn-primary"  to= "/login" role="button" >Login</Link>
                    <Link className="btn btn-primary" to="/signup" role="button">Sign Up</Link>
                </div>
            </div>
        </nav>
    </div>
);

export default Home;