import React, { Component } from 'react';
import ContentCard from '../shared/ContentCard'


class LocationsSection extends Component {

  
  render() {
    
    const cardStyle = {
                        'float': 'right',
                        'marginTop': '25px'
                      }

    return (
      <div className='locations' style={{backgroundImage: `url(${this.props.LocationProps.image})`,backgroundSize: '100% 900px'}} >
        <div className = 'SContainer'>
            <div className = 'whiteTitle'>Locations</div>
            <div style={cardStyle}>
                <ContentCard type='1' content={this.props.LocationProps.content}/>
            </div>

        </div>
      </div>
    )
  }
}



export default LocationsSection;
