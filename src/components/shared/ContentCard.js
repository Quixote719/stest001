import React, {Component} from "react";

class ContentCard extends Component {
  render() {
    const styles={
      small:{
        'width': '303px',
        'height': '200px',
        'padding': '15px 20px',
        'display':'inline-block'
      },
      normal:{
        'width': '460px',
        'height': '200px',
        'padding': '15px 20px',
        'display':'inline-block'
      },
      large:{
        'width': '617px',
        'height': '200px',
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

    return (
        <div style = {cardType} className='CardContent'>
            <div dangerouslySetInnerHTML={{__html: this.props.content}}></div>
        </div>
    );
  };
};



export default ContentCard;
