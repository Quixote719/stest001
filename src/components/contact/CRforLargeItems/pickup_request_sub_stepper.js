import _ from "lodash";
import React, {Component} from "react";
import {Col} from 'react-bootstrap';
import {connect} from "react-redux";
import {PickupReqGetItemSubCategories} from "../../../actions/contact_forms";
import FormStepper from '../form_stepper'

class RequestSubStepper extends Component {

	constructor(props) {
		super(props);
		this.renderCatg = this.renderCatg.bind(this);
	};


	renderCatg(ItemSubCatg) {
		if (ItemSubCatg)
			return _.map(ItemSubCatg, Item => {
				return (<div key={Item.SubCategory}><FormStepper subCat="subCat" total='99'  maxValue='99' obj={Item} disabled={this.props.disabled} onIncDec={this.props.onIncDec} title={Item.SubCategory}/></div>);
			});
		}

	render() {
		return (<div>
			{this.renderCatg(this.props.subCat)}
		</div>);
	}
}

function mapStateToProps(state) {
	return {ItemSubCatg: state.forms.eWastePickupreqSubCatgItems, error: state.error.type,};
}

export default connect(mapStateToProps, {PickupReqGetItemSubCategories})(RequestSubStepper);
