import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

//Actions
import {fetchLandinPageDetails} from "../../actions";

//Sub Components
import Header from '../shared/Breadcrumb/breadcrumb_container'
import PressRelease from './PressReleases/press_release_list'
import ReportCardList from './ReportsStats/report_card_list'
import StatsCardList from './ReportsStats/stats_card_list'
import LawsList from './Laws/Laws_list'
import EducationalMaterialsList from './EducationalMaterials/Education_materials_list'
import TestForm from '../contact'
import StepForm from '../contact/stepform'
import {compostFormObject, compostFormTitles as Titles} from '../contact/titles'
class ResourcesContainer extends Component {


  componentDidMount() {
    this.props.fetchLandinPageDetails('resources');
  }

  render() {
    const {resources} = this.props;
    return (<div>
      <div>{this.renderPage(resources)}</div>
    </div>);
  };

  renderPage(resources) {

    return _.map(resources, prItem => {

      let banner;
      if (prItem.tilte != '') {
        banner = (<div key={prItem.id}>
          <Header title={prItem.title} breadCrumbList={prItem.breadcrumb} body={prItem.header_content}/>
        </div>)
      }

      var sections = _.map(prItem.sections.sections, sec => {

        let pressReleaseSubList;
        if (sec.name == 'resources-press-releases' && sec.cards.length > 0) {
          pressReleaseSubList = (<div className='SContainer'>
            <PressRelease pr={sec.cards} n={sec.card_data.card_count} maxCards={sec.card_data.max_cards}/>
          </div>)
        }

        let ReportsSubList;
        if (sec.name == 'resources-reports' && sec.cards.length > 0) {
          ReportsSubList = (<div className='greyBcg'>
            <div className='SContainer'>
              <ReportCardList rc={sec.cards} n={sec.card_data.card_count}/>
            </div>
          </div>)
        }

        let StatisticsSubList;
        if (sec.name == 'resources-recycling-and-garbage-statistics' && sec.cards.length > 0) {
          StatisticsSubList = (<div className='greyBcg'>
            <div className='SContainer'>
              <StatsCardList sc={sec.cards} n={sec.card_data.card_count}/>
            </div>
          </div>)
        }

        let Laws;
        if (sec.name == 'laws' && sec.cards.length > 0) {
          Laws = (<div className='SContainer'>
            <LawsList laws={sec.cards} n={sec.card_data.card_count}/>
          </div>)
        }

        let EducationalMaterialsSubList;
        if (sec.name == 'resources-educational-materials' && sec.cards.length > 0) {
          EducationalMaterialsSubList = (<div>
            <EducationalMaterialsList promotional={sec.cards} title={sec.header} 
            body={sec.content} src={`${sec.featured_image.base_path}${sec.featured_image.file}`}/>
            </div>)
        }

        return (<div key={sec.id}>
          <div>{pressReleaseSubList}</div>
          <div>{ReportsSubList}</div>
          <div>{StatisticsSubList}</div>
          <div>{Laws}</div>
          <div>{EducationalMaterialsSubList}</div>
        </div>);
      })

      return (<div key={prItem.id}>
        <div>{banner}</div>
        
        <div>{sections}</div>
        <div className="footer-resources"></div>
      </div>)
    });
  }
};

function mapStateToProps(state) {
  return {resources: state.resources.landing};
}

export default connect(mapStateToProps, {fetchLandinPageDetails})(ResourcesContainer);
