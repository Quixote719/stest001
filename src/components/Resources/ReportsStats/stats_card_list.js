import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import SubSectionHeader from '../../shared/sub_section_header';
import SubSectionButton from '../../shared/sub_section_button';
import CardTitleBody from '../../shared/Card_title_body';
import {Grid, Row, fluid, Col, Clearfix} from 'react-bootstrap';

class StatsCardList extends Component {

  constructor() {
    super();
    this.firstN = this.firstN.bind(this);
  }

  firstN(obj, n) {

    return _.chain(obj).keys().sort().take(n).reduce(function(memo, current) {
      memo[current] = obj[current];
      return memo;
    }, {}).value();
  }

  renderPosts(cards) {
    return _.map(this.firstN(cards, 4), Item => {
      return (<CardTitleBody className='NBsubSectioncardTB' title={Item.title} body={Item.content} key={Item.id}/>);
    });
  }

  ViewAllButton(l) {
    if (l > 4) {
      return (<SubSectionButton title='VIEW ALL'/>);
    } else {
      return null;
    }

  }

  render() {

    const {sc, n} = this.props;

    if (_.isEmpty(sc)) {
      return (
        <div></div>
      );
    }

    return (
      <div >
        <div>
          <SubSectionHeader title='Recycling and Garbage Statistics'/>
          <Row className='nopadding'>
            {this.renderPosts(sc)}
          </Row>
          {this.ViewAllButton(n)}
        </div>
      </div>
    );
  }
}

StatsCardList.propTypes = {
  sc: PropTypes.array.isRequired,
  n: PropTypes.string.isRequired
};

export default StatsCardList;