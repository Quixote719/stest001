import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as actions from '../../../actions/actions_home';
import { connect } from 'react-redux';
import styles from '../../../content/styles/collectionSchedule.css';
import { Grid, Row, Col, Pagination } from 'react-bootstrap';
import _ from "lodash";
import Banner from '../../shared/banner';
import { Link } from "react-router-dom";
import Header from '../../shared/Breadcrumb/breadcrumb_container.js';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import DownloadInfoApp from '../download_dsny_app';
import CollectionScheduleTable from './collectionScheduleTable';
import RoutingTimes from './routingTimes';
import AddressAutocomplete from './addressAutocomplete'
import CollectionScheduleDefaultTable from './collectionScheduleDefaultTable'

let errorFlag = 0;
var showTableFlag;
class CollectionSchedule extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            address: this.props.match.params.address,
            placeholder: "When is Collection at ...",
            checkInputresults: "",
        };
    }
    componentWillMount() {
        var address = this.props.match.params.address;
        if(address == undefined){
            showTableFlag = 0;            
        }else{
            showTableFlag = 1;                        
            this.props.getCollectionSchedule(address, null, this.successCallback);                                  
        }
        if (this.props.match.path !== "/assets/donate/development/react/collectionSchedule") {
            this.setState({
                checkInputresults: ""
            });
        }
        else {
            this.setState({
                checkInputresults: "clearBoxChecked"
            });
        }

    }
    handleChange = (address) => {
        this.setState({
            address: address,
        })
    }
    resetPlaceHolder = () => {
        this.setState({
            placeholder: "When is Collection at ..."
        })
    }
    setPlaceHolder = () => {
        this.setState({
            placeholder: " "
        })
    }
    clearSearchBox() {
        this.setState({
            address: "",
            checkInputresults: "clearBoxChecked"
        });
    }
    handleSelect = (address) => {
        showTableFlag = 1;
        if (errorFlag == 0) {
            this.setState({
                address: address,
                checkInputresults: "clearBoxNotChecked"
            });
            this.props.getCollectionSchedule(address, null, this.successCallback);
            this.props.history.push(process.env.REACT_APP_SITE_RELATIVE_URL + "/collectionSchedule/" + address)
        }
    }
    searchIcon = () => {
        showTableFlag = 1;        
        if (errorFlag == 0) {
            this.setState({
                checkInputresults: "clearBoxNotChecked"
            });
            this.props.getCollectionSchedule(this.state.address, null, this.successCallback);
            this.props.history.push(process.env.REACT_APP_SITE_RELATIVE_URL + "/collectionSchedule/" + this.state.address)
        }
    }
    successCallback = (success) => {
        if(this.props.noResultsError.FormattedAddress){
            this.setState({
                address: this.props.noResultsError.FormattedAddress,
            });
        }
    }
    handleKeyPress = (event) => {
        if (event.keyCode == 32) {
            if(this.state.address.trim().length == 0)
            event.preventDefault();
        }
    }
    collectionScheduleTable() {
        return (<CollectionScheduleTable showTableFlag = {showTableFlag} holidayData={this.props.holidayData} arrayLength={this.props.arrayLength} collectionScheduleData={this.props.collectionScheduleData} />)
    }
    suggestedAddressSelected = (value) => {
        showTableFlag = 1;        
        this.setState({
            address: value,
        });
        this.props.getCollectionSchedule(value);
    }
    correctAddressList = () => {
        return _.map(this.props.suggestionAddress, (value, index) => {
            return (
                <div className="suggestedAddressListItem" key={index} onClick={() => { this.suggestedAddressSelected(value) }}>
                    {value}
                </div>);
        });
    }
    contentHTML = () => {
        if (this.props.collectionScheduleInfo == null && showTableFlag !==0 && this.props.suggestionAddress == null) {
            console.log("In first if")
            return (
                <div className="noOfSearchResults">
                    No search results found
                </div>
            )
        } else if (this.props.suggestionAddress != null || (this.props.suggestionAddress?this.props.suggestionAddress.length > 0:"")) {
            console.log("In Second if")                
            return (
                <div className="errorUserAddressParent">
                    <div className="addressNotFound">
                        The address entered can not be found.
                    </div>
                    <div className="selectFromAddressBelow">
                        Please select from the possible addresses below
                    </div>
                    {this.correctAddressList()}
                </div>
            )
        } else {
            console.log("In third if")    
            if(showTableFlag == 1){
                return (
                    <Row className="collectionScheduleRow">
                    <Col xs={12}>
                        <div style={this.props.collectionScheduleInfo !== null && this.props.suggestionAddress == null && this.props.holidayData ? { display: 'block' } : { display: 'none' }} className="nonServiceDay">
                            Today is holiday. There is no service today!
                    </div>
                    </Col>
                    <div className = "collectionScheduleAddressName">The collection schedule for "{this.props.noResultsError?this.props.noResultsError.FormattedAddress:""}"</div>
                    <Col xs={12} md={8} style={this.props.holidayData ? { display: 'none' } : { display: 'block' }} className="collectionScheduleColumn">
                        {this.collectionScheduleTable()}
                    </Col>
                    <Col xs={12} md={4} style={this.props.holidayData ? { display: 'none' } : { display: 'block' }} className="ridOfCol">
                        <div className={!this.props.holidayData ? "enforcementTitleHoliday" : "enforcementTitleNoHoliday"}>
                            <RoutingTimes showTableFlag = {showTableFlag} collectionScheduleData={this.props.collectionScheduleData} collectionScheduleInfo={this.props.collectionScheduleInfo} routingData={this.props.routingData ? this.props.routingData : ""} />
                        </div>
                    </Col>
                </Row>
                )
            }            
            else{
                return(
                    <Row className = "collectionTableDefaultRow">
                    <Col xs={12} md={8}>
                        <CollectionScheduleDefaultTable />
                    </Col>
                    <Col xs={12} md={4} className = "collectionDefaultCol"> 
                        <Col xs={4} className ="collectionScheduleIcons">
                        <div>
                            <img src={require('../../../content/images/collectionschedule-garbage.svg')} className="garbageIcon" alt="Garbage Icon"/>
                            <div className ="garbageTitle">
                                GARBAGE
                            </div>
                        </div>
                        </Col>
                        <Col xs={4} className ="collectionScheduleIcons">
                        <div>
                            <img src={require('../../../content/images/collectionschedule-recycling.svg')} className="recyclingIcon" alt="Recycling Icon"/>                <div className ="recyclingTypeTitle">
                            <div className ="recycleTitle">
                                RECYCLING
                            </div>
                            </div>
                        </div>
                        </Col>
                        <Col xs={4} className ="collectionScheduleIcons">
                        <div>
                            <img src={require('../../../content/images/collectionschedule-organics.svg')} className="organicsIcon" alt="Organics Icon"/>
                            <div className ="organicsTitle">
                                ORGANICS
                            </div>
                        </div>
                        </Col>
                        <Col xs={12} className = "collectionDefaultText">
                        <div>
                        Please enter your address in the search field above to get the collection schedule. You can also download the DSNY Info app to view schedules and receive reminders.
                        </div>
                        </Col>
                    </Col>
                    </Row>
                )
            }                

        }
    }
    render() {
        const defaultBounds = new window.google.maps.LatLngBounds(
            new window.google.maps.LatLng(40.915568, -73.699215),
            new window.google.maps.LatLng(40.495992, -74.257159));

        const inputProps = {
            onKeyDown: this.handleKeyPress,
            value: this.state.address,
            onChange: this.handleChange,
            placeholder: this.state.placeholder,
            onBlur: this.resetPlaceHolder,
            onFocus: this.setPlaceHolder,
        }
        const cssClasses = {
            root: "placesCollectionSchedule",
            googleLogoContainer: 'googleLogoContainer',
            googleLogoImage: 'googleLogoImage',
            autocompleteItem: 'collectionScheduleItem',
            autocompleteItemActive: 'collectionScheduleActiveItem',
            input: 'collectionSearchInput',
            autocompleteContainer: 'collectionScheduleLanding-autocomplete-container'
        }
        const cssClassesSelected = {
            root: "placesCollectionSchedule",
            googleLogoContainer: 'googleLogoContainer',
            googleLogoImage: 'googleLogoImage',
            autocompleteItem: 'collectionScheduleItem',
            autocompleteItemActive: 'collectionScheduleActiveItem',
            input: 'collectionSearchInput',
            autocompleteContainer: 'collectionScheduleLanding-autocomplete-container'
        }
        const options = {
            strictBounds: true,
            bounds: defaultBounds,
            componentRestrictions: { country: 'us' }
        }
        return (
            <div className="howToGetRidOfParent">
                <Header title='Collection Schedule' breadCrumbList="" />
                <div className="container searchContainerCollection">
                    <Row className="searchRowRidOf">
                        <Col xs={12} md={12} className="searchRidOfParent">
                            <div id="innersquareRidOf">
                                <AddressAutocomplete inputProps={inputProps} options={options} onSelect={this.handleSelect} onEnterKeyDown={this.handleSelect} classNames={this.state.address !== "" ? cssClassesSelected : cssClasses} />
                                <i className="fa fa-times collectionSearch" onClick={() => { this.clearSearchBox() }} style={this.state.address !== "" ? { display: 'block' } : { display: 'none' }} id="collectionSearchResultsClear"></i>
                                <i className="fa fa-search collectionSearch" onClick={this.searchIcon} id="collectionSearchResults"></i>
                            </div>
                        </Col>
                    </Row>
                    {this.contentHTML()}
                </div>
                <DownloadInfoApp />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        noResultsError: state.carouselDataReducer.noResultsError,
        suggestionAddress: state.carouselDataReducer.suggestionAddress,
        collectionScheduleInfo: state.carouselDataReducer.collectionScheduleInfo,
        routingData: state.carouselDataReducer.routingData,
        holidayData: state.carouselDataReducer.holidayData,
        arrayLength: state.carouselDataReducer.arrayLength,
        collectionScheduleData: state.carouselDataReducer.collectionScheduleData,
    }
}

let actionList = {
    getCollectionSchedule: actions.getCollectionSchedule,
};

CollectionSchedule = connect(mapStateToProps, actionList)(CollectionSchedule);
export default CollectionSchedule;
