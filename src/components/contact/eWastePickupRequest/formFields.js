import React, {Component} from "react";
import {connect} from "react-redux";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import MultiSelectInput from '../multiselect_field'
import CheckBoxInput from '../form_boolean';
import TextInput from '../form_field';
import DropdownInput from '../dropdown_field'
import DateTimePickerInput from '../dateTimepicker_field'
import TextAreaInput from '../textarea_field';
import TextdisplayField from '../form_display_field'
import Nstepper from './pickup_request_stepper'
import FormAddressValidatorError from '../form_address_validator_error'
import {Field} from 'formik'
import {Titles} from './constants'
import '../../../content/styles/compostRequest.css';
import FormAddressAutocomplete from '../formAddressAutocomplete'
import {IsDistrictActive, GetUnavailableDates} from "../../../actions/contact_forms";
import {Col} from 'react-bootstrap';
import moment from 'moment';
import isEmpty from 'lodash/isEmpty'


//  <Nstepper disabled={values.editMode} header='ELECTRONIC CATEGORY (Maximum of 20 items including no more than 5 TVs per request)' tableHeader='Electronic Category' onChange={setFieldValue} required/>
// Our inner form component which receives our form's state and updater methods as props
//   <Col xs={12}><DisplayFormikState {...props} /></Col>
//


const EwastePickUpRequestFormElements = (props) => {
	const {values, setFieldValue, Dates, isDistrictActive,commercialAddress, geoCoderAddressResult, buildingStatus,isAddressValidated} = props;
	console.log("## :",values.isDistrictActive);
	if(!values.AddresAsEntered && isEmpty(values.PickupRequestItems))
	{
		values.categories.map((category, Item)=>{
			if (category.hasSubCategory) {
				category.hasSubCategory.map((subcategory, SubItem)=>{
					subcategory.RequestedQty = 0
				})
			}
			else
				category.RequestedQty = 0
		});
	}

	if (Dates){
     values.Dates = Dates;
		 values.AppointmentDate = values.AppointmentDate === '' ? moment(Dates[0].StartDate).format('MM/DD/YYYY') : values.AppointmentDate
	}



	if (typeof isDistrictActive !== undefined){
		 values.isDistrictActive = isDistrictActive;
	}

	if(buildingStatus && buildingStatus.features){
		let features = buildingStatus.features[0]
		let unitNumber = features.attributes.UnitsTotal
		values.buildingStatus = unitNumber >= 10 ? true : false;
	}

	if(commercialAddress){
		let ca = commercialAddress.commercialFlag
		values.commercialAddress = ca === 1 ? true : false;
	}

	if(!values.isDistrictActive && document.getElementsByClassName("validatedAddress")[0] !== undefined){
		document.getElementsByClassName("validatedAddress")[0].style.display = "none"
	} else if(document.getElementsByClassName("validatedAddress")[0] !== undefined){
		document.getElementsByClassName("validatedAddress")[0].style.display = "block"
	}

	return (<fieldset className='disabledContactForm' disabled={values.editMode}>
		<FormHeader title='Online Service Request Form'/>
		<FormSectionHeader title={Titles.sectionOne}/>
		<div><FormAddressAutocomplete name="AddressAsEntered"  {...props}   onChange={setFieldValue} disabled={values.editMode}/></div>
		<div><FormAddressValidatorError>
			{values.isDistrictActive === false ?
					'<p><span style="font-weight: 400;">The address you entered is currently not in the pilot program.</p>'
					:values.buildingStatus || values.commercialAddress ?
						 '<p><span style="font-weight: 400;">You live in a building with 10 or more units. Your building is eligible for the City’s free ecycleNYC program which provides convenient in-building electronics collection. Please contact your building’s management to enroll. To learn more, visit <a href="http://www1.nyc.gov/assets/dsny/zerowaste/residents/e-cyclenyc.shtml">nyc.gov/ecycle</a></p>'
						  :''}
				</FormAddressValidatorError></div>
    <div>{values.isDistrictActive && (values.buildingStatus || values.commercialAddress) ? <Field component={CheckBoxInput} name="overideAddressValidation" {...props} onChange={setFieldValue} required/> : '' }</div>
		<Field component={TextdisplayField} title={Titles.crossStreet} body={geoCoderAddressResult ? geoCoderAddressResult.crossStreet :null}/>
		<FormSectionHeader title={Titles.sectionTwo}/>
		<Field component={DropdownInput} name="PickUpLocation" {...props} onChange={setFieldValue} options={geoCoderAddressResult ? geoCoderAddressResult.pickupStreets ? geoCoderAddressResult.pickupStreets: [] : []} disabled={values.editMode} required/>
		<Field component={DateTimePickerInput} required value={values.isDistrictActive ? values.AppointmentDate : ''} Dates={values.Dates} disabled={ values.Dates === undefined ? true : values.editMode } name="AppointmentDate" {...props} onChange={setFieldValue}/>
		<Field component={Nstepper} required name="ElectronicCategory" header='ELECTRONIC CATEGORY (Maximum of 20 items including no more than 5 TVs per request)' tableHeader='Electronic Category' {...props} PickupRequestItems={values.PickupRequestItems} categories={values.categories} disabled={values.editMode} onAppend={setFieldValue}/>
		<FormSectionHeader title={Titles.sectionThree}/>
		<Field component={TextInput} name="FirstName" {...props} required="required"/>
		<Field component={TextInput} name="LastName" {...props} required="required"/>
		<Field component={TextInput} name="Email" {...props} required="required"/>
		<Field component={TextInput} name="ConfirmEmail" {...props} required="required"/>
		<Field component={TextInput} name="Phone" {...props} required="required"/>

	</fieldset>)
};


export default EwastePickUpRequestFormElements;
