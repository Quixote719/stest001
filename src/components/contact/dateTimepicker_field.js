import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';
import Datetime from 'react-datetime';
import '../../content/styles/subSectionHeader.css';
import '../../content/styles/react-datetime.css';

class FormDateTimePicker extends Component {

  constructor(props) {
    super(props);
  }
  onInputChange(term) {}
  renderOptions(options) {
    return _.map(options, Item => {
      return (
        <div>
          <input type="checkbox" id={Item.id} name={Item.name} value={Item.name}/>
          <label for="coding">{Item.DisplayName}</label>
        </div>
      )
    });
  }

  renderInput(inputProps) {
    debugger;
    return (
      <div class="inner-addon right-addon">
        <i class="glyphicon glyphicon-search"></i>
        <input { ...inputProps }/>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Col className='FormField' xs={12} sm={6} md={6}>
          <fieldset>
            <div className='FormMultiSelectTitle'>{this.props.title}</div>
            <Datetime closeOnSelect timeFormat={false} renderInput={this.renderInput}/>
          </fieldset>

        </Col>
      </div>
    );
  };
};

FormDateTimePicker.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string
};

export default FormDateTimePicker;
