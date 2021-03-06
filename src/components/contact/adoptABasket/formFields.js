import React from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import FormHeaderSmallSize from '../form_header_SmallSize';
import MultiSelectInput from '../multiselect_field';
import * as action from '../../../actions/actions_home';
import CheckBoxInput from '../form_boolean';
import TextInput from '../form_field';
import AddressInput from '../form_addressField';
import DropdownInput from '../dropdown_field'
import DateTimePickerInput from '../dateTimepicker_field'
import TextAreaInput from '../textarea_field';
import FileDropZone from '../form_file_dropzone';
import {Field} from 'formik'
import {Titles} from './constants'
import '../../../content/styles/compostRequest.css';
import FormAddressAutocomplete from '../formAddressAutocomplete';
 

// Our inner form component which receives our form's state and updater methods as props
const adoptABasketElements = (props) => {

  const {
    values,
    handledropDown,
    setFieldValue,
  } = props;
  
  return (<fieldset className='disabledContactForm' disabled={values.editMode}>
    
    <FormHeaderSmallSize title='New Enrollment' information={`<span class="requiredAsterik"> * </span>Denotes required field`}/>
    
    <FormSectionHeader title={Titles.sectionOne}/>
    <FormAddressAutocomplete name="AddressAsEntered" title={Titles.AddressAsEntered} {...props}   onChange={setFieldValue} disabled={values.editMode}/>
    <Field component={TextInput} name="BasketAdditionalLocationInfo" fullRow={true} {...props} disabled={values.editMode}/>
    
    <FormSectionHeader title={Titles.sectionTwo}/>
    <Field component={TextInput} name="BusinessName" {...props} fullRow={true} maxlength="100" disabled={values.editMode} required/>
    <Field component={AddressInput} name="BusinessAddressAsEntered" {...props} onChange={setFieldValue}  fullRow={true} maxlength="100" disabled={values.editMode} required/>
    <Field component={TextInput} name="BusinessApartment" {...props} maxlength="100" disabled={values.editMode}/> 

    <FormSectionHeader title={Titles.sectionThree} />
    <Field component={TextInput} name="FirstName" {...props} maxlength="100" disabled={values.editMode} required/>
    <Field component={TextInput} name="LastName" {...props} maxlength="100"  disabled={values.editMode} required/>
    <Field component={TextInput} name="Email" {...props} maxlength="100"  disabled={values.editMode}disabled={values.editMode} required/>
    <Field component={TextInput} name="confirmEmail" {...props} maxlength="100"  disabled={values.editMode} required/>
    <Field component={TextInput} name="Phone" {...props} maxlength="100" disabled={values.editMode} required/>

  </fieldset>)
};

export default adoptABasketElements;