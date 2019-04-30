import React, { Component } from 'react';
import '../styles/BrandBannerStyle.css'


class BrandBanner extends Component {
    render() { 
        return ( 
            <div className='banner'>
                <img  src={require('../assets/logo.png')} alt='Logo'/>
                <h3>Turtle Rental Service</h3>
            </div>
        );
    }
}
 
export default BrandBanner;