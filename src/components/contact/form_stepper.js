import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import { Col, Tooltip} from 'react-bootstrap';

var categoryTotal = 0;
var subCategoryTotal = 0;
var fieldTotal = 0;

class FormStepper extends Component {

    constructor(props) {
      super(props);
      this.state =  {
        count: props.obj.RequestedQty,
        object:props.obj,
        hideToolTip: true,
        showToolTip: props.showToolTip,
      }
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.onInputChange = this.onInputChange.bind(this);
    };


    getCategoryTotal()
    {
      var inputs = Array.from(document.querySelectorAll('#form input.incDecField'));
      let total = 0;
      inputs.forEach(input => {
          total +=  parseInt(input.value, 10);

      });
      categoryTotal = total;
      return categoryTotal;
    }

    getSubCategoryTotal()
    {
      var inputs = Array.from(document.querySelectorAll('#form input.incDecSubField'));
      let total = 0;
      inputs.forEach(input => {
          total +=  parseInt(input.value, 10);
      });
      subCategoryTotal = total;
      return subCategoryTotal;
    }


    increment(){
      var {count, object} = this.state
      var i = count;
      if(this.props.subCat){
        if(this.getSubCategoryTotal() < this.props.maxValue){
          i = count += 1
          object.RequestedQty = i
       this.setState({count:i , object:object},()=>{this.props.onIncDec(object)});
    }
  } else if(this.getCategoryTotal() + this.getSubCategoryTotal() < this.props.total && i <= this.props.maxValue){
     i = count += 1
     object.RequestedQty = i
     this.setState({count:i , object:object},()=>{this.props.onIncDec(object)});
   }

    }

    decrement() {
      var {count, object} = this.state
      var i = count;
      if(this.props.subCat){
        i = count > 0 ? count -= 1 : 0
        object.RequestedQty = i
        if(this.getSubCategoryTotal() <= this.props.maxValue){
       this.setState({count:i , object:object},()=>{this.props.onIncDec(object)});
     }
   }else if(this.getCategoryTotal() + this.getSubCategoryTotal() <= this.props.total && i <= this.props.maxValue){
      i = count > 0 ? count -= 1 : 0
     object.RequestedQty = i
       this.setState({count:i, object:object},()=>{this.props.onIncDec(object)});
   }
    }

    onBlur(e) {
     this.setState({hideToolTip: true});
      if (e === '') this.setState({count:0});
    }

    onInputChange(e) {

        var {object} = this.state

        if(!isNaN(e) && parseInt(e,10)  && (parseInt(e, 10) > this.props.maxValue || ((this.props.subCat?  this.getSubCategoryTotal(): this.getCategoryTotal())> this.props.maxValue) || this.getCategoryTotal() + this.getSubCategoryTotal() > this.props.total))
        {
          object.RequestedQty = 0
          this.setState({count:0,hideToolTip: false},()=>{this.props.onIncDec(this.state.object)});
        }
        else if(!isNaN(e) && parseInt(e,10))
        {
          object.RequestedQty = parseInt(e, 10)
          this.setState({count:parseInt(e, 10), hideToolTip: true},()=>{this.props.onIncDec(this.state.object)});
        }
        else
        {
          object.RequestedQty = 0
          this.setState({count:''},()=>{this.props.onIncDec(this.state.object)});
        }
    }

    renderItem(){

      if (this.props.disabled && this.props.header){
        if (this.props.hasSubCategory){
          return (
          <div className='FormStepper'>
            <Col xs={12}><div className='incDecFieldtext'>{this.props.title}</div></Col>
            <Col xs={12}><div className='incDecFieldbody'>{this.props.body}</div></Col>
            <Col xs={12} className='hairline'></Col>
          </div>
          );
        }
        return (  <div></div>);
      }

      if (this.props.disabled && this.state.count > 0){
        return (
        <div className='FormStepper'>
          <Col xs={10} sm={10} md={10}><div className={this.props.subCat ? 'incDecSubFieldtext':'incDecFieldtext'}>{this.props.subCat ? `\u2022 ${this.props.title}`:`${this.props.title}`}</div></Col>
            <Col className='FormStepperNoEdit' xs={2}>{this.state.count}</Col>
              <Col xs={10}><div className={this.props.subCat ? 'incDecSubFieldbody':'incDecFieldbody'}>{this.props.body}</div></Col>
                <Col xs={2}></Col>
          <Col xs={12} className='hairline'></Col>
        </div>
        );
      }else if (this.props.disabled && this.state.count === 0){
        return(<div></div>)
      }

      if (this.props.header){

        return (
        <div className='FormStepper'>
          <Col xs={12}><div className='incDecFieldtext'>{this.props.title}</div></Col>
            <Col xs={12}><div className='incDecFieldbody'>{this.props.body}</div></Col>
          <Col xs={12} className='hairline'></Col>
        </div>
        );
      }
      return (

        <div className='FormStepper'>
          <Col xs={6} sm={8} md={8}><div className={this.props.subCat ? 'incDecSubFieldtext':'incDecFieldtext'}>{this.props.subCat ? `\u2022 ${this.props.title}`:`${this.props.title}`}</div></Col>
          <Col className='FormFieldIncDec' xs={6} sm={4} md={4}>
          <div className='MarnageIncDec'>
            <div className='decrement' onClick={this.decrement}></div>
            <input aria-label={this.props.title} className={this.props.subCat ? 'incDecSubField':'incDecField'} onChange={event => this.onInputChange(event.target.value)}  value={this.state.count} onBlur={event => this.onBlur(event.target.value)} />
            {!this.state.hideToolTip && fieldTotal > this.props.maxValue && <Tooltip placement="bottom" id="tooltip-bottom" className={"in"}>{this.props.subCat ? `You can not enter more than ${this.props.maxValue} Items`:`You can not enter more than ${this.props.maxValue} Items `}</Tooltip>}
            <div className='increment' onClick={this.increment}></div>
          </div>
          </Col>
          <Col xs={6}><div className='incDecFieldbody'>{this.props.body}</div></Col>
            <Col xs={6}></Col>
          <Col xs={12} className='hairline'></Col>
        </div>
      );
    }

    render(){
      return (
        <div>
          {this.renderItem()}
        </div>
      );
    }
  }

FormStepper.propTypes = {
  title: PropTypes.string,
  obj:PropTypes.any,
  header: PropTypes.bool,
  maxValue:PropTypes.any
};

export default FormStepper;
