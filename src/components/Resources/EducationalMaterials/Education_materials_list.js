import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import EducationSectionHeader from './education_material_header';
import SubSectionButton from '../../shared/sub_section_button';
import CardTitleBody from '../../shared/Card_title_body';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';

class EducationalMaterialsList extends Component {

  constructor() {
    super();
    this.firstN = this.firstN.bind(this);
  }

  firstN(obj, n) {
    return _.chain(obj).keys().take(n).reduce(function(memo, current) {
      memo[current] = obj[current];
      return memo;
    }, {}).value();
  }

  renderPosts(cards) {
    return _.map(this.firstN(cards, 4), Item => {
      return (<CardTitleBody className='subSectioncardTB' title={Item.title} body={Item.content} key={Item.id}/>);
    });
  }

  render() {

    const {promotional, title, src, body} = this.props;

    if (_.isEmpty(promotional)) {
      return (
        <div></div>
      );
    }

    return (
      <div>
        <EducationSectionHeader title={title} body={body} src={src}/>
        <div className='container'>
          <Row>
            {this.renderPosts(promotional)}
          </Row>
          <SubSectionButton title='VIEW ALL'/>
        </div>
      </div>
    );

  }
}

EducationalMaterialsList.propTypes = {
  promotional: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default EducationalMaterialsList;
