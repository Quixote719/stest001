import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../../../content/styles/home.css';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class DownloadApp extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {

        return (
            <div className = "downloadAppContainerParent">
                <div className="container downloadAppContainer">
                    <div className="downloadAppTitle">
                        Download DSNY Info app
                    </div>
                    <Row className="downloadAppRow">
                        <Col xs={12} sm={6} className="downloadAppCol">
                            <div>
                                <div className="downloadInfoPart1">
                                    The official app for the NYC Department of Sanitation provides service reminders and updates – plus special event schedules and tips to reduce, reuse and recycle waste.
                                </div>
                                <div className="downloadInfoPart2">
                                    DSNY is also responsible for cleaning the City’s streets, sidewalks, and vacant lots, and in the winter, is responsible for clearing the snow and ice from approximately 6,000 miles of City streets.
                                </div>
                                
                                    <div className = "appStoreIconDiv">
                                        <span className = "iosAppStoreSpan">  
                                            <Link to="https://itunes.apple.com/us/app/dsny-info/id1139303678?mt=8" target="_blank">                        
                                                <img src={require('../../../content/images/Appstore.png')} className="AppstoreIcon" alt="Apple Store Icon"/>   
                                            </Link>                               
                                        </span>
                                        <span>   
                                            <Link to="https://play.google.com/store/apps/details?id=gov.nyc.dsny.dsny&hl=en" target="_blank">                    
                                                <img src={require('../../../content/images/Playstore.png')} className="PlaystoreIcon" alt="Play Store Icon"/> 
                                            </Link>                         
                                        </span>
                                    </div>
                             
                            </div>
                        </Col>
                        <Col xs={12} sm={6} className="downloadAppCol1">
                            
                                <div>
                                    <img src={require('../../../content/images/App_preview.png')} className="downloadAppIcon" alt="Download App Icon"/>
                                </div>

                        </Col>

                    </Row>
                </div>
            </div>

        )
    }
}

export default DownloadApp;
