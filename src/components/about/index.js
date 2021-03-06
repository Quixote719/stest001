import React, { Component } from 'react';
import Banner from '../shared/banner';
import * as actions from '../../actions/actions_about';
import PageText from '../shared/PageText';
import LeadershipSection from './LeadershipSection';
import LocationsSection from './LocationsSection';
import OperationsSection from './OperationsSection';
import StrategicPlanSection from './StrategicPlanSection';
import BureausSection from './BureausSection';
import FoundationSection from './FoundationSection';
import _ from "lodash";
import '../../content/styles/About.css';
import { connect } from 'react-redux';

class About extends Component {
  constructor(props, context) {
    super(props, context);
    this.componentWillMount = this.componentWillMount.bind(this);
  }
  componentWillMount() {
    this.props.About();
  }


  render() {

      let About;
      let BannerText = {};
      let PageExplanation = {};
      let LeadershipProps = {};
      let BureausProps = {};
      let StrategicPlanProps = {};
      let FoundationProps = {};
      let LocationProps = {};
      let OperationProps = {};


    this.parseAboutData(About, BannerText, PageExplanation, LeadershipProps, BureausProps, StrategicPlanProps,
     FoundationProps, LocationProps, OperationProps);

     let Aboutcontent = _.isEmpty(BannerText) || _.isEmpty(PageExplanation) || _.isEmpty(LeadershipProps) || _.isEmpty(BureausProps) || _.isEmpty(StrategicPlanProps)
     || _.isEmpty(FoundationProps) || _.isEmpty(LocationProps) || _.isEmpty(OperationProps);
      return (
        !Aboutcontent &&
        <div className = 'aboutPage'>
          <Banner text = {BannerText}/>
          <div className = 'SContainer'>
            <PageText PageExplanation = {PageExplanation} />
            <LeadershipSection title = 'Leadership' LeadershipProps = {LeadershipProps}/>
          </div>
          <div className = 'greyBcg'>
            <div className = 'SContainer'>
              <BureausSection BureausProps = {BureausProps}/>
            </div>
          </div>
          <div className = 'SContainer'>
             <StrategicPlanSection StrategicPlanProps = {StrategicPlanProps}/>
          </div>
          <div className = 'greyBcg boxPaddingBtm'>
            <div className = 'SContainer'>
             <FoundationSection FoundationProps={FoundationProps}/>
            </div>
          </div>
            <LocationsSection LocationProps = {LocationProps}/>
          <div className = 'greyBcg boxPaddingBtm bottomSection'>
            <div className = 'SContainer'>
              <OperationsSection OperationProps = {OperationProps}/>
            </div>
          </div>
        </div>
      )
    }

    parseAboutData(About, BannerText, PageExplanation, LeadershipProps, BureausProps, StrategicPlanProps,
     FoundationProps, LocationProps, OperationProps){
      if(this.props.AboutData !== undefined){
              About = this.props.AboutData.data;
      }

      if(About !== undefined && About.sections != undefined){
        BannerText.title = About.header;
        BannerText.content = About.header_content;

              _.map(About.sections.sections, item =>{
                    switch (item.name){
                      case 'about-top':{
                        PageExplanation.content = item.content;
                        break;
                      }
                      case 'about-leadership':{
                        LeadershipProps.title = item.header;
                        LeadershipProps.content = item.content;
                        LeadershipProps.ProfileUrl = item.featured_image.base_path + item.featured_image.file;
                        break;
                      }
                      case 'about-bureaus':{
                        BureausProps.title = item.header;
                        BureausProps.cards = item.cards.slice(0, 6);
                        BureausProps.CardType = item.card_data.card_type;
                        break;
                      }
                      case 'about-strategic-plan':{
                        StrategicPlanProps.title = item.header;
                        StrategicPlanProps.content = item.content;
                        break;
                      }
                      case 'about-foundation':{
                        FoundationProps.title = item.header;
                        FoundationProps.content = item.content;
                        FoundationProps.cards = item.cards;
                        break;
                      }
                      case 'about-locations':{
                        LocationProps.image = item.featured_image.base_path + item.featured_image.file;
                        LocationProps.content = item.content;
                        break;
                      }
                      case 'about-going-green':{
                        OperationProps.title = item.header;
                        OperationProps.content = item.content;
                        OperationProps.cards = item.cards;
                        break;
                      }
                      default:{
                        break;
                      }
                    }
                });
          }
      }
}

function mapStateToProps(state) {
  return {
    AboutData: state.AboutDataReducer.AboutData,
  }
}

let actionList = {
  About: actions.About,
};

About = connect(mapStateToProps, actionList)(About);

export default About;
