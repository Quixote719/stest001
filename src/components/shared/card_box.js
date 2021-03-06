import _ from "lodash";
import React, { Component } from 'react';
import SubSectionHeader from '../shared/sub_section_header'
import SubSectionButton from '../shared/sub_section_button';
import TitleCard from '../shared/TitleCard';
import TitleCardExternalLink from '../shared/titleCardExternalLink';
import TitleContentCard from '../shared/TitleContentCard';
import ColorCard from '../shared/ColorCard';
import ProfileCard from '../shared/ProfileCard'
import { Row, Col } from 'react-bootstrap';
import '../../content/styles/dsnyCard.css';

class CardBox extends Component {

  renderCards(cards = []){
    return _.map(cards, item => {
        //  CardType: 1.TitleCard  2.ColorCard  3.ProfileCard
        //  CardSize: 1.width:220px, 4 in a row    2.width:303px, 3 in a row
        let card = null;
        if(this.props.info.CardType=='standard-card-no-border'){
          if(item.linked_page == false && item.linked_url !== " ") {
            card = <TitleCardExternalLink title={item.title} link={item.linked_url} type='1' />
          } else {
            card = <TitleCard title={item.title} link={item.linked_page.url} type='1' />
          }
        }
        else if(this.props.info.CardType=='square-card'){
            card = <TitleCard title={item.title} link={item.linked_page.url} type='2' />
        }
        else if(this.props.info.CardType=='standard-card-with-border'){
          if(item.linked_page == false && item.linked_url !== " ") {
            card = <TitleCardExternalLink title={item.title} link={item.linked_url} type='2' />
          } else {
            card = <TitleCard title={item.title} link={item.linked_page.url} type='2' />
          }
        }
        else if(this.props.info.CardType=='color-bar-card'){
            card = <ColorCard dataObject={item}/>
        }
        else if(this.props.info.CardType=='staff-card'){
            card = <ProfileCard name={item.title} duty={item.content} image={item.featured_image} />
        }
        else{
            card = <TitleContentCard dataObject={item}/>
        }

        if(this.props.info.CardType=='staff-card'||this.props.info.CardType=='square-card'){
          return (
            <Col xs={12} sm={4} md={3} key={item.id}>
              {card}
            </Col>
          );
        }
        else{
          return (
            <Col xs={12} sm={6} md={4} key={item.id}>
              {card}
            </Col>
          );
        }
     })
  }

  ViewAllButton() {
      if(this.props.info.button == true){
          return (<SubSectionButton title={this.props.info.ButtonTitle}/>);
      }
  }

  render() {
    return (
      <div>
          <div className="CardList">
            <Row>
              {this.renderCards(this.props.info.cards)}
            </Row>
          </div>
          {this.ViewAllButton()}
      </div>
    );
  }
}


export default CardBox;
