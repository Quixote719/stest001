export const Titles = {
  sectionOne: 'SECTION 1: WHERE IS THE EVENT',
  sectionTwo: 'EVENT INFORMATION',
  sectionThree: 'PRIMARY CONTACT INFORMATION',
  sectionFour: 'SECONDARY CONTACT INFORMATION (OPTIONAL)',
  sectionFive: 'SECTION 5: SITE INFORMATION',
  sectionSix: 'SECTION 6: DELIVERY INFORMATION',
  AdditionalLocationInfo:'ADDITIONAL LOCATION INFORMATION (OPTION)',
  EventName: 'EVENT NAME',
  AlternateName: 'ALTERNATE NAME/SITE NAME',
  StartDate: 'START DATE',
  EndDate:'END DATE',
  StartTime:'START TIME', 
  EndTime:'END TIME',
  AttendeeCountRangeId:'EXPECTED # oF ATTENDEES',
  IsRecurrent:'IS THIS A RECURRING EVENT',
  ParticipatingOrganizationsDescription:'DESCRIBE PARTICIPATING ORGANIZATIONS(OPTIONAL)',
  AdditionalEventInfo:'ADDITIONAL EVENT INFO',
  ProvidedEquipmentDescription:'DESCRIBE EQUPMENT PROVIDED',
  RecyclableShippingInfo:'SHIPPING INFO FOR RECYCLING MATERIALS',
  ProvidedParkingDescription:'DESCRIBE PARKING PROVIDED',
  ZeroWasteCan:'Zero Waste Can (garbage can)',
  BlueBin: 'Blue Bin (metal,glass.plastics,cartons)',
  GreenBin: 'Green bin (paper & cardboard)',
  BrownBin: 'Brown bin (orgnics)',
  LeafBag: 'Leaf bag (yard waste)',
  PfirstName:'FIRST NAME',
  PLastName:'LAST NAME',
  PPhone: 'PHONE',
  PEmail:'E-MAIL',
  PFullName: 'FULL NAME',
  PFullNameLastFirst: null,
  PTitle: 'TITLE',
  POrganization: 'ORGANIZATION',
  PAddress: 'ADDRESS',
  PSuite:'FLOOR/SUITE/APT (OPTIONAL)',
  PrimarySelectedPhoneType:'PHONE TYPE',
  PEmailConfirm:'CONFIRM E-MAIL',
  SFirstName:'FIRST NAME (OPTIONAL)',
  SLastName: 'LAST NAME (OPTIONAL)',
  SPhone: 'PHONE (OPTIONAL)',
  SEmail: 'EMAIL (OPTIONAL)',
  STitle: 'TITLE (OPTIONAL)',
  SOrganization: 'ORGANIZATION (OPTIONAL)',
  SAddress: 'ADDRESS (OPTIONAL)',
  SSuite:'FLOOR/SUITE/APT (OPTIONAL)',
  SPHONE:'PHONE (OPTIONAL)',
  SecondarySelectedPhoneTypes:'PHONE TYPE (OPTIONAL)',
  SEmailConfirm: 'CONFIRM E-MAIL (OPTIONAL)',
  Theme:'EVENT THEME',
  TargetAudiences:'TARGET AUDIENCE',
  RequiredFieldMessage: 'This field is required',
  
}


export const formObject = {
  "Id": 0,
  "SRNumberId": 0,
  "SRNo": null,
  "CreatedDate": "0001-01-01T00:00:00",
  "EventName":null,
  "AlternateName":null,
  "StartDate":null,
  "EndDate":null,
  "StartTime":null,
  "EndTime":null,
  "TargetAudiences":null,
  "AttendeeCountRanges": [
    {
       "Id": 3,
       "Name": "Between100And200",
       "DisplayName": "101-200",
       "Selected": false
    },
    {
       "Id": 4,
       "Name": "Between200And300",
       "DisplayName": "201-300",
       "Selected": false
    },
    {
      "Id": 5,
      "Name": "Between300And400",
      "DisplayName": "301-400",
      "Selected": false
    },
    {
      "Id": 6,
      "Name": "Between400And500",
      "DisplayName": "401-500",
      "Selected": false
    },
    {
      "Id": 2,
      "Name": "FiftyTo100",
      "DisplayName": "50-100",
      "Selected": false
    },
    {
      "Id": 7,
      "Name": "Over500",
      "DisplayName": "over 500",
      "Selected": false
    },
    {
      "Id": 1,
      "Name": "Under50",
      "DisplayName": "under 50",
      "Selected": false
    }
  ],
  "AttendeeCountRangeId": null,
  "SelectedAttendeeCountRange": null,
  "IsRecurrent":null,
  "ParticipatingOrganizationsDescription":null,
  "AdditionalEventInfo":null,
  "ProvidedEquipmentDescription":null,
  "RecyclableShippingInfo":null,
  "ProvidedParkingDescription":null,
  "ZeroWasteCan":false,
  "BlueBin": false,
  "GreenBin": false,
  "BrownBin": false,
  "LeafBag": false,
  "PfirstName":null,
  "PLastName":null,
  "PPhone": null,
  "PEmail":null,
  "PFullName": null,
  "PFullNameLastFirst": null,
  "PTitle": null,
  "POrganization": null,
  "PFullAddress": null,
  "SFirstName": null,
  "SLastName": null,
  "SPhone": null,
  "SEmail": null,
  "STitle": null,
  "SOrganization": null,
  "SAddress": null,
  "SSuite": null,
  "SPHONE": null,
  "SSelectedPhoneType": null,
  "AdditionalLocationInfo":null,
  "Theme":null,
   "PrimarySelectedPhoneType": [
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
  "SecondarySelectedPhoneTypes": [
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
  "startDailyTimes": [
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
  "EndDailyTimes": [
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
  
}