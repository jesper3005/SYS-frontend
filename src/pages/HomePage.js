import React, { Component } from 'react';
import SearchBar from '../components/SearchBar'
import FilterContainer from '../components/results/FilterContainer'

class HomePage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <SearchBar {...this.props}/>
            </div> 
        );
    }
}
 
export default HomePage;