import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchEventSubList} from "../../../actions/actions_home";
import SubSectionHeader from '../../shared/sub_section_header';
import SubSectionButton from '../../shared/sub_section_button';
import EventListItem from './event_list_item';

class Event extends Component {
  componentDidMount() {
    this.props.fetchEventSubList('');
  }

  constructor() {
    super();
    this.firstN = this.firstN.bind(this);
  }

  renderPosts(pr) {
    return _.map(this.firstN(pr, 3), eventItem => {
      return (<EventListItem eventid={eventItem.EventID} description={eventItem.Description} title={eventItem.EventName} boro={eventItem.BoroughShortName} date={eventItem.EventDate} key={eventItem.EventID}/>);
    });
  }

  firstN(obj, n) {
    return _.chain(obj).keys().take(n).reduce(function(memo, current) {
      memo[current] = obj[current];
      return memo;
    }, {}).value();
  }

  ViewAllButton(l) {
    if (l >= 3) {
      // return (<SubSectionButton title='MORE EVENTS' onClick={this._reroute}/>);
      return (


              <div className="moreEventsBtnDiv">
                <Link to={process.env.REACT_APP_SITE_RELATIVE_URL + "/dsnyevents"}>
                  <SubSectionButton title='MORE EVENTS'/>
                </Link>
              </div>

      );
    } else {
      return null;
    }

  }
  _reroute() {
    console.log('re routing this module to a sub module');
  }

  render() {

    const {pr} = this.props;

    if (_.isEmpty(pr)) {
      return (
        <div></div>
      );
    }

    return (
      <div>
        <SubSectionHeader title="DSNY Events"/>
        <div className='eventhairline'></div>
        <div>{this.renderPosts(pr)}</div>

        {this.ViewAllButton(_.size(pr))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {pr: state.carouselDataReducer.EventsSubList};
}

export default connect(mapStateToProps, {fetchEventSubList})(Event);
