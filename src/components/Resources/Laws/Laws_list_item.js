import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import '../../../content/styles/lawsListItem.css';
import moment from 'moment';
import Truncate from 'react-truncate';
import Parser from 'html-react-parser';

class LawsListItem extends Component {

  rawMarkup() {
    var rawMarkup = this.props.body;
    return {__html: rawMarkup};
  }

  
  renderLawsTitle(index){
    
    if(index == 0){
      return 'lawsFirstTitle';
    }
      return 'lawsTitle';
  }

  renderLawsDesc(index){

    if(index == 0){
      return 'lawsFirstDesc';
    }
    return 'lawsDesc';
  }


  render() {
    return (
      <div >
        <Col>
          <Col xs={12} sm={3}>
              <div className = {this.renderLawsTitle(this.props.lawsIndex)}>
                 <Truncate lines={2}> {Parser(this.props.title)} </Truncate>
              </div>
          </Col>
          <Col xs={12} sm={9}>
            <Row>
              <Col xs={12}>
                  <div className = {this.renderLawsDesc(this.props.lawsIndex)}>
                   <Truncate lines={2}> {Parser(this.props.body)} </Truncate>
                  </div>
              </Col>
              <Col xs={12}>
                <Link to={`${process.env.REACT_APP_SITE_RELATIVE_URL}${this.props.url}`}>
                  <div className='lawsLink'> {this.props.header}</div>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col xs={12}>
            <div className='hairline'></div>
          </Col>
        </Col>

      </div>
    );
  };
};
LawsListItem.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  body: PropTypes.string,
  index:PropTypes.string,
  className: PropTypes.string,
  url: PropTypes.string,
  header:PropTypes.string
};


export default LawsListItem;
