export const Titles = {
  sectionOne: 'WHERE IS THE EVENT',
  Apartment:'FLOOR/SUITE/APT',
  AddressAsEntered:'ADDRESS',
  sectionTwo: 'MORE INFORMATION ABOUT YOUR SITE',
  sectionThree: 'POTENTIAL DATES FOR SITE VISIT',
  sectionFour: 'PRIMARY CONTACT INFORMATION',
  sectionFive: 'SECONDARY CONTACT INFORMATION',
  EventName: 'EVENT NAME',
  AlternateName: 'ALTERNATE NAME/SITE NAME',
  CategorizeSiteTypeId: 'CATEGORIZE YOUR SITE',
  SpecifyOther:'SPECIFY OTHER',
  NameOfSite:'NAME OF SITE',
  AlternateSiteName:'ALTERNATE SITE NAME',
  Notes:'NOTES ABOUT YOUR SITE',
  CurrentRecyclingSetup:'CURRENT RECYCLING SETUP',
  PfirstName:'FIRST NAME',
  PLastName:'LAST NAME',
  PTitle:'TITLE',
  PEmail:'E-MAIL',
  PPhone:'PHONE',
  PhoneTypeId:'PHONE TYPE',
  SfirstName:'FIRST NAME',
  SLastName:'LAST NAME',
  STitle:'TITLE',
  SEmail:'E-MAIL',
  SPhone:'PHONE',
  SPhoneTypeId:'PHONE TYPE',
  Visit1PotentialDate:'DATE FOR POTENTIAL VISIT 1',
  Visit2PotentialDate:'DATE FOR POTENTIAL VISIT 2',
  RequiredFieldMessage: 'This field is required',
  Message: "MESSAGE",
  formTitle:'Site Visit Request',
  SuccessMessage: "Success! Your response No. is: ",
  FailureMessage:"Please make sure your message is correct.",
}


export const formObject = {
  
  "Id": 0,
  "SRNumberId": 0,
  "SRNo": null,
  "AddressAsEntered": null,
  "HouseNumber": null,
  "Street": null,
  "Apartment": null,
  "Borough": null,
  "City": null,
  "State": "NY",
  "Zip": null,
  "CategorizeSiteTypes": [
    {
      "Id":0,
      "Name":"Select One",
      "DisplayName": "Select one",
      "Selected": false
    },
    {
      "Id": 1,
      "Name": "ResidentialBuilding",
      "DisplayName": "Residential Building",
      "Selected": false
    },
    {
      "Id": 2,
      "Name": "CommercialBuilding",
      "DisplayName": "Commercial Building",
      "Selected": false
    },
    {
      "Id": 3,
      "Name": "Schools",
      "DisplayName": "School (PreK-12)",
      "Selected": false
    },
    {
      "Id": 4,
      "Name": "College",
      "DisplayName": "College / University",
      "Selected": false
    },
    {
      "Id": 5,
      "Name": "GovernmentAgency",
      "DisplayName": "NYC Government Agency",
      "Selected": false
    },
    {
      "Id": 6,
      "Name": "NonprofitInstitution",
      "DisplayName": "Nonprofit Institution",
      "Selected": false
    },
    {
      "Id": 7,
      "Name": "Other",
      "DisplayName": "Other",
      "Selected": false
    },
    
  ],
  "CategorizeSiteTypeId": 0,
  "SelectedCategorizeSiteType": null,
  "SpecifyOther": null,
  "NameOfSite": null,
  "AlternateSiteName": null,
  "Notes": null,
  "CurrentRecyclingSetup": null,
  "Visit1PotentialDate": null,
  "Visit2PotentialDate": null,
  "PrimarySelectedPhoneType": [
      {
        "Id":0,
        "Name":"Select One",
        "DisplayName": "Select one",
        "Selected": false
      },
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
  "PhoneTypeId": 0,
  "SelectedPhoneType": null,
  "FullName": null,
  "FullNameLastFirst": null,
  "SecondaryPhoneType": [
      {
        "Id":0,
        "Name":"Select One",
        "DisplayName": "Select one",
        "Selected": false
      },
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
  "SecondaryPhoneTypeId": 0,  
  "Source": null,
  "CreatedDate": "0001-01-01T00:00:00",
  "District": null,
  "Section": null,
  "BBL": null,
  "Latitude": 0,
  "Longitude": 0,
  "PfirstName": null,
  "PLastName":null,
  "PTitle":null,
  "PEmail": null,
  "PPhone": null,
  "SfirstName": null,
  "SLastName": null,
  "STitle": null,
  "SEmail": null,
  "SPhone": null,
  "SPhoneTypeId":0,
}