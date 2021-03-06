import React, { Component } from 'react';
import ContentCard from '../shared/ContentCard'
import { Link } from 'react-router-dom';

class LocationsSection extends Component {


  render() {
    const bcgImage = this.props.LocationProps.image||''
    const style = {
      backgroundImage: `url(${bcgImage})`,
    }
    const cardStyle = {
                        'float': 'right',
                      }
    let link = `<a href=${process.env.REACT_APP_SITE_RELATIVE_URL}/about/location>See All Locations</a>`
    this.props.LocationProps.content += link;
    return (
      <div className='locations' style={style}>
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
