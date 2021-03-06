import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, Tooltip } from 'react-bootstrap';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import * as actions from '../../actions/actions_home';
import { connect } from 'react-redux';
import AddressAutocomplete from '../home/CollectionSchedule/addressAutocomplete'
import SubSectionButton from '../shared/sub_section_button';
import styles from '../../content/styles/collectionBinForm.css';
import _ from "lodash";
import isEmpty from 'lodash/isEmpty';
import FormTitleCheckBoxes from './form_Title_CheckBoxes';

let errorFlag = 0;
let previousErrorMessage = "";
let addressValidated = false;
export let validateButtonClicked = false;

var errorMessage; 

class FormAddressAutocomplete extends Component {
    constructor(props, context) {
        super(props, context);
        //const propName = props.name;
        console.log(props.disabled);
        this.state = {
            address: props.values[props.name] || "",
            hideToolTip: true,
          };
          errorMessage =  (
            <div className = "pleaseEnterAddressForm">
            Please enter / select a valid address in order to complete the appointment request.
            </div>
        );
    
    }
 
    componentDidMount(){     
        this.forceUpdate();
    }

    handleChange = (address) =>{
        this.props.checkAddressValidator(0);
        
            errorMessage = (
                <div className = "pleaseEnterAddressForm">
                Please enter / select a valid address in order to complete the appointment request.
                </div>
            );
        var reg=/[\~\+\&\!\@\$\%\^\*\_\|]+/;
        if(!reg.test(address)){
            this.setState({
                address: address,
            })       
        }
        isEmpty(address) || address.trim() === "" || (previousErrorMessage !== this.props.errors[this.props.name]) ? this.setState({hideToolTip: false}) : this.setState({hideToolTip: true});
        previousErrorMessage = this.props.errors[this.props.name];
        //this.props.checkAddressValidator(address);
        this.props.onChange(this.props.name, address);
    }

    resetPlaceHolder = () =>{
        // this.setState({
        //   placeholder: "Enter the address"
        // })
        this.setState({hideToolTip: true});
      }
    setPlaceHolder = () =>{
        // this.setState({
        //   placeholder: " "
        // })
  
        //if(this.props.errors[this.props.name] === "This field is required")
           // isEmpty(this.state.address) || this.state.address.trim().trim() === ""? this.setState({hideToolTip: false}) : this.setState({hideToolTip: true});
        //else
        //previousErrorMessage ="";
        //if((previousErrorMessage !== this.props.errors[this.props.name]) || (!addressValidated && this.props.addressValidator !==1))
        if((this.props.errors[this.props.name] && !addressValidated ) || (!addressValidated) || (this.props.addressValidator !==1) || (this.props.errors[this.props.name] === "The address you entered is currently not in the pilot program"))
            this.setState({hideToolTip: false});

    }
    suggestedAddressSelected = (value) =>{
        this.setState({
            address: value,
         });
         this.props.getCollectionSchedule(value, this.successCallback);
        }
    handleSelect =(address)=>{
        //this.props.checkAddressValidator(1);
        //previousErrorMessage ="";
        //(isEmpty(address) || address.trim() === "")?this.setState({hideToolTip: false}) : this.setState({hideToolTip: true});
       /* this.setState({hideToolTip: true});
        addressValidated = false;

            // this.props.getCollectionSchedule(address);
         this.props.getCollectionSchedule(address, this.successCallback);*/
         if(errorFlag == 0){
            this.setState({
                address: address,
             });
        }
        this.props.getCollectionSchedule(address, this.successCallback);        
         document.getElementById("validateBtn").click();
         this.setState({hideToolTip: false});
         //showflag = false;
        //}
    }

    handleVisiblity = (props) =>{
        alert(props.disabled);
    }
    
