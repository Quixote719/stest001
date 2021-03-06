import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-bootstrap';
import * as actions from '../../../actions/actions_home';
import { connect } from 'react-redux';
import month from 'month';
import styles from '../../../content/styles/home.css';
import { Grid, Row, Col } from 'react-bootstrap';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
import _ from "lodash";
import {Link} from "react-router-dom";
import { Swipeable, defineSwipe } from 'react-touch';
const swipe = defineSwipe({ swipeDistance: 50 });

class CarouselData extends Component {
    constructor(props, context) {
        super(props, context);
        var date = new Date();
        var dateCarouselPanel = ("0" + date.getDate()).slice(-2);
        var monthCarouselPanel = month('MMM').toUpperCase();
        this.state = {
            dateCarouselPanel: dateCarouselPanel,
            monthCarouselPanel: monthCarouselPanel,
        };
    }

    carouselDataItemList() {
        return _.map(this.props.carouselItems, item => {
            if(item.name == "home-hero-section"){
                return _.map(item.cards, (item,index) =>{
                    return (
                        <Carousel.Item key={index}>
                            <img src={item.featured_image.base_path + item.featured_image.file} alt={item.featured_image.title}/>
                        </Carousel.Item>
                    );
                })
            }
        });
    }
    carouselPanelDataItemList() {
        if(this.props.carouselPanelItems != undefined)
        {
            return _.map(this.props.carouselPanelItems, (item, index) => {
                return (
                    <div className="panelData" key={index}>
                        <div className="border-top"></div>
                        <div className="programImage"><img src={item.panelItemIcon} alt={item.panelItemType}/></div>
                        <div className="detailsProgram">{item.panelItemType}</div>
                        <div className="statusProgram">{item.panelItemStatus}</div>
                    </div>
                );
            });
        }
        else
        {
            return _.map(this.props.carouselPanelItemsTemporary, (item, index) => {
                return item.map(function (item, index) {
                    return (
                        <div className="panelData" key={index}>
                            <div className="border-top"></div>
                            <div className="programImage"><img src={item.panelItemIcon} alt={item.panelItemType}/></div>
                            <div className="detailsProgram">{item.panelItemType}</div>
                            <div className="statusProgram">{item.panelItemStatus}</div>
                        </div>
                    );
                })
            });
        }
    }
    goRight() {
        let anchorObj = document.getElementsByClassName("carousel-control right")[0];
        if (anchorObj.click) {
            anchorObj.click()
          } else {
              var evt = document.createEvent("MouseEvents"); 
              evt.initMouseEvent("click", true, true, window, 
                  0, 0, 0, 0, 0, false, false, false, false, 0, null); 
              var allowDefault = anchorObj.dispatchEvent(evt);
        }
    }
    goLeft() {
        let anchorObj = document.getElementsByClassName("carousel-control left")[0];
        if (anchorObj.click) {
            anchorObj.click()
          } else {
              var evt = document.createEvent("MouseEvents"); 
              evt.initMouseEvent("click", true, true, window, 
                  0, 0, 0, 0, 0, false, false, false, false, 0, null); 
              var allowDefault = anchorObj.dispatchEvent(evt);
        }
    }
    render() {
        if (window.innerWidth >= 1366){
            return (
                <div className="carouselContainerParent ">
                    <div className="container carouselContainer">
                        <ul className="carouselLeftPanel">
                            <li className="statusTitle">
                                TODAY
                            </li>
                            <li className="dateMonthCarousel">
                                <div className="dateMonthCarousel">
                                    <div className="dateCarouselPanel">
                                        {this.state.monthCarouselPanel}
                                    </div>
                                    <div className="monthCarouselPanel">
                                        {this.state.dateCarouselPanel}
                                    </div>
                                </div>
                            </li>
                            <li className="programsList">
                                {this.carouselPanelDataItemList()}
                            </li>
                            <li>
                                <a href="http://www1.nyc.gov/311/index.page#status"><button className="panelButton">More</button></a>
                            </li>
                        </ul>
                        <div className="carouselParentBoxShadow">
                        </div>
                            <Carousel className="newsEventsCarousel" prevIcon={<span className="newsEventsCarouselIcon">
                                <img src='http://www1.nyc.gov/assets/home/images/global/heroleft5.svg' alt="carouselleftArrow" />
                            </span>} nextIcon={<span className="newsEventsCarouselIcon">
                                <img src='http://www1.nyc.gov/assets/home/images/global/heroright5.svg' alt="carouselRightArrow" />
                            </span>}>
                                {this.carouselDataItemList()}
                            </Carousel>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div className="carouselContainerParent ">
                    <div className="container carouselContainer">
                        <ul className="carouselLeftPanel">
                            <li className="statusTitle">
                                TODAY
                            </li>
                            <li className="dateMonthCarousel">
                                <div className="dateMonthCarousel">
                                    <div className="dateCarouselPanel">
                                        {this.state.monthCarouselPanel}
                                    </div>
                                    <div className="monthCarouselPanel">
                                        {this.state.dateCarouselPanel}
                                    </div>
                                </div>
                            </li>
                            <li className="programsList">
                                {this.carouselPanelDataItemList()}
                            </li>
                            <li>
                                <a href="http://www1.nyc.gov/311/index.page#status"><button className="panelButton">More</button></a>
                            </li>
                        </ul>
                        <div className="carouselParentBoxShadow">
                        </div>
                        <Swipeable config={swipe} onSwipeLeft={this.goRight} onSwipeRight={this.goLeft}>
                            <Carousel className="newsEventsCarousel" prevIcon={<span className="newsEventsCarouselIcon">
                                <img src='http://www1.nyc.gov/assets/home/images/global/heroleft5.svg' alt="carouselleftArrow" />
                            </span>} nextIcon={<span className="newsEventsCarouselIcon">
                                <img src='http://www1.nyc.gov/assets/home/images/global/heroright5.svg' alt="carouselRightArrow" />
                            </span>}>
                                {this.carouselDataItemList()}
                            </Carousel>
                        </Swipeable>
                    </div>
                </div>
            )
        }

    }
}

export default CarouselData;
 