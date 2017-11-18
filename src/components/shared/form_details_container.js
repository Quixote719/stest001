import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";

//Actions
import {fetchCardDetails} from "../../actions";
import ImageSection from './ImageSection'

//Sub Components
import Header from './Breadcrumb/breadcrumb_container'
import CardSec from './form_sec'

// Form Components
import DisabilityServices from '../contact/disabilityServices'
import OrganicsBinReplacement from '../contact/organicsBinReplacement'
import EwasteRequestForm from '../contact/eWastePickupRequest'
import StreetSidewalkObstruction from '../contact/streetSidewalkObstruction'
import LotCleaning from '../contact/lotCleaning'
import WeedRemovalRequest from '../contact/weedRemovalRequest'
import OverflowingLitterBasket from '../contact/overflowingLitterBasket'
import DeadAnimalRemovalRequest from '../contact/deadAnimalRemovalRequest'
import CollectionBinOnPublicProperty from '../contact/collectionBinOnPublicProperty'
import RecyclableMaterialTheft from '../contact/recyclableMaterialTheft'
import FailureStoreReceptacles from '../contact/failureStoreReceptacles'

class FormDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reload: false
    };
    const {slug} = this.props.match.params;
    this.slug = slug;
  }

  componentWillMount() {
    const {slug} = this.props.match.params;
    this.props.fetchCardDetails(slug);
  }

  componentWillReceiveProps(nextProps, nextState) {
    const {slug} = nextProps.match.params;
    if (this.slug !== slug) {
      this.slug = slug;
      this.setState({reload: true});
      this.props.fetchCardDetails(slug);
    }
  }

  render() {
    const {cardDetails} = this.props;
    return (<div className="topheader">
      <div>{this.renderPage(cardDetails)}</div>
      <div className="formContainer">{this.renderForms(cardDetails)}</div>
    </div>);
  };

  renderForms(cardDetails){
    if(cardDetails) {
      return _.map(cardDetails, Item => {
        if (Item !== undefined) {
          if (Item.name != '') {
            console.log(Item.name)
            switch (Item.name){
              case 'disability-services':
              return <DisabilityServices />;
              case 'organics-bin-replacement-request':
              return <OrganicsBinReplacement />;
              case 'streetsidewalk-obstruction-complaint':
              return <StreetSidewalkObstruction />;
              case 'lot-cleaning-request':
              return <LotCleaning />;
              case 'weed-removal-request':
              return <WeedRemovalRequest />;
              case 'litter-basket-request':
              return <OverflowingLitterBasket />;
              case 'dead-animal-removal-request':
              return <DeadAnimalRemovalRequest />;
              case 'collection-bin-on-public-property-removal-request':
              return <CollectionBinOnPublicProperty />;
              case 'e-waste-pickup-request':
              return <EwasteRequestForm />;
              case 'recyclable-material-theft-observation':
              return <RecyclableMaterialTheft />
              case 'failure-to-store-receptacles':
              return <FailureStoreReceptacles />
              break;
              default:
              break;
            }
          }}
      });
    }
  }

  renderPage(cardDetails) {

    if (cardDetails) {

      return _.map(cardDetails, cItems => {

        let banner;
        if (cItems !== undefined) {
          if (cItems.name != '') {
            banner = (<div key={cItems.id}>
              <Header breadCrumbList={cItems.breadcrumb}/>
            </div>)
          }

          let sections;
          if (cItems.sections) {
            sections = _.map(cItems.sections.sections, (sec,index) => {
              console.log(sec)
              
              // You can edit this part if the header of your form contains some special part like images, links, etc.

              // if there's an image in your header, the code should be like this:

              {/** if(sec.featured_image){
                let ImageProps = {};
                ImageProps = sec;
                return (
                  <div key={sec.id}>
                    <div>
                      <ImageSection ImageProps = {ImageProps}/>
                    </div>
                  </div>
                );
              }
              else{
                return (
                  <div key={sec.id}>
                    <div>
                      <CardSec dataObject={sec} finalSec={index == cItems.sections.sections.length - 1}/>
                    </div>
                  </div>
                );
              } **/}

              return (
                <div key={sec.id}>
                  <div>
                    <CardSec dataObject={sec}/>
                  </div>
                </div>
              );
            })
          }

          return (<div key={cItems.id}>
            <div>{banner}</div>
            <div>{sections}</div>
          </div>)
        }
      });
    } else {
      return (<div>loading.....</div>)
    }
  }
};

function mapStateToProps(state) {
  return {cardDetails: state.card};
}

export default connect(mapStateToProps, {fetchCardDetails})(FormDetail);
