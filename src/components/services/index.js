import React, { Component } from 'react';
import Banner from '../shared/banner';
import SearchBoxCollection from '../shared/searchBoxCollection';


class Services extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchBoxCollection />
      </div>
    )
  }
}


export default Services;
