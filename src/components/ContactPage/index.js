import React, { Component } from 'react';
import Banner from '../shared/banner';
import SearchBoxCollection from '../shared/searchBoxCollection';
import ServiceRequestsSection from './ServiceRequestsSection';
import RegistrationsSection from './RegistrationsSection';
import GetInvolvedSection from './GetInvolvedSection';
import Complaints from './ComplaintsSection';
import ContactUs from './ContactUsSection';
import * as actions from '../../actions/actions_about';
import _ from "lodash";
import { connect } from 'react-redux';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';



class Contact extends Component {

  constructor(props, context) {
      super(props, context);
      this.componentWillMount = this.componentWillMount.bind(this);
  }
  componentWillMount() {
      this.props.FetchContactData();
  }

  render() {

    let Contact = {};
    let BannerText = {};
    let MyRequestStatus = "";
    let ServiceRequestsProps = {};
    let ComplaintsProps = {};
    let RegistrationsProps = {};
    let GetInvolvedProps = {};
    let ContactUsProps = {};



    this.parseContactData(Contact, BannerText, MyRequestStatus, ServiceRequestsProps, ComplaintsProps, RegistrationsProps, GetInvolvedProps, ContactUsProps);

    return (
      <div>
        {<Banner text = {BannerText} />}
        <div className = 'SContainer'>
            <div className="myRequestStatus">{MyRequestStatus}</div>
          <div className='largeSearchBox'><SearchBoxCollection /></div>
        </div>
        <div className = 'SContainer'>
          <ServiceRequestsSection ServiceRequestsProps = {ServiceRequestsProps}/>
        </div>
        <div className = 'greyBcg'>
          <div className = 'SContainer'>
            <Complaints ComplaintsProps = {ComplaintsProps} />
          </div>
        </div>
        <div className = 'SContainer'>
          <RegistrationsSection RegistrationsProps = {RegistrationsProps}/>
        </div>
        <Row className='greyBcg'>
          <div className = 'getInvolvedContainer'>
            <GetInvolvedSection GetInvolvedProps = {GetInvolvedProps}/>
          </div>
        </Row>
        <div className = 'SContainer'>
          <ContactUs ContactUsProps = {ContactUsProps}/>
        </div>
      </div>
    )
  }



  parseContactData(Contact, BannerText, MyRequestStatus, ServiceRequestsProps, ComplaintsProps, RegistrationsProps, GetInvolvedProps, ContactUsProps) {
    if(this.props.ContactPageData !== undefined){
        Contact = this.props.ContactPageData.data;
    }
    BannerText.title = Contact.title;
    BannerText.content = Contact.header_content;

    if(this.props.ContactPageData !== undefined) {
      _.map(this.props.ContactPageData.data.sections.sections, item =>{
        switch (item.name){
          case 'my-request-status': {
            MyRequestStatus = item.header;
            break;
          }
          case 'service-request':{
            ServiceRequestsProps.title = item.header;
            ServiceRequestsProps.cards = item.cards;
            break;
          }
          case 'complaints': {
            ComplaintsProps.title = item.header;
            ComplaintsProps.content = item.content;
            break;
          }
          case 'applications-and-registrations': {
            RegistrationsProps.title = item.header;
            RegistrationsProps = item;
            break;
          }
          case 'get-involved-section': {
            GetInvolvedProps.image = item.featured_image.base_path + item.featured_image.file;
            GetInvolvedProps.content = item.content;
            GetInvolvedProps.cards = item.cards;
            break;
          }
          case 'contact-us': {
            ContactUsProps.title = item.header;
            ContactUsProps.cards = item.cards;
            break;
          }
          default:{
            break;
          }
        }
      });
    }
  }
}

function mapStateToProps(state) {
  return {
    ContactPageData: state.AboutDataReducer.ContactPageData
  }
}

let actionList = {
  FetchContactData: actions.FetchContactData,
};

Contact = connect(mapStateToProps, actionList)(Contact)


export default Contact;
