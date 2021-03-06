import React, {Component} from "react";
import { Link } from 'react-router-dom';
import TruncateMarkup from 'react-truncate-markup';
import Parser from 'html-react-parser';
import '../../content/styles/dsnyCard.css';

class TitleCard extends Component {
  render() {
    const styles={
      without_border:{
        'height': '90px',
        'display':'inline-block',
      },
      with_border:{
        'height': '90px',
        'display':'inline-block',
        'border': '1px solid #7CC04B'
      }
    }
    let CardType = styles.without_border;
    switch(this.props.type){
      case '1':{
        CardType = styles.without_border;
        break;
      }
      case '2':{
        CardType = styles.with_border;
        break;
      }
      default:{
        break;
      }
    }

    let link = this.props.link||'/about/bureaus';
    return (
          <Link to={process.env.REACT_APP_SITE_RELATIVE_URL + this.props.link}>
              <div style = {CardType} className='CardTitle'>
              <TruncateMarkup lines={2}>
                <div>
                  {Parser(this.props.title)}
                </div>
              </TruncateMarkup>
              </div>
          </Link>
    );
  };
};


export default TitleCard;
