import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EventList from './Events/event_list';
import CarouselData from './Carousel/index';
import SearchCards from './Search_Cards/index';
import ProgramCards from './Program_Cards/index';
import ProgramInitiatives from './Program_Initiatives/index';
import DownloadApp from './download_dsny_app/index';
import * as actions from '../../actions/actions_home';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props, context) {
    super(props, context);
  }
  componentWillMount(){
    this.props.carouselData();    
  }
  render() {
    return (
      <div>
        <div className="GBanner">
          <CarouselData carouselItems={this.props.carouselItems}/>
        </div>
          <SearchCards />
          <ProgramCards carouselItems={this.props.carouselItems}/>
          <ProgramInitiatives carouselItems={this.props.carouselItems}/>
        <div className="container">
          <EventList />
        </div>
          <DownloadApp />
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
      carouselItems: state.carouselDataReducer.carouselItems,
  }
}

let actionList = {
  carouselData: actions.carouselData,
};

Home = connect(mapStateToProps, actionList)(Home);
export default Home;
