import React, {Component} from "react";
import PropTypes from 'prop-types';
import styles from '../../content/styles/dsnyCard.css';

class TitleCard extends Component {
  render() {
    const styles={
      narrow:{
        'width': '220px',
        'height': '90px',
        'background-color':'grey',
        'display':'inline-block'
      },
      wide:{
        'width': '303px',
        'height': '90px',
        'background-color': 'lightblue',
        'display': 'inline-block'
      }
    }



    // let style= {this.props.style}=='narrow'?{styles.narrow}:{styles.wide};
    return (
        <div style = {this.props.type=='2'?styles.wide:styles.narrow} className='ContentCard'>
           <div className="Cardtext">
             Permit Inspection + Environmental Police
           </div>
        </div>
    );
  };
};

// LargeContentCard.propTypes = {
// };

export default TitleCard;
