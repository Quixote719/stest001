import _ from "lodash";
import React, { Component } from 'react';
import SubSectionHeader from '../../shared/sub_section_header';
import '../../../content/styles/ContactPage.css';
import CardTitle from '../../shared/Card_title';
import {Row} from 'react-bootstrap';
import {Link} from "react-router-dom";
import CardType from '../../shared/CardDetails/card_type';
import CardBox from '../../shared/card_box';

class GraffitiSection extends Component {

  render() {
    return (
        <div className="GraffitiSection">
          <SubSectionHeader title={this.props.GraffitiProps.title}/>
          <CardBox info={this.props.GraffitiProps}/>
        </div>
    );
  }
}


export default GraffitiSection;
