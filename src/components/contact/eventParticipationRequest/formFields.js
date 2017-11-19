import React from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import FormHeaderSmallSize from '../form_header_SmallSize'
import MultiSelectInput from '../multiselect_field'
import CheckBoxInput from '../form_boolean';
import TextInput from '../form_field';
import AddressInput from '../form_addressField';
import DropdownInput from '../dropdown_field'
import DateTimePickerInput from '../dateTimepicker_field'
import TextAreaInput from '../textarea_field';
import FormTitleCheckBoxes from '../form_Title_CheckBoxes';
import {Field} from 'formik'
import {Titles} from './constants'
import '../../../content/styles/eventParticipantReqst.css';
import FormAddressAutocomplete from '../formAddressAutocomplete';
import FormAddressAutocompleteNoValidation from '../formAdressAutoCmpleteNoValidation';
import {Col} from 'react-bootstrap';


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


function handleSelect(adress) {
      console.log(adress);
    //this.setState({ input: e.target.value });
};




// Our inner form component which receives our form's state and updater methods as props 
const eventParticipationRequestFormElements = (props) => {
 
  const {
    values,
    handledropDown,
    setFieldValue,
  } = props;
  
  return (<fieldset className='disabledContactForm' disabled={values.editMode}>
    
    <FormHeaderSmallSize title='Online Service Request Form' information='All fields are required unless indicated as optional'/>
    <FormSectionHeader title={Titles.sectionOne}/>
    <div>
      <FormAddressAutocomplete />
    </div>
    <Field component={TextInput} name="AdditionalLocationInfo" fullRow= {true} {...props} maxlength="100"/>
    <FormSectionHeader title={Titles.sectionTwo}/>
    <Field component={TextInput} name="EventName" {...props} maxlength="35" required/>
    <Field component={TextInput} name="AlternateName" {...props} maxlength="35" required/>
    <Field component={DateTimePickerInput} name="StartDate" {...props} onChange={setFieldValue} />
    <Field component={DateTimePickerInput} name="EndDate" {...props} onChange={setFieldValue} required />
    <Field component={DropdownInput}  name="StartTime" timeField={true} {...props} required ondropDownChange={handledropDown} onChange={setFieldValue}  options={values.startDailyTimes} disabled={values.editMode}/>
    <Field component={DropdownInput} name="EndTime" timeField={true} {...props} required ondropDownChange={handledropDown} onChange={setFieldValue} options={values.EndDailyTimes} disabled={values.editMode} />
    <Field component={TextInput} fullRow={true} name="Theme" {...props} maxlength="35" required/>
    <Field component={TextInput} fullRow={true} name="TargetAudiences" {...props} maxlength="100" required/>
    <Field component={DropdownInput} name="AttendeeCountRangeId" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.AttendeeCountRanges} disabled={values.editMode} {...props} required/>
    
    <Field component={DropdownInput} name="IsRecurrent" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} disabled={values.editMode} required/>
    <Field component={TextAreaInput} name="ParticipatingOrganizationsDescription" {...props} maxlength="100" required/>
    <Field component={TextAreaInput} name="AdditionalEventInfo" {...props} maxlength="100" required/>
    <Field component={TextAreaInput} name="ProvidedEquipmentDescription" {...props} maxlength="200" required/>
    <Field component={TextAreaInput} name="RecyclableShippingInfo" {...props} maxlength="200" required/>
    <Field component={TextAreaInput} name="ProvidedParkingDescription" {...props} maxlength="100" required/>
    <FormTitleCheckBoxes title='COSTUME CHARACTERS REQUESTED (SELECT ALL THAT APPLY)'/>
    <Field component={CheckBoxInput} name="ZeroWasteCan" {...props} />
    <Field component={CheckBoxInput} name="BlueBin" {...props} />
    <Field component={CheckBoxInput} name="GreenBin" {...props} />
    <Field component={CheckBoxInput} name="BrownBin" {...props} />
    <Field component={CheckBoxInput} name="LeafBag" {...props} />
    
    <FormSectionHeader title={Titles.sectionThree}/>
    <Field component={TextInput} name="PfirstName" {...props} maxlength="25" required/>
    <Field component={TextInput} name="PLastName" {...props} maxlength="25" required/>
    <Field component={TextInput} name="PTitle" {...props} maxlength="35" required/>
    <Field component={TextInput} name="POrganization" {...props} maxlength="35" required/>


    {/*<FormAddressAutocompleteNoValidation id="PFullAddress" name="PFullAddress" handleSelect={this.handleSelect} {...props} />      */}
    {/*<Field component={AddressInput} name="PFullAddress" {...props} onChange={setFieldValue}  />*/}
    <Field component={TextInput} name="PFullAddress" {...props} maxlength="50" required/>
    <Field component={TextInput} name="PSuite" {...props} maxlength="10" required/>
    <Field component={TextInput} name="PPhone" {...props} maxlength="21" required/>
    <Field component={DropdownInput} name="PrimarySelectedPhoneType" {...props}  ondropDownChange={handledropDown} onChange={setFieldValue} options={values.PrimarySelectedPhoneType} disabled={values.editMode}/>
    <Field component={TextInput}   name="PEmail" {...props} maxlength="50" required/>
    <Field component={TextInput}   name="PEmailConfirm" {...props} maxlength="50" required/>

    <FormSectionHeader title={Titles.sectionFour}/>
    <Field component={TextInput} name="SFirstName" {...props} maxlength="25" />
    <Field component={TextInput} name="SLastName" {...props} maxlength="25" />
    <Field component={TextInput} name="STitle" {...props} maxlength="35" />
    <Field component={TextInput} name="SOrganization" {...props} maxlength="35" />
    <Field component={TextInput} name="SAddress"{...props} maxlength="50" />
    <Field component={TextInput} name="SSuite" {...props} maxlength="10" />
    <Field component={TextInput} name="SPhone" {...props} maxlength="21" />
    <Field component={DropdownInput} name="SecondarySelectedPhoneTypes" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.SecondarySelectedPhoneTypes}  disabled={values.editMode}/>
    <Field component={TextInput} name="SEmail" {...props} maxlength="50" />
    <Field component={TextInput} name="SEmailConfirm" {...props} maxlength="50" />
    <Col xs={12}><DisplayFormikState {...props} /></Col>
  </fieldset>)
};




export default eventParticipationRequestFormElements;