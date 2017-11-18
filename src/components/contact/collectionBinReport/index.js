import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

//Actions
import {fetchOrganicsForm, postOrganicsForm} from "../../../actions/contact_forms";
import FormSteps from '../form_steps'
import formFields from './formFields'
import FetchError from '../fetchError'
import {Titles, formObject as FormObject } from './constants'
import '../../../content/styles/compostRequest.css';

const formTitles = Titles;

class CollectionBinReport extends Component {
  constructor(props) {
    super(props);
    this.postForm = this.postForm.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.state = {
    FormObject:{},
      editMode:true
    }
  }

  componentDidMount() {
    this.props.fetchOrganicsForm();
  }

  postForm(formObject){
      this.props.postOrganicsForm(formObject);
  }

   validateForm(formObject, errors){
    //formObject & Values are same
     if (formObject.OrganizationTaxIdNumber === "TEST") {
      errors.OrganizationTaxIdNumber = 'Please enter a valid Organization TaxId Number'
    }
    // if (!values.OrganizationWebsite) {
    //   errors.OrganizationWebsite = 'Please enter a valid Organization Website'
    // }

    return errors;
  }

  render() {

     // const {FormObject, error} = this.props;

    if (FormObject && FormObject !== undefined) {
        return (<div className='container'><div className='form compostForm'>
                <FormSteps formFields={formFields} customFormData={FormObject} validateForm={this.validateForm} formTitles={formTitles} onSubmit={this.postForm}/>
                </div></div>);
    };
    // if (error){
    //     return (<FetchError onRetry={ () => this.props.fetchFormObject()}/>);
    // }
    return(<div className='loader container'></div>)
 };
};


function mapStateToProps(state) {
  return {FormObject: state.forms.formObject, error:state.error.type};
}


export default connect(mapStateToProps, {fetchOrganicsForm, postOrganicsForm})(CollectionBinReport);