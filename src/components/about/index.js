import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Banner from '../shared/banner';
import RoundProfile from '../shared/RoundProfile';
import * as actions from '../../actions/actions_about';
import CardTitle from '../shared/Card_title';
import TitleCard from '../shared/TitleCard';
import SubSectionHeader from '../shared/sub_section_header';
import Leadership from './Leadership';
import Locations from './Locations';
import Operations from './Operations';
import StrategicPlan from './StrategicPlan';
import Bureaus from './Bureaus';
import Foundation from './Foundation';
import LargeContentCard from '../shared/LargeContentCard';
import TitleContentCard from '../shared/TitleContentCard';
import '../../content/styles/About.css';
import { connect } from 'react-redux';

class About extends Component {
  constructor(props, context) {
    super(props, context);
    this.componentWillMount = this.componentWillMount.bind(this);
  }
  componentWillMount() {
    this.props.About();
    this.props.AboutSections();
  }
  render() {
      let AboutSections = this.props.AboutSectionsData.data;
      let About = this.props.AboutData.data;
      let BannerText = {};
      let LeadershipProps = {};
      let BureausTitle = '';
      let BureausCards = [];
      let LocationProps = {};
      let StrategicPlanProps = {};
      let FoundationProps = {};
      let OperationProps = {};


      console.log('AboutSections');
      console.log(AboutSections);
      console.log('About');
      console.log(About);

      if(About != undefined){
        BannerText = {
                      title: About.header,
                      content: About.content
                     };
        About.sections.sections.map((item)=>{
            switch (item.name){
              // case 'about-top':{
              //   BannerText = {title: item.header,
              //   content: item.content};
              //   break;
              // }
              case 'about-leadership':{
                LeadershipProps.title = item.header;
                LeadershipProps.content = item.content;
                LeadershipProps.ProfileUrl = item.image.file;
                console.log('LeadershipProps');
                console.log(LeadershipProps);
                break;
              }
              case 'about-bureaus':{
                BureausTitle = item.header;
                BureausCards = item.cards;
                break;
              }
              case 'about-strategic-plan':{
                StrategicPlanProps = {title: item.header, content: item.content};
                console.log('StrategicPlanProps');
                console.log(StrategicPlanProps);
                break;
              }
              case 'foundation':{
                FoundationProps.title = item.header;
                FoundationProps.content = item.content;
                FoundationProps.cards = item.cards;
                break;
              }
              case 'about-locations':{
                LocationProps.image = item.image.file;
                console.log('image');
                console.log(LocationProps.image);
                break;
              }
              case 'operations':{
                OperationProps.title = item.header;
                OperationProps.content = item.content;
                break;
              }
            }
        });
      }


      return (
        <div>
          <Banner text = {BannerText}/>
          <div className = 'SContainer'>
            <Leadership title = 'Leadership' LeadershipProps = {LeadershipProps}/>
          </div>
          <div className = 'greyBcg'>
            <div className = 'SContainer'>
              <Bureaus cards = {BureausCards}/>
            </div>
          </div>
          <div className = 'SContainer'>
             <StrategicPlan StrategicPlanProps = {StrategicPlanProps}/>
          </div>
          <div className = 'greyBcg'>
            <div className = 'SContainer'>
             <Foundation FoundationProps = {FoundationProps}/>
            </div>
          </div>
            <Locations LocationProps = {LocationProps}/>
          <div className = 'greyBcg'>
            <div className = 'SContainer'>
              <Operations OperationProps = {OperationProps}/>
            </div>
          </div>
        </div>
      )
    }
}

function mapStateToProps(state) {
  return {
    AboutData: state.AboutDataReducer.About.AboutData,
    AboutSectionsData: state.AboutDataReducer.About.AboutSectionsData
  }
}

let actionList = {
  About: actions.About,
  AboutSections: actions.AboutSections
};

About = connect(mapStateToProps, actionList)(About);

export default About;
