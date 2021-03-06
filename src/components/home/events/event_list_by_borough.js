import _ from "lodash";
import React, {Component} from "react";
import LazyLoad from 'react-lazyload';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {fetchEventSubList} from "../../../actions/actions_home";
import {Grid, Row, Col, Pagination, Clearfix} from 'react-bootstrap';
import moment from 'moment';
import EventListItem from './event_list_item';
import EventListBoroughDropdown from './event_list_borough_dropdown'

// Set initial state
let PressReleaseListstate = {
  year: 'All boroughs',
  activePage: 1
};

class DSNYEvents extends Component {

  componentDidMount() {
    // window.scrollTo(0, 0);
    const {id} = this.props
    const {year} = this.state
    // this.props.fetchPressReleaseList(year);
    this.props.fetchEventSubList('');
  }
  constructor(props) {
    super(props);
    // Retrieve the last state
    this.state = PressReleaseListstate;

    this.fetchEvents = this.fetchEvents.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({activePage: eventKey});
  }

  componentWillUnmount() {
    // Remember state for the next mount
    PressReleaseListstate = this.state;
  }

  // checkExceedLimit (props) {
  //   exceedLimit = 0;
  //   props.items.map((item) => {
  //       var dateLimit = moment(item.limit)
  //       var now = moment()
  //       if (item.limit != null || item != ' ' && now.isAfter(dateLimit) ) {
  //           exceedLimit++;
  //           console.log(now)
  //           console.log(dateLimit)
  //       }
  //   })
  // }

  renderPosts(eventData) {
    return _.map(eventData, eventItem => {
      // let exceedLimit = 0;
      // var dateLimit = moment(eventItem.ToDateTime)
      // var now = moment();
      // if (eventItem.ToDateTime != null || eventItem != ' ' && now.isAfter(dateLimit) ) {
      //   exceedLimit++;
      //   console.log(now)
      //   console.log(dateLimit)
      // }
      return (
        /* Lazyload - The component will be loaded when it's top edge is 150px from viewport. It's useful to make user ignorant about lazy load effect. */
        <LazyLoad height={140} once={true} offset={0} debounce={100} key={eventItem.EventID}>
          <EventListItem eventid={eventItem.EventID} description={eventItem.Description} title={eventItem.EventName} boro={eventItem.BoroughShortName} date={eventItem.EventDate} key={eventItem.EventID} />
        </LazyLoad>
      );
    });
  }

  fetchEvents(year) {
    this.setState({year: year});
    //this.props.fetchEventSubList(year);
    year = (year === 'All boroughs')? '' : year;
    this.props.fetchEventSubList(year);
  }

  render() {

    const {eventData} = this.props;
    return (
      <div>
        <div className="GBanner">
          <div>
            <div className="BreadcrumbList">
              <div className="container">                  
                  <ol role="navigation" aria-label="breadcrumbs" className="breadcrumb">
                    <span className='fa fa-angle-left'></span>
                    <li className=""><Link to={process.env.REACT_APP_SITE_RELATIVE_URL + "/home"}>Home</Link></li>
                    <li className=""></li>
                  </ol>
              </div>
            </div>
            <div className="BreadcrumbHeaderTitleSection BreadcrumbTitleContainer">
              <div className="container">DSNY Events</div>
            </div>
        </div>
      </div>

        <div className='container'>
          <EventListBoroughDropdown selectedOption={this.state.year} ondropDownChange={this.fetchEvents}/>
          <div>{this.renderPosts(eventData)}</div>
        </div>
      </div>

    );
  };
};

// function mapStateToProps({
//   PressRelease
// }, ownProps) {
//   return {prl: PressRelease.pressRelease.list};
// }

// export default connect(mapStateToProps, {fetchPressReleaseList})(DSNYEvents);

function mapStateToProps(state) {
  return {eventData: state.carouselDataReducer.EventsSubList};
}

export default connect(mapStateToProps, {fetchEventSubList})(DSNYEvents);
