import React, { Component } from 'react';
import '../styles/BrandBannerStyle.css'


class BrandBanner extends Component {
    render() { 
        return ( 
            <div className='banner'>
                <h3>Turtle Rental Service</h3>
                <img  src={require('../assets/logo.png')} alt='Logo'/>
            </div>
        );
    }
}
 
export default BrandBanner;