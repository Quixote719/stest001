import React from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import MultiSelectInput from '../multiselect_field'
import CheckBoxInput from '../form_boolean';
import TextInput from '../form_field';
import DropdownInput from '../dropdown_field'
import DateTimePickerInput from '../dateTimepicker_field'
import TextAreaInput from '../textarea_field';
import FileDropZone from '../form_file_dropzone';
import {Field} from 'formik'
import {Titles} from './constants'
import '../../../content/styles/compostRequest.css';
import FormAddressAutocomplete from '../formAddressAutocomplete'
import {Col} from 'react-bootstrap';
import FormHeaderSmallSize from '../form_header_SmallSize';
import FormTitleCheckBoxes from '../form_Title_CheckBoxes';

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


// Our inner form component which receives our form's state and updater methods as props
const CompostRequestFormElements = (props) => {
  const {
    values,
    setFieldValue,
  } = props;

  return (<fieldset className='disabledContactForm' disabled={values.editMode}>

    <FormHeaderSmallSize title='Online Application' information={`<span class="requiredAsterik"> * </span>Denotes required field`}/>
    <FormSectionHeader title={Titles.sectionOne}/>
    <div>
      <FormAddressAutocomplete name="AddressAsEntered" {...props} onChange={setFieldValue} disabled={values.editMode}/>
    </div>
    <FormSectionHeader title={Titles.sectionTwo}/>
    <Field component={CheckBoxInput} name="WillPostCompostRecipientSignage" {...props} onChange={setFieldValue} required/>
    <Field component={CheckBoxInput} name="WillPostSignageWithinTwoWeeks" {...props} onChange={setFieldValue} required/>
    <Field component={CheckBoxInput} name="WillSubmitThreePhotos" {...props} onChange={setFieldValue} required/>
    <Field component={CheckBoxInput} name="ConsentToDsnyUseOfPhotos"{...props} onChange={setFieldValue} required/>
    <FormSectionHeader title={Titles.sectionThree}/>
    <Field component={DropdownInput} name="CompostSiteApplicantTypeId" {...props} required onChange={setFieldValue} options={values.CompostSiteApplicantTypes} disabled={values.editMode} />
    <Field component={TextInput} name="OrganizationName" {...props} isHidden={values.CompostSiteApplicantTypeId !== 2} required={values.CompostSiteApplicantTypeId == 2}/>
    <Field component={TextInput} name="OrganizationTaxIdNumber" {...props} required={values.CompostSiteApplicantTypeId == 2}/>
    <Field component={TextInput} name="OrganizationWebsite" {...props} />
    <Field component={TextInput} name="OrganizationFacebookPage" {...props}/>
    <Field component={TextInput} name="OrganizationTwitterHandle" {...props}/>
    <Field component={TextInput} name="OrganizationInstagramHandle" {...props}/>
    {/*<Field component={FileDropZone} name="dummy" {...props}/>*/}

    <FormSectionHeader title={Titles.sectionFour}/>
    <Field component={TextInput} name="FirstName" {...props} required/>
    <Field component={TextInput} name="LastName" {...props} required/>
    <Field component={TextInput} name="Title" {...props}/>
    <Field component={DropdownInput} name="IsCertifiedNycMasterComposter" {...props}  onChange={setFieldValue} noOptions="true" disabled={values.editMode} required/>
    <Field component={TextInput} name="PrimaryPhone" {...props} required/>
    <Field component={DropdownInput} name="PrimaryPhoneTypeId" {...props} onChange={setFieldValue} options={values.PrimaryPhoneTypes} disabled={values.editMode}/>
    <Field component={TextInput} name="SecondaryPhone"{...props}/>
    <Field component={DropdownInput} name="SecondaryPhoneTypeId" {...props}  onChange={setFieldValue} options={values.SecondaryPhoneTypes} disabled={values.editMode}/>
    <Field component={TextInput} name="Email" {...props} required/>
    <Field component={TextInput} name="ConfirmEmail" {...props} required/>

    <FormSectionHeader title={Titles.sectionFive}/>
    <Field component={DropdownInput} name="CompostSiteTypeId" {...props}  onChange={setFieldValue} options={values.CompostSiteTypes} disabled={values.editMode} required/>
    <Field component={TextInput} name="OtherCompostSiteType" {...props} isHidden={values.CompostSiteTypeId !== 9} required={values.CompostSiteTypeId == 9}/>
    <Field component={DropdownInput} name="CompostSitePermittingOrganizationId" {...props} onChange={setFieldValue} options={values.CompostSitePermittingOrganizations} disabled={values.editMode} required/>
    <Field component={TextInput} name="OtherCompostSitePermittingOrganization"{...props} isHidden={values.CompostSitePermittingOrganizationId !== 6} required={values.CompostSitePermittingOrganizationId == 6}/>
    <Field component={TextInput} name="SiteSize" {...props} required/>
    <Field component={DropdownInput} name="IsGreenThumbGarden" {...props}  onChange={setFieldValue} disabled={values.editMode} required/>
    <Field component={DropdownInput} name="HasReceivedDsnyCompostBefore" {...props} onChange={setFieldValue} disabled={values.editMode} required/>
    <Field component={TextAreaInput} name="CompostUseDescription" {...props} required/>

    <FormSectionHeader title={Titles.sectionSix}/>
    <Field component={TextInput} name="Pallets" {...props} required/>
    <Field component={DateTimePickerInput} name="DeliveryDeadline" {...props} onChange={setFieldValue} required/>
    <FormTitleCheckBoxes subHeading="Note: Each Pallet contains 60 forty-pound bags" />
    
    <Field component={MultiSelectInput} name="DeliveryDays" {...props} onMultiSelect={setFieldValue} options={values.DeliveryDays}/>
    <Field component={DropdownInput} name="FromHourOfDayId" {...props}  onChange={setFieldValue} options={values.FromHoursOfDay} disabled={values.editMode}/>
    <Field component={DropdownInput} name="ToHourOfDayId" {...props}  onChange={setFieldValue} options={values.ToHoursOfDay} disabled={values.editMode}/>
    <Field component={TextInput} name="DeliveryNotes" {...props}/>
    <Field component={TextInput} name="EntranceHeightWidth" {...props}/>
    <Field component={DropdownInput} name="HasAlternateSideParking" {...props}  onChange={setFieldValue} disabled={values.editMode} required />
    <Field component={MultiSelectInput} name="AlternateSideParkingDays" {...props} onMultiSelect={setFieldValue} options={values.AlternateSideParkingDays} isHidden={values.HasAlternateSideParking !== true}/>
    <Field component={TextInput} name="AlternateSideParkingTimes" {...props} isHidden={values.HasAlternateSideParking !== true}/>
    
  </fieldset>)
};

export default CompostRequestFormElements;