    validateButtonClicked =()=>{
         validateButtonClicked = true;
         //this.props.checkAddressValidator(1);
         //(isEmpty(this.state.address) || this.state.address.trim() === "")?this.setState({hideToolTip: false}) : this.setState({hideToolTip: true});
         this.setState({hideToolTip: true});
         addressValidated = false;
         this.props.getCollectionSchedule(this.state.address, this.successCallback);
         //showflag = false;
    }
    successCallback = (success)=>{
        if (this.props.noResultsError.FormattedAddress) {
            this.setState({
                address: this.props.noResultsError.FormattedAddress,
            });
        }
        if(this.props.collectionScheduleInfo === null && this.props.suggestionAddress === null) {
            this.props.commercialAddressFlag(0)            
            errorMessage = (<div className = "noOfSearchResults"> No search results found </div>);
            this.setState({hideToolTip: false});
            this.forceUpdate();
        } 
        else if (this.props.suggestionAddress != null){
            errorMessage = (<div className = "errorUserAddressParent">
            <div className = "addressNotFound">
            The address entered can not be found.
            </div>
            <div className = "selectFromAddressBelow">
            Please select from the possible addresses below
            </div>
                {this.correctAddressList()}
            </div>);
            this.setState({hideToolTip: false});
            this.forceUpdate();                        
        }
        else if(
          (this.props.noResultsError.RegularCollectionSchedule === null || this.props.noResultsError.RegularCollectionSchedule === "") &&
          (this.props.noResultsError.RecyclingCollectionSchedule === null || this.props.noResultsError.RecyclingCollectionSchedule === "") &&
          (this.props.noResultsError.OrganicsCollectionSchedule === null || this.props.noResultsError.OrganicsCollectionSchedule === "") &&
          this.props.suggestionAddress === null && this.props.collectionScheduleInfo !== null){
            this.props.checkAddressValidator(1);            
            this.props.commercialAddressFlag(1)
            errorMessage = (
            <div>
            </div>
            );
            this.forceUpdate();
        } else {
            this.props.commercialAddressFlag(0)                        
            errorMessage = (<div className ="validatedAddress">Address Validated</div>);
            this.props.checkAddressValidator(1);
            addressValidated = true;
            this.setState({hideToolTip: true});
            previousErrorMessage ="";
            this.forceUpdate();
        }
        validateButtonClicked = false;
    }
    correctAddressList = () => {
        return _.map(this.props.suggestionAddress, (value,index)=> {
                return(
                <div className = "suggestedAddressListItem" key ={index} onClick = {()=>{this.suggestedAddressSelected(value)}}>
                    {value}
                </div>);
        } );
    }
    render() {  
        console.log("this.props.addressValidator")        
    console.log(this.props.addressValidator)
        const defaultBounds = new window.google.maps.LatLngBounds(
            new window.google.maps.LatLng(40.915568,-73.699215),
            new window.google.maps.LatLng(40.495992,-74.257159));
        const cssClasses = {
            root: "placesCollectionSchedule",
            googleLogoContainer: 'googleLogoContainer',
            googleLogoImage: 'googleLogoImage',
            autocompleteItem: 'collectionScheduleItem',
            autocompleteItemActive: 'collectionScheduleActiveItem',
            input: ((this.props.errors[this.props.name] && this.state.address.trim() === "") || (this.props.errors[this.props.name] && !addressValidated) || (this.props.errors[this.props.name] && this.props.addressValidator !==1) || (!addressValidated && (this.props.addressValidator !==1) && this.props.errors[this.props.name]) || (this.props.errors[this.props.name] === "The address you entered is currently not in the pilot program"))?'collectionSearchInput error':'collectionSearchInput',
            autocompleteContainer: 'collectionScheduleLanding-autocomplete-container'
          }
          const cssClassesSelected = {
            root: "placesCollectionSchedule",
            googleLogoContainer: 'googleLogoContainer',
            googleLogoImage: 'googleLogoImage',
            autocompleteItem: 'collectionScheduleItem',
            autocompleteItemActive: 'collectionScheduleActiveItem',
            input: ((this.props.errors[this.props.name] && this.state.address.trim() === "") || (this.props.errors[this.props.name] && !addressValidated) || (this.props.errors[this.props.name] && this.props.addressValidator !==1) || (!addressValidated && (this.props.addressValidator !==1) && this.props.errors[this.props.name]) || (this.props.errors[this.props.name] === "The address you entered is currently not in the pilot program"))?'collectionSearchInput error':'collectionSearchInput',
            autocompleteContainer: 'collectionScheduleLanding-autocomplete-container'
          }
          const options = {
            strictBounds: true,
            bounds: defaultBounds,
            componentRestrictions: {country: 'us'}
          }
        const inputProps = {
            name:this.props.name,
            value: this.state.address,
            onChange: this.handleChange,
            placeholder: this.state.placeholder,
            onBlur: this.resetPlaceHolder,
            onFocus: this.setPlaceHolder,
            error: this.props.errors[this.props.name],
            required: true,
        }
        return (
            <div>
                {/* {console.log("DDD" + this.props.addressValidator)} */}
                <FormTitleCheckBoxes title={this.props.title} redAstreix={true}/>
                <Row className = "formPlacesAutosuggestRow">
                    <Col xs={12} sm={this.props.disabled ? 12 : 10} className = "addressAutosuggestCol">
                    <AddressAutocomplete inputProps = {inputProps} options = {options} onSelect={this.handleSelect} onEnterKeyDown={this.handleSelect} classNames = {this.state.address !== "" ?cssClassesSelected:cssClasses} />
                    {(this.props.errors[this.props.name] && !this.state.hideToolTip) || this.props.errors[this.props.name] === "The address you entered is currently not in the pilot program" ?<Tooltip placement="bottom" id="tooltip-bottom" className="in">{this.state.address.trim() !== ""?this.props.errors[this.props.name]:"This field is required"}</Tooltip>:null}

                    {errorMessage}

                    {/* {(this.props.DSNYGeoCoder != null || this.props.suggestionAddress != null)?
                    <div style= {this.props.suggestionAddress == null || this.props.suggestionAddress.length <=0 ?{display:'none'}:{display: 'block'}} className = "errorUserAddressParent">
                    <div className = "addressNotFound">
                    The address entered can not be found.
                    </div>
                    <div className = "selectFromAddressBelow">
                    Please select from the possible addresses below
                    </div>
                        {this.correctAddressList()}
                    </div>:null} */}

                    {/* {this.correctAddressList()} */}
                    </Col>
                    <div style={this.props.disabled ? {display: 'none'}:{display: 'block'}}>
                    <Col xs={12} sm={2} className = "validateButtonCol">
                    {/*<SubSectionButton title='VALIDATE' onClick = {this.validateButtonClicked}/>*/}
                    <button id="validateBtn" disabled ={this.props.disabled} onClick={this.validateButtonClicked} className='subSectionButton'>
                        VALIDATE
                    </button>
                    </Col>
                    </div>

                </Row>
            </div>

        );
    }
}
function mapStateToProps(state) {
    return {
        collectionScheduleData: state.carouselDataReducer.collectionScheduleData,                        
        commercialAddress: state.carouselDataReducer.commercialAddress,                
        organicsCollectionScheduleForm: state.carouselDataReducer.organicsCollectionScheduleForm,        
        regularCollectionScheduleForm: state.carouselDataReducer.regularCollectionScheduleForm,        
        recyclingCollectionScheduleForm: state.carouselDataReducer.recyclingCollectionScheduleForm,        
        addressValidator: state.carouselDataReducer.addressValidator,
        DSNYGeoCoder: state.carouselDataReducer.DSNYGeoCoder,
        noResultsError: state.carouselDataReducer.noResultsError,
        suggestionAddress: state.carouselDataReducer.suggestionAddress,
        collectionScheduleInfo: state.carouselDataReducer.collectionScheduleInfo,
    }
  }

let actionList = {
    commercialAddressFlag: actions.commercialAddressFlag,    
    checkAddressValidator: actions.checkAddressValidator,
    getCollectionSchedule: actions.getCollectionSchedule,
  };

  FormAddressAutocomplete = connect(mapStateToProps, actionList)(FormAddressAutocomplete);
export default FormAddressAutocomplete;
