import React, { Component } from 'react';
import '../styles/BrandBannerStyle.css'


class Header extends Component {
    render() { 
        return ( 
            <div className='header'>
                <h3>Turtle Rental Service</h3>
                <img  src={require('../assets/logo.png')} alt='Logo'/>
            </div>
        );
    }
}
 
export default Header;