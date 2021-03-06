import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {
  PSOT_FORM_ORGANICS_BIN_URL
} from '../../../constants/ApiConstants';
//Actions
import {fetchFormObject, postFormObject} from "../../../actions/contact_forms";
import FormSteps, {displayThankYouPage} from '../form_steps'
import formFields from './formFields'
import FetchError from '../fetchError'
import {Titles, formObject as FormObject } from './constants'
import '../../../content/styles/compostRequest.css';
import ThankYou from '../thank_you';

const formTitles = Titles;

class OrganicsBinReplacement extends Component {
  constructor(props) {
    super(props);
    this.postForm = this.postForm.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.state = {
    FormObject:{},
      editMode:true
    }
  }

  postForm(formObject){
      this.props.postFormObject(formObject, PSOT_FORM_ORGANICS_BIN_URL);
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
      // if(success && success.SRNo){
        return displayThankYouPage( `<div><div class='thankyoulable'>THANK YOU</div><div class='thankyoubody'><p>Your Organics Bin Replacement Request form has been submitted succeffuly.</p><p>&nbsp;</p><p>The Service Request number is</p><p class='SRNumberThankYou'>${success.SRNo}</p><p>Use this number when you check the status of your request.</p><p>&nbsp;<p><p><b>Organics Bin Replacement Request Acknowledgment:</b></p><p>We're happy that you're participating in the DSNY organics collection program! We aim to fulfill requests within 6-8 weeks.</p><p>You may be contacted for additional information.</p><p>NOTE: If your bin is missing. please check with your neighbors. If you find your bin, please submit another bin request form and tell us in the COMMENTS</p></div></div>`)        
      // }
      // else{
      //   return displayThankYouPage(`<div><div class='thankyoubody'><p>Sorry we are not able to process your request at this time.</p></div></div>`)
      // }
    }

    if (FormObject && FormObject !== undefined) {
      return (<div className='container'><div className='form compostForm'>
              <FormSteps formFields={formFields} geoCoderAddressResult={geoCoderAddressResult} isAddressValidated={isAddressValidated} success={success} customFormData={FormObject} validateForm={this.validateForm} formTitles={Titles} onSubmit={this.postForm}/>
              </div></div>);
    };
    // if (error){
    //     return (<FetchError onRetry={ () => this.props.fetchOrganicsBinForm()}/>);
    // }
    return(<div className='loader container'></div>)
 };
};


function mapStateToProps(state) {
  return {FormObject: state.forms.formObject,success:state.forms.success, geoCoderAddressResult:state.carouselDataReducer.DSNYGeoCoder, isAddressValidated: state.carouselDataReducer.addressValidator,error:state.error.type};
}


export default connect(mapStateToProps, {fetchFormObject, postFormObject})(OrganicsBinReplacement);
