import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import styles from '../../../content/styles/newsListItem.css';
import moment from 'moment';
import Truncate from 'react-truncate';
import Parser from 'html-react-parser';

class NewsListItem extends Component {

    render() {
        return (
            <div>
                {this.NewsList()}
                {this.mobileNewsList()}
            </div>
        );
    }

  
    //To display News details on Desktop and Tablet Landscape
    NewsList()
    {
        //To display Top News Image on Desktop and IPAD Landscape .  alignright class is aligning this card to the right
        if (this.props.itemCounter === 0) {
            return (
            <Col xs={12} sm={6} md={6} className='alignright newsDesktopSection'>
                <div className='newsSectiondDefaultcardTI'>
                <div className='defaultcardImage' style={{
                    backgroundImage: `url(${this.props.image})`
                }}></div>
                </div>
            </Col>
            );
        }
        //To display Top News Details with Title & Description on Desktop and IPAD Landscape
        else if (this.props.itemCounter === 99) {
            return (
            <Col xs={12} sm={6} md={6} className='alignright newsDesktopSection'>
                <div className='newsSectioncardTI'>
                <div className='defaultcardImage newscardTitle'>
                    <div className='newscardTitleDate'>{moment(this.props.date).format('MMMM D, YYYY')}</div>
                   <Link to={process.env.REACT_APP_SITE_RELATIVE_URL + `${this.props.linkTo}`}> <div className='newsDefaultcardTitleText'>{this.props.title}</div></Link>
                    <div className='newscardDescription'>
                        <Truncate lines={3}>{this.props.description} </Truncate>
                    </div>   
                </div>
                </div>
            </Col>
            );
        }
        //To display remaining News Details with Image & Title on Desktop and IPAD Landscape
        else
        {
            return (
            <Col xs={12} sm={6} md={3} className='newsDesktopSection'>
                <div className='newsSectioncardTI'>
                <div className='newscardImage' style={{
                    backgroundImage: `url(${this.props.image})`
                }}></div>
                <div className='newscardTitle'>
                    <div className='newscardTitleDate'>{moment(this.props.date).format('MMMM D, YYYY')}</div>
                    <Link to={process.env.REACT_APP_SITE_RELATIVE_URL + `${this.props.linkTo}`}> <div className='newscardTitleText'>{this.props.title}</div></Link>
                </div>
                </div>
            </Col>
            );
        }
    }

    //To display News details on Tablet Portrait and Mobile Devices
    mobileNewsList()
    {
        if (this.props.itemCounter != 99) // This is to ignore the Top row description card that is displayed on Desktop
        {
            return (
                <div>
                    <Col xs={5} sm={5} md={5} className='newsMobileSection'>
                        <div className='newsSectioncardTI'>
                        <div className='newscardImage' style={{
                            backgroundImage: `url(${this.props.image})`
                        }}></div>
                        </div>
                    </Col>
                    <Col xs={7} sm={7} md={7} className='newsMobileSection'>
                        <div className='newsSectioncardTI'>
                        <div className='newscardTitle'>
                            <div className='newscardTitleDate'>{moment(this.props.date).format('MMMM D, YYYY')}</div>
                            <Link to={process.env.REACT_APP_SITE_RELATIVE_URL + `${this.props.linkTo}`}><div className='newscardTitleText'>{this.props.title}</div></Link>
                        </div>
                       {this.getDescription(this.props.description)}
                        </div>
                    </Col>
                </div>
            );
        }
 
    }

    getDescription(descriptionText)
    {
        if(descriptionText !== undefined && descriptionText.length > 0)
        {
            return(
                <div className='newscardDescription'>
                    {/*<div className='newscardTitleDate'>{moment(this.props.date).format('MMMM D, YYYY')}</div>*/}
                    <div className='newscardDescriptionText'>
                        <Truncate lines={3}>{this.props.description}</Truncate>
                    </div>
                </div>
            );
        }
        else
            return (
                null
            );
    }

}

export default NewsListItem;
