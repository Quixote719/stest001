import React from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import MultiSelectInput from '../multiselect_field'
import CheckBoxInput from '../form_boolean';
import TextInput from '../form_field';
import DropdownInput from '../dropdown_field'
import DateTimePickerInput from '../dateTimepicker_field'
import TextAreaInput from '../textarea_field';
import Nstepper from './pickup_request_stepper'
import {Field} from 'formik'
import {Titles} from './constants'
import '../../../content/styles/compostRequest.css';
import FormAddressAutocomplete from '../formAddressAutocomplete'
import {Col} from 'react-bootstrap';
import moment from 'moment';
const DisplayFormikState = props => <div style={{
		margin: '1rem 0'
	}}>
	<h3 style={{
			fontFamily: 'monospace'
		}}/>
	<pre
      style={{
        background: '#f6f8fa',
        fontSize: '2rem',
        padding: '.5rem',
      }}
    >
      <strong>values</strong> ={' '}

      {JSON.stringify(props.values, null, 2)}
    </pre>
  </div>;


const EwastePickUpRequestFormElements = (props) => {
	const { values, setFieldValue, Dates, isDistrictActive, geoCoderAddressResult, buildingStatus } = props;



	if (Dates  && typeof isDistrictActive !== undefined){
     values.isDistrictActive = isDistrictActive;
     values.Dates = Dates;
		 values.AppointmentDate = moment(Dates[0].StartDate)
	}

	return (<fieldset className='disabledContactForm' disabled={values.editMode}>
		<FormHeader title='Online Service Request Form'/>
		<FormSectionHeader title={Titles.sectionOne}/>
		<div><FormAddressAutocomplete name="AddressAsEntered"  {...props}   value="" disabled={values.editMode}/></div>
		<FormSectionHeader title={Titles.sectionTwo}/>
		<Field component={DropdownInput} name="PickUpLocation" {...props} onChange={setFieldValue} disabled={values.editMode}/>
		<Field component={DropdownInput} name="PickUpStreet" {...props} options={geoCoderAddressResult ? geoCoderAddressResult.pickupStreets :[]} onChange={setFieldValue} disabled={values.editMode}/>
		<Field component={DateTimePickerInput} value={values.isDistrictActive ? values.AppointmentDate : ''} Dates={values.Dates} name="AppointmentDate" {...props} onChange={setFieldValue}/>
		<Field component={Nstepper} name="ElectronicCategory" header='ELECTRONIC CATEGORY (Maximum of 20 items including no more than 5 TVs per request)' tableHeader='Electronic Category' {...props} required="required" categories={values.categories} disabled={values.editMode} onAppend={setFieldValue}/>
		<FormSectionHeader title={Titles.sectionThree}/>
		<Field component={TextInput} name="FirstName" {...props} required="required"/>
		<Field component={TextInput} name="LastName" {...props} required="required"/>
		<Field component={TextInput} name="Email" {...props} required="required"/>
		<Field component={TextInput} name="ConfirmEmail" {...props} required="required"/>
		<Field component={TextInput} name="Phone" {...props} required="required"/>

	</fieldset>)
};

export default EwastePickUpRequestFormElements;
