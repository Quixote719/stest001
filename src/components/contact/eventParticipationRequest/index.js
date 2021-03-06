import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {
  POST_FORM_EVNT_PARTICIP_REQ_URL
} from '../../../constants/ApiConstants';
import {fetchFormObject, postFormObject} from "../../../actions/contact_forms";
import FormSteps,{displayThankYouPage} from '../form_steps'
import formFields from './formFields'
import FetchError from '../fetchError'
import {Titles, formObject as FormObject } from './constants'
import '../../../content/styles/compostRequest.css';

const formTitles = Titles;

class EventParticipationRequestForm extends Component {
  constructor(props) {
    super(props);
    this.postForm = this.postForm.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.modifyFormObject = this.modifyFormObject.bind(this);
    this.state = {
    FormObject:{},
      editMode:true
    }
  }

  postForm(formObject){
      console.log(formObject);
      let modifyFormObject = this.modifyFormObject(formObject);
      this.props.postFormObject(formObject, POST_FORM_EVNT_PARTICIP_REQ_URL);
  }

   validateForm(formObject, errors){
      
      if (formObject.PEmail !== formObject.PEmailConfirm) {
                errors.PEmailConfirm = `The email addresses don't match`
      }

      if (formObject.SEmail != formObject.SEmailConfirm) {
                errors.SEmailConfirm = `The email addresses don't match`
      }


    return errors;
  }

  /* A method that moifies formObject to make it proper for Submission */
  modifyFormObject(formObject){
    
    formObject.PrimaryContact  = {
      'FirstName':formObject.PfirstName,
      'LastName':formObject.PLastName,
      'Phone':formObject.PPhone,
      'Title':formObject.PTitle,
      'Organization':formObject.POrganization,
      'PhoneTypeId':formObject.PPhoneTypeId,
      'Email':formObject.PEmailConfirm,
       'Zip':null,
    }


    formObject.SecondaryContact = {
      'FirstName':formObject.SFirstName,
      'LastName':formObject.SLastName,
      'Phone':formObject.SPhone,
      'Title':formObject.STitle,
      'Organization':formObject.SOrganization,
      'PhoneTypeId':formObject.SPhoneTypeId,
      'Email':formObject.SEmailConfirm,
      'Zip':null,
    }

   

    
  }




  render() {
        const { error, success, geoCoderAddressResult, isAddressValidated} = this.props;
       
        if(success !== undefined && success !== null) {
          if(success && success.SRNo){
                 return displayThankYouPage(`<div><div class='thankyoulable'>THANK YOU</div><div class='thankyoubody'><p>Your ${Titles.formTitle} form has submitted successfully. </p><p>The Service Request number is</p><p class='SRNumberThankYou'>${success.SRNo}</p><p>Use this number when you check the status of your request.</p><p>You will also receive an email with this information. To check the status of this request please visit the DSNY Website Contact page. To reschedule or cancel your request please call 311.</p></div></div>`);
            }else{
                 return displayThankYouPage(`<div><div class='thankyoubody'><p>Sorry we are not able to process your request at this time.</p></div></div>`);
            }
           
        }
    
        if (FormObject && FormObject !== undefined) {
        return (<div className='container'><div className='form compostForm'>
                <FormSteps formFields={formFields} geoCoderAddressResult={geoCoderAddressResult} isAddressValidated={isAddressValidated} success={success} customFormData={FormObject} validateForm={this.validateForm} formTitles={Titles} onSubmit={this.postForm}/>
                </div></div>);
        };

        if (error){
            return (<FetchError onRetry={ () => this.props.fetchFormObject()}/>);
        }
        return(<div className='loader container'></div>)
    }
};

function mapStateToProps(state) {
  return {FormObject: state.forms.formObject,success:state.forms.success,  geoCoderAddressResult:state.carouselDataReducer.DSNYGeoCoder, isAddressValidated: state.carouselDataReducer.addressValidator, error:state.error.type};
}


export default connect(mapStateToProps, {fetchFormObject, postFormObject})(EventParticipationRequestForm);
