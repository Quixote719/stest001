import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

//Actions
import {fetchFormObject, postFormObject} from "../../actions/contact_forms";
import Steps from './contactForm'
import FetchError from './fetchError'

import '../../content/styles/contactForm.css';
import CommonStep from './steps'



const p = {
  "Id": 0,
  "SRNumberId": 0,
  "SRNo": null,
  "CreatedDate": "0001-01-01T00:00:00",
  "FirstName": null,
  "LastName": null,
  "FullName": null,
  "FullNameLastFirst": null,
  "Email": null,
  "AddressAsEntered": null,
  "HouseNumber": null,
  "Street": null,
  "Apartment": null,
  "Borough": null,
  "City": null,
  "State": "NY",
  "Zip": null,
  "AddressText": ", NY",
  "AddressTextOneLine": ", NY",
  "WillPostCompostRecipientSignage": false,
  "WillPostSignageWithinTwoWeeks": false,
  "WillSubmitThreePhotos": false,
  "ConsentToDsnyUseOfPhotos": false,
  "OrganizationName": null,
  "OrganizationTaxIdNumber": null,
  "OrganizationWebsite": null,
  "OrganizationFacebookPage": null,
  "OrganizationTwitterHandle": null,
  "OrganizationInstagramHandle": null,
  "Title": null,
  "IsCertifiedNycMasterComposter": false,
  "PrimaryPhone": null,
  "PrimaryPhoneTypes": [
    {
      "Id": 1,
      "Name": "Work",
      "DisplayName": "Work",
      "Selected": false
    },
    {
      "Id": 2,
      "Name": "Mobile",
      "DisplayName": "Mobile",
      "Selected": false
    },
    {
      "Id": 3,
      "Name": "Home",
      "DisplayName": "Home",
      "Selected": false
    }
  ],
  "PrimaryPhoneTypeId": null,
  "PrimarySelectedPhoneType": null,
  "SecondaryPhone": null,
  "SecondaryPhoneTypes": [
    {
      "Id": 1,
      "Name": "Work",
      "DisplayName": "Work",
      "Selected": false
    },
    {
      "Id": 2,
      "Name": "Mobile",
      "DisplayName": "Mobile",
      "Selected": false
    },
    {
      "Id": 3,
      "Name": "Home",
      "DisplayName": "Home",
      "Selected": false
    }
  ],
  "SecondaryPhoneTypeId": null,
  "SecondarySelectedPhoneType": null,
  "CompostSiteTypes": [
    {
      "Id": 1,
      "Name": "CommunityCompostSite",
      "DisplayName": "Community Compost  Site",
      "Selected": false
    },
    {
      "Id": 2,
      "Name": "CommunityGarden",
      "DisplayName": "Community Garden",
      "Selected": false
    },
    {
      "Id": 3,
      "Name": "NYCHAProperty",
      "DisplayName": "New York Housing Authority (NYCHA) Property",
      "Selected": false
    },
    {
      "Id": 4,
      "Name": "Nonprofit",
      "DisplayName": "Nonprofit Organization or Institution",
      "Selected": false
    },
    {
      "Id": 5,
      "Name": "Park",
      "DisplayName": "NYC Park",
      "Selected": false
    },
    {
      "Id": 6,
      "Name": "School",
      "DisplayName": "NYC School (K-12)",
      "Selected": false
    },
    {
      "Id": 7,
      "Name": "UrbanFarm",
      "DisplayName": "Urban Farm",
      "Selected": false
    },
    {
      "Id": 8,
      "Name": "StreetTrees",
      "DisplayName": "Street Trees",
      "Selected": false
    },
    {
      "Id": 9,
      "Name": "Other",
      "DisplayName": "Other",
      "Selected": false
    }
  ],
  "CompostSiteTypeId": 0,
  "SelectedCompostSiteType": null,
  "OtherCompostSiteType": null,
  "CompostSitePermittingOrganizations": [
    {
      "Id": 1,
      "Name": "GreenThumb",
      "DisplayName": "GreenThumb",
      "Selected": false
    },
    {
      "Id": 2,
      "Name": "NYCParksAndRec",
      "DisplayName": "NYC Department of Parks & Recreation",
      "Selected": false
    },
    {
      "Id": 3,
      "Name": "NYCDOE",
      "DisplayName": "NYC Department of Education",
      "Selected": false
    },
    {
      "Id": 4,
      "Name": "NYCHA",
      "DisplayName": "NYC Housing Authority",
      "Selected": false
    },
    {
      "Id": 5,
      "Name": "TreesNewYork",
      "DisplayName": "TreesNewYork (Certified Citizen Pruner)",
      "Selected": false
    },
    {
      "Id": 6,
      "Name": "Other",
      "DisplayName": "Other",
      "Selected": false
    }
  ],
  "CompostSitePermittingOrganizationId": 0,
  "SelectedCompostSitePermittingOrganization": null,
  "OtherCompostSitePermittingOrganization": null,
  "SiteSize": 0,
  "IsGreenThumbGarden": false,
  "HasReceivedDsnyCompostBefore": false,
  "CompostUseDescription": null,
  "Pallets": 0,
  "DeliveryDeadline": "0001-01-01T00:00:00",
  "DeliveryDays": {
    "Values": [
      {
        "Id": 1,
        "Name": "Sunday",
        "DisplayName": "Sun",
        "Selected": false
      },
      {
        "Id": 2,
        "Name": "Monday",
        "DisplayName": "Mon",
        "Selected": false
      },
      {
        "Id": 3,
        "Name": "Tuesday",
        "DisplayName": "Tues",
        "Selected": false
      },
      {
        "Id": 4,
        "Name": "Wednesday",
        "DisplayName": "Wed",
        "Selected": false
      },
      {
        "Id": 5,
        "Name": "Thursday",
        "DisplayName": "Thurs",
        "Selected": false
      },
      {
        "Id": 6,
        "Name": "Friday",
        "DisplayName": "Fri",
        "Selected": false
      },
      {
        "Id": 7,
        "Name": "Saturday",
        "DisplayName": "Sat",
        "Selected": false
      }
    ],
    "SelectedValues": []
  },
  "DeliverOnMonday": false,
  "DeliverOnTuesday": false,
  "DeliverOnWednesday": false,
  "DeliverOnThursday": false,
  "DeliverOnFriday": false,
  "DeliverOnSaturday": false,
  "FromHoursOfDay": [
    {
      "Id": 1,
      "Name": "OneAm",
      "DisplayName": "01:00 AM",
      "Selected": false
    },
    {
      "Id": 13,
      "Name": "OnePm",
      "DisplayName": "01:00 PM",
      "Selected": false
    },
    {
      "Id": 2,
      "Name": "TwoAm",
      "DisplayName": "02:00 AM",
      "Selected": false
    },
    {
      "Id": 14,
      "Name": "TwoPm",
      "DisplayName": "02:00 PM",
      "Selected": false
    },
    {
      "Id": 3,
      "Name": "ThreeAm",
      "DisplayName": "03:00 AM",
      "Selected": false
    },
    {
      "Id": 15,
      "Name": "ThreePm",
      "DisplayName": "03:00 PM",
      "Selected": false
    },
    {
      "Id": 4,
      "Name": "FourAm",
      "DisplayName": "04:00 AM",
      "Selected": false
    },
    {
      "Id": 16,
      "Name": "FourPm",
      "DisplayName": "04:00 PM",
      "Selected": false
    },
    {
      "Id": 5,
      "Name": "FiveAm",
      "DisplayName": "05:00 AM",
      "Selected": false
    },
    {
      "Id": 17,
      "Name": "FivePm",
      "DisplayName": "05:00 PM",
      "Selected": false
    },
    {
      "Id": 6,
      "Name": "SixAm",
      "DisplayName": "06:00 AM",
      "Selected": false
    },
    {
      "Id": 18,
      "Name": "SixPm",
      "DisplayName": "06:00 PM",
      "Selected": false
    },
    {
      "Id": 7,
      "Name": "SevenAm",
      "DisplayName": "07:00 AM",
      "Selected": false
    },
    {
      "Id": 19,
      "Name": "SevenPm",
      "DisplayName": "07:00 PM",
      "Selected": false
    },
    {
      "Id": 8,
      "Name": "EightAm",
      "DisplayName": "08:00 AM",
      "Selected": false
    },
    {
      "Id": 20,
      "Name": "EightPm",
      "DisplayName": "08:00 PM",
      "Selected": false
    },
    {
      "Id": 9,
      "Name": "NineAm",
      "DisplayName": "09:00 AM",
      "Selected": false
    },
    {
      "Id": 21,
      "Name": "NinePm",
      "DisplayName": "09:00 PM",
      "Selected": false
    },
    {
      "Id": 10,
      "Name": "TenAm",
      "DisplayName": "10:00 AM",
      "Selected": false
    },
    {
      "Id": 22,
      "Name": "TenPm",
      "DisplayName": "10:00 PM",
      "Selected": false
    },
    {
      "Id": 11,
      "Name": "ElevenAm",
      "DisplayName": "11:00 AM",
      "Selected": false
    },
    {
      "Id": 23,
      "Name": "ElevenPm",
      "DisplayName": "11:00 PM",
      "Selected": false
    },
    {
      "Id": 0,
      "Name": "TwelveAm",
      "DisplayName": "12:00 AM",
      "Selected": false
    },
    {
      "Id": 12,
      "Name": "TwelvePm",
      "DisplayName": "12:00 PM",
      "Selected": false
    }
  ],
  "FromHourOfDayId": 0,
  "SelectedFromHourOfDay": null,
  "ToHoursOfDay": [
    {
      "Id": 1,
      "Name": "OneAm",
      "DisplayName": "01:00 AM",
      "Selected": false
    },
    {
      "Id": 13,
      "Name": "OnePm",
      "DisplayName": "01:00 PM",
      "Selected": false
    },
    {
      "Id": 2,
      "Name": "TwoAm",
      "DisplayName": "02:00 AM",
      "Selected": false
    },
    {
      "Id": 14,
      "Name": "TwoPm",
      "DisplayName": "02:00 PM",
      "Selected": false
    },
    {
      "Id": 3,
      "Name": "ThreeAm",
      "DisplayName": "03:00 AM",
      "Selected": false
    },
    {
      "Id": 15,
      "Name": "ThreePm",
      "DisplayName": "03:00 PM",
      "Selected": false
    },
    {
      "Id": 4,
      "Name": "FourAm",
      "DisplayName": "04:00 AM",
      "Selected": false
    },
    {
      "Id": 16,
      "Name": "FourPm",
      "DisplayName": "04:00 PM",
      "Selected": false
    },
    {
      "Id": 5,
      "Name": "FiveAm",
      "DisplayName": "05:00 AM",
      "Selected": false
    },
    {
      "Id": 17,
      "Name": "FivePm",
      "DisplayName": "05:00 PM",
      "Selected": false
    },
    {
      "Id": 6,
      "Name": "SixAm",
      "DisplayName": "06:00 AM",
      "Selected": false
    },
    {
      "Id": 18,
      "Name": "SixPm",
      "DisplayName": "06:00 PM",
      "Selected": false
    },
    {
      "Id": 7,
      "Name": "SevenAm",
      "DisplayName": "07:00 AM",
      "Selected": false
    },
    {
      "Id": 19,
      "Name": "SevenPm",
      "DisplayName": "07:00 PM",
      "Selected": false
    },
    {
      "Id": 8,
      "Name": "EightAm",
      "DisplayName": "08:00 AM",
      "Selected": false
    },
    {
      "Id": 20,
      "Name": "EightPm",
      "DisplayName": "08:00 PM",
      "Selected": false
    },
    {
      "Id": 9,
      "Name": "NineAm",
      "DisplayName": "09:00 AM",
      "Selected": false
    },
    {
      "Id": 21,
      "Name": "NinePm",
      "DisplayName": "09:00 PM",
      "Selected": false
    },
    {
      "Id": 10,
      "Name": "TenAm",
      "DisplayName": "10:00 AM",
      "Selected": false
    },
    {
      "Id": 22,
      "Name": "TenPm",
      "DisplayName": "10:00 PM",
      "Selected": false
    },
    {
      "Id": 11,
      "Name": "ElevenAm",
      "DisplayName": "11:00 AM",
      "Selected": false
    },
    {
      "Id": 23,
      "Name": "ElevenPm",
      "DisplayName": "11:00 PM",
      "Selected": false
    },
    {
      "Id": 0,
      "Name": "TwelveAm",
      "DisplayName": "12:00 AM",
      "Selected": false
    },
    {
      "Id": 12,
      "Name": "TwelvePm",
      "DisplayName": "12:00 PM",
      "Selected": false
    }
  ],
  "ToHourOfDayId": 0,
  "SelectedToHourOfDay": null,
  "DeliveryNotes": null,
  "EntranceHeightWidth": null,
  "HasAlternateSideParking": false,
  "AlternateSideParkingDays": {
    "Values": [
      {
        "Id": 1,
        "Name": "Sunday",
        "DisplayName": "Sun",
        "Selected": false
      },
      {
        "Id": 2,
        "Name": "Monday",
        "DisplayName": "Mon",
        "Selected": false
      },
      {
        "Id": 3,
        "Name": "Tuesday",
        "DisplayName": "Tues",
        "Selected": false
      },
      {
        "Id": 4,
        "Name": "Wednesday",
        "DisplayName": "Wed",
        "Selected": false
      },
      {
        "Id": 5,
        "Name": "Thursday",
        "DisplayName": "Thurs",
        "Selected": false
      },
      {
        "Id": 6,
        "Name": "Friday",
        "DisplayName": "Fri",
        "Selected": false
      },
      {
        "Id": 7,
        "Name": "Saturday",
        "DisplayName": "Sat",
        "Selected": false
      }
    ],
    "SelectedValues": []
  },
  "AlternateSideParkingMonday": false,
  "AlternateSideParkingTuesday": false,
  "AlternateSideParkingWednesday": false,
  "AlternateSideParkingThursday": false,
  "AlternateSideParkingFriday": false,
  "AlternateSideParkingSaturday": false,
  "AlternateSideParkingTimes": null,
  "CompostSiteApplicantTypes": [
    {
      "Id": 1,
      "Name": "StreetTreeSteward",
      "DisplayName": "Street Tree Steward",
      "Selected": false
    },
    {
      "Id": 2,
      "Name": "Organization",
      "DisplayName": "Organization",
      "Selected": false
    }
  ],
  "CompostSiteApplicantTypeId": 0,
  "SelectedCompostSiteApplicantType": null
}


class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.postForm = this.postForm.bind(this);
    this.state = {
FormObject:{},
      editMode:true
    }
  }

  componentDidMount() {
    this.props.fetchFormObject();
  }

  postForm(formObject){
      this.props.postFormObject(formObject);
  }


  render() {

      const {FormObject, error} = this.props;

    //if (FormObject && FormObject !== undefined) {
    return (<div className='container'><div className='contactForm'>

      <Steps formFields={CommonStep} customFormData={FormObject} onSubmit={this.postForm}/>

    </div></div>);
  //};
if (error){
  return (<FetchError onRetry={ () => this.props.fetchFormObject()}/>);
}
  return(<div className='loader container'></div>)
};
};


function mapStateToProps(state) {
  return {FormObject: state.forms.formObject, error:state.error.type};
}





export default connect(mapStateToProps, {fetchFormObject, postFormObject})(ContactForm);
