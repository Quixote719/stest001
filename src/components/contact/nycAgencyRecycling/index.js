import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {
  PSOT_NYC_AGENCY_RECYCLING_URL
} from '../../../constants/ApiConstants';
//Actions
import {fetchFormObject, postFileObject} from "../../../actions/contact_forms";
import FormSteps, {displayThankYouPage} from '../form_steps'
import formFields from './formFields'
import FetchError from '../fetchError'
import {Titles, formObject as FormObject } from './constants'
import '../../../content/styles/compostRequest.css';
import ThankYou from '../thank_you';

const formTitles = Titles;

class NycAgencyRecycling extends Component {
  constructor(props) {
    super(props);
    this.postForm = this.postForm.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.state = {
    FormObject:{},
      editMode:true
    }
  }

  // componentDidMount() {
  //   this.props.fetchFormObject();
  // }


  postForm(formObject){
      this.props.postFileObject(formObject, PSOT_NYC_AGENCY_RECYCLING_URL);
  }

  validateForm(formObject, errors){
    //formObject & Values are same
    if (formObject.Email !== formObject.ConfirmEmail) {
      errors.ConfirmEmail = `The email addresses don't match`
    }
    // if (!values.OrganizationWebsite) {
    //   errors.OrganizationWebsite = 'Please enter a valid Organization Website'
    // }

    return errors;
  }

  render() {

    const { error, success, geoCoderAddressResult, isAddressValidated} = this.props;
    
    if(success !== undefined) {
      if(success && success.SRNo){
        return displayThankYouPage( `<div><div class='thankyoulable'>THANK YOU</div><div class='thankyoubody'><p>Your Collection Bin on Public Property Removal Request form has been submitted succeffuly.</p><p>An email confirmation has been sent to your contact email address</p></div></div>`)        
      }
      else{
        return displayThankYouPage(`<div><div class='thankyoubody'><p>Sorry we are not able to process your request at this time.</p></div></div>`)
      }
    }

    if (FormObject && FormObject !== undefined) {
      return (<div className='container'><div className='form compostForm'>
              <FormSteps formFields={formFields} geoCoderAddressResult={geoCoderAddressResult} isAddressValidated={isAddressValidated} success={success} customFormData={FormObject} validateForm={this.validateForm} formTitles={Titles} onSubmit={this.postForm}/>
              </div></div>);
    };
    return(<div className='loader container'></div>)
 };
};


function mapStateToProps(state) {
  return {FormObject: state.forms.formObject,success:state.forms.success, geoCoderAddressResult:state.carouselDataReducer.DSNYGeoCoder, isAddressValidated: state.carouselDataReducer.addressValidator,error:state.error.type};
}


export default connect(mapStateToProps, {fetchFormObject, postFileObject})(NycAgencyRecycling);
