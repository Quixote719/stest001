import React from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import MultiSelectInput from '../multiselect_field'
import CheckBoxInput from '../form_boolean';
import TextInput from '../form_field';
import DropdownInput from '../dropdown_field'
import DateTimePickerInput from '../dateTimepicker_field'
import TextAreaInput from '../textarea_field';
import {Field} from 'formik'
import {Titles} from './constants'
import '../../../content/styles/compostRequest.css';
import '../../../content/styles/webForm.css';
import FormAddressAutocomplete from '../formAddressAutocomplete'


// Our inner form component which receives our form's state and updater methods as props
const CompostRequestFormElements = (props) => {
  const {
    values,
    handledropDown,
    setFieldValue,
  } = props;

  return (<fieldset className='disabledContactForm' disabled={values.editMode}>

    <FormHeader title='Online Registration'/>
    <FormSectionHeader title={Titles.sectionOne}/>
    <div>
      <FormAddressAutocomplete/>
    </div>
    <Field component={TextInput} name="Apartment" fullRow={true} maxlength={10} {...props} />
    <FormSectionHeader title={Titles.sectionTwo}/>
    <Field component={TextInput} name="RegistrantBusinessName" fullRow={true} maxlength={50} {...props} required/>
    <Field component={TextInput} name="RegistrantFirstName" maxlength={20} {...props} required/>
    <Field component={TextInput} name="RegistrantLastName" maxlength={20} {...props} required/>
    <Field component={TextInput} name="RegistrantTitle" maxlength={30} {...props} required/>
    <Field component={TextInput} name="RegistrantEmail" maxlength={30} {...props} required/>
    <Field component={TextInput} name="RegistrantPhone" maxlength={21} {...props} required/>
    <Field component={DropdownInput} name="RegistrantPhoneTypeId" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.RegistrantPhoneTypes} disabled={values.editMode}/>
    <FormSectionHeader title={Titles.sectionThree}/>

    <Field component={TextInput} name="AddressAsEntered" fullRow={true} maxlength={200} {...props} />
    <Field component={TextInput} name="MailingApartment" maxlength={10} {...props} />

    <FormSectionHeader title={Titles.sectionFour}/>
    <Field component={MultiSelectInput} name="BusinessActivityTypes" {...props} onMultiSelect={setFieldValue} options={values.BusinessActivityTypes} required/>
    <Field component={TextInput} name="OtherDescribe" fullRow={true} maxlength={200} {...props} isHidden={!values.BusinessActivityTypes.Values[5].Selected} required/>
    <FormSectionHeader title={Titles.sectionFive}/>
    <Field component={MultiSelectInput} name="OnSiteProcessingTypes" {...props} onMultiSelect={setFieldValue} options={values.OnSiteProcessingTypes} required/>

    <FormSectionHeader title={Titles.sectionSix}/>
    <Field component={TextInput} name="EquipmentManufacturer" maxlength={100} {...props} />
    <Field component={TextInput} name="EquipmentModelNo" maxlength={100} {...props} />
    <Field component={TextInput} name="EquipmentDescribeSystem" maxlength={200} {...props} />
    <Field component={TextInput} name="EquipmentMinimumCapacity" maxlength={20} {...props} required/>
    <Field component={TextInput} name="EquipmentMaximumCapacity" maxlength={20} {...props} required/>
    <Field component={TextInput} name="InstallationDate" {...props} required/>
    <FormSectionHeader title={Titles.sectionSeven}/>
    <Field component={DropdownInput} name="GreaseInterceptorTypeId" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.GreaseInterceptorTypes} disabled={values.editMode} {...props} />
    <Field component={TextInput} name="GreaseInterceptorManufacturer" maxlength={100} {...props} />
    <Field component={TextInput} name="GreaseInterceptorModelNo" maxlength={100} {...props} />
    <Field component={TextInput} name="GreaseInterceptorCapacity" maxlength={20} {...props} />
    <Field component={TextInput} name="GreaseInterceptorFlow" maxlength={50} {...props} />
  </fieldset>)
};

export default CompostRequestFormElements;
