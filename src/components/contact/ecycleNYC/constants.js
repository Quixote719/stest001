export const Titles = {
  sectionOne: 'BUILDING/SITE INFORMATION',
  AddressAsEntered:'ADDRESS',
  Apartment:'FLOOR/SUITE/APT',
  sectionTwo:'MORE INFORMATION ABOUT YOUR SITE',
  NameOfBuilding:'NAME OF BUILDING,COMPLEX OR SITE',
  NoOfUnitInBuilding:'APPROXIMATE # OF UNITS/APTS IN BUILDING',
  ClassifySiteTypeId:'HOW WOULD YOU CLASSIFY THIS SITE ?',
  ClassifySiteOther:'SPECIFY OTHER',
  sectionThree: 'CONTACT INFORMATION',
  FirstName: 'FIRST NAME',
  LastName: 'LAST NAME',
  ContactRoleInTheBuildingTypesId:'WHAT IS YOUR ROLE IN THE BUILDING ?',
  ContactRoleInTheBuildingOther:'SPECIFY OTHER ROLE',
  ContactEmail: 'E-MAIL',
  ContactPhone: 'PHONE',
  ContactPhoneTypeId:'PHONE TYPE',
  sectionFour:'BUILDING MANAGEMENT INFORMATION',
  BuildingManagementCompany:'MANAGEMENT COMPANY',
  BuildingManagementTitle:'TITLE',
  BuildingManagementFirstName:'CONTACT PERSON FIRST NAME',
  BuildingManagementLastName:'CONTACT PERSON LAST NAME',
  BuildingAddressAsEntered:'ADDRESS',
  BuildingHouseNumber:'FLOOR/SUITE/APT',
  BuildingManagementEmail: 'E-MAIL',
  BuildingManagementPhone: 'PHONE',
  BuildingManagementPhoneTypeId: 'PHONE TYPE',
  BuildingApartment:'FLOOR/SUITE/APT',
  sectionFive:'ADDITIONAL COMMENTS OR QUESTIONS',
  HowDidYouHearTypeId:'HOW DID YOU HEAR ABOUT THE PROGRAM',
  Describe:'PLEASE DESCRIBE',
  AdditionalComments:'PLEASE INDICATE ANY ADDITIONAL COMMENTS OR QUESTIONS YOU HAVE ABOUT THE PROGRAM(S).',
  HaveYouSpokenWith:'',
  formTitle:'ecycleNYC Application',
  SuccessMessage: "Success! Your response No. is: ",
  FailureMessage:"Please make sure your message is correct.",
  RequiredFieldMessage: 'This field is required',
}

