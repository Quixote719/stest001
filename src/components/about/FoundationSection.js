import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import RoundProfile from '../shared/RoundProfile'
import CardTitle from '../shared/Card_title'
import SubSectionHeader from '../shared/sub_section_header'
import ContentCard from '../shared/ContentCard'
import TitleCard from '../shared/TitleCard'
import '../../content/styles/ContentCard.css';

class FoundationSection extends Component {

  ListCards(cards){
    return cards.map((item, i)=>{
      return (
        <div className='CardTitleBox'>
          <TitleCard type='2' title={item.title}/>
          <div className='FoundationSp'></div>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="Foundation">
        <SubSectionHeader title = {this.props.FoundationProps.title}/>
        <div>
            <div className='leftSec'>
              <ContentCard type='3' content={this.props.FoundationProps.content}/>
            </div>
            <div className='rightSec'>
                {this.ListCards(this.props.FoundationCards)}
            </div>
        </div>
      </div>
    )
  }
}

export default FoundationSection;