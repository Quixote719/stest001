import React, {Component} from "react";
import TruncateMarkup from 'react-truncate-markup';
import Parser from 'html-react-parser';

class ContentCard extends Component {
  render() {
    const styles={
      small:{
        'width': '303px',
        'minHeight': '220px',
        'padding': '20px',
        'display':'inline-block'
      },
      normal:{
        'width': '460px',
        'minHeight': '220px',
        'padding': '20px',
        'display':'inline-block'
      },
      large:{
        'width': '610px',
        'minHeight': '220px',
        'padding': '20px',
        'display':'inline-block'
      },
      ourWorkCard:{
        'width':'450px',
        'minHeight': '280px',
        'padding': '20px',
        'display':'inline-block'
      }
    }
    let cardType = styles.small;
    if(this.props.type === '1'){
       cardType = styles.small;
    }
    else if(this.props.type === '2'){
      cardType = styles.normal;
    }
    else if(this.props.type === '3'){
      cardType = styles.large;
    }
    else if(this.props.type ==='4'){
      cardType = styles.ourWorkCard;
    }
    let content = this.props.content||'';
    return (
        <div style = {cardType} className='CardContent'>
            <TruncateMarkup lines={9}>
              <div>
                {Parser(content)}
              </div>
            </TruncateMarkup>
        </div>
    );
  };
};



export default ContentCard;