export const formObject = {
  "Id": 0,
  "SRNumberId": 0,
  "SRNo": "string",
  "AddressAsEntered": null,
  "Apartment": null,
  "NameOfBuilding": null,
  "NoOfUnitInBuilding":null,
  "ClassifySiteType": [
    {
      "Id": 0,
      "Name": "Select one",
      "DisplayName": "Select one",
      "Selected": true
    },
    {
      "Id":1,
      "Name":"co-op",
      "DisplayName":"Co-op",
      "Selected":false
    },
    {
      "Id":2,
      "Name":"Condo",
      "DisplayName":"Condo",
      "Selected":false
    },
    {
      "Id":3,
      "Name":"Rental",
      "DisplayName":"Rental",
      "Selected":false
    },
    {
      "Id":4,
      "Name":"commercial",
      "DisplayName":"Commercial (refashionNYC only)",
      "Selected":false
    },
    {
      "Id":5,
      "Name":"non-profit",
      "DisplayName":"Non-profit (refashionNYC/organics only)",
      "Selected":false
    },
    {
      "Id":6,
      "Name":"public school",
      "DisplayName":"Public School (refashionNYC only)",
      "Selected":false
    },
    {
      "Id":7,
      "Name":"private school",
      "DisplayName":"Private School (refashionNYC/organics only)",
      "Selected":false
    },
    {
      "Id":8,
      "Name":"government agency",
      "DisplayName":" Government (refashionNYC/organics only)",
      "Selected":false
    },
    {
      "Id":9,
      "Name":"other",
      "DisplayName":"Other",
      "Selected":false
    }

  ],
  "ClassifySiteTypeId": 0,
  "ClassifySiteOther": null,
  "ContactFirstName": null,
  "ContactLastName": null,
  "ContactEmail": null,
  "ContactPhone": null,
  "ContactRoleInTheBuildingType": [
    {
      "Id":0,
      "Name":"Select one",
      "DisplayName":"Select one",
      "Selected":true,
    },
    {
      "Id":1,
      "Name":"Board Member",
      "DisplayName":"Board Member",
      "Selected":false
    },
    {
      "Id":2,
      "Name":"Management Company Representative",
      "DisplayName":"Management Company Representative",
      "Selected":false,
    },
    {
      "Id":2,
      "Name":"Property Manager",
      "DisplayName":"Property Manager",
      "Selected":false,
    },
    {
      "Id":3,
      "Name":"Real Estate Broker",
      "DisplayName":"Real Estate Broker",
      "Selected":false,
    },
    {
      "Id":4,
      "Name":"Resident",
      "DisplayName":"Resident",
      "Selected":false,
    },
    {
      "Id":5,
      "Name":"Resident Property Manager",
      "DisplayName":"Resident Property Manager",
      "Selected":false,
    },
    {
      "Id":6,
      "Name":"Superintendent",
      "DisplayName":"Superintendent",
      "Selected":false,
    },
    {
      "Id":7,
      "Name":"Superintendent",
      "DisplayName":"Superintendent",
      "Selected":false,
    },
     {
      "Id":8,
      "Name":"Other",
      "DisplayName":"Other",
      "Selected":false,
    }
  ],

  "ContactRoleInTheBuildingTypesId": 0,
  "ContactRoleInTheBuildingOther": null,
  "ContactPhoneType": [
    {
      "Id":0,
      "Name":"Select one",
      "DisplayName":"Select one",
      "Selected":true,
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
  "ContactPhoneTypeId": 0,
  "BuildingManagementCompany": null,
  "BuildingManagementTitle": null,
  "BuildingManagementFirstName": null,
  "BuildingManagementLastName": null,
  "BuildingAddressAsEntered": null,
  "BuildingHouseNumber": null,
  "BuildingStreet": "string",
  "BuildingApartment": null,
  "BuildingBorough": "string",
  "BuildingCity": "string",
  "BuildingState": "string",
  "BuildingZip": "string",
  "BuildingManagementEmail": null,
  "BuildingManagementPhone": null,
  "BuildingManagementPhoneType": [
    {
      "Id":0,
      "Name":"Select one",
      "DisplayName":"Select one",
      "Selected":true,
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
  "BuildingManagementPhoneTypeId": 0,
  "HaveYouSpokenWith": true,
  "HowDidYouHearType": [
    {
      "Id":0,
      "Name":"Select one",
      "DisplayName":"Select one",
      "Selected":true,
    },
    {
      "Id":1,
      "Name":"311",
      "DisplayName":"311",
      "Selected":false,
    },
    {
      "Id":2,
      "Name":"Brochure",
      "DisplayName":"Brochure",
      "Selected":false,
    },
    {
      "Id":3,
      "Name":"Community Board/Elected Official",
      "DisplayName":"Community Board/Elected Official",
      "Selected":false,
    },
    {
      "Id":4,
      "Name":"Recycle More, Waste Less Newsletter",
      "DisplayName":"Recycle More, Waste Less Newsletter",
      "Selected":false,
    },
    {
      "Id":5,
      "Name":"Mailer",
      "DisplayName":"Mailer",
      "Selected":false,
    },
    {
      "Id":6,
      "Name":"Meeting",
      "DisplayName":"Meeting",
      "Selected":false,
    },
    {
      "Id":7,
      "Name":"Newspaper",
      "DisplayName":"Newspaper",
      "Selected":false,
    },
    {
      "Id":8,
      "Name":"NYC WasteLess or NYC Recycles website",
      "DisplayName":"NYC WasteLess or NYC Recycles website",
      "Selected":false,
    },
    { 
      "Id":9,
      "Name":"Online: other website",
      "DisplayName":"Online: other website",
      "Selected":false,
    },
    {
      "Id":10,
      "Name":"Public Event",
      "DisplayName":"Public Event",
      "Selected":false,
    },
    {
      "Id":11,
      "Name":"Social Media: Facebook",
      "DisplayName":"Social Media: Facebook",
      "Selected":false,
    },
    {
      "Id":12,
      "Name":"Social Media: Twitter",
      "DisplayName":"Social Media: Twitter",
      "Selected":false,
    },
    {
      "Id":13,
      "Name":"Social Media: Other",
      "DisplayName":"Social Media: Other",
      "Selected":false,
    },
    {
      "Id":14,
      "Name":"Word of Mouth: DSNY Outreach",
      "DisplayName":"Word of Mouth: DSNY Outreach",
      "Selected":false,
    },
    {
      "Id":15,
      "Name":"Word of Mouth: GrowNYC",
      "DisplayName":"Word of Mouth: GrowNYC",
      "Selected":false,
    },
    {
      "Id":16,
      "Name":"Word of Mouth: Friend/Colleague",
      "DisplayName":"Word of Mouth: Friend/Colleague",
      "Selected":false,
    },
    {
      "Id":17,
      "Name":"Word of Mouth: Super Referral",
      "DisplayName":"Word of Mouth: Super Referral",
      "Selected":false,
    }
  ],
  "HowDidYouHearTypeId": 0,
  "Describe": null,
  "AdditionalComments": null,
  "CreatedDate": "2017-11-28T21:16:24.079Z",
  "Source": "string",
  "HouseNumber": "string",
  "Street": "string",
  "Borough": "string",
  "City": "string",
  "State": "string",
  "Zip": "string",
  "District": "string",
  "Section": "string",
  "BBL": "string",
  "Latitude": 0,
  "Longitude": 0,
  "AddressText": "string",
  "AddressTextOneLine": "string"
}