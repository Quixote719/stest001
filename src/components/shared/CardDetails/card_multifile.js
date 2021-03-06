import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import Truncate from 'react-truncate';
import Parser from 'html-react-parser';
import Link from './link'
import MultifileDropdown from './card_multifile_dropdown';

class CardMultifile extends Component {

  constructor(props) {
    super(props);
    this.updateUrl = this.updateUrl.bind(this);
    this.renderDownload = this.renderDownload.bind(this);

    const defaultUrl = props.dataObject.multi_file
      ? props.dataObject.multi_file[0].link
      : ''
    this.state = {
      url: defaultUrl
    }
  }

  updateUrl(item) {
    if (item) {
      this.setState({
        url: item
      }, () => {});
    }
  }

  renderDropDown(dataObject) {
    if (dataObject.multi_file) {
      return (
        <div className='cardDropdownMF'><MultifileDropdown options={dataObject.multi_file} ondropDownChange={this.updateUrl}/></div>
      );
    }
    return (
      <div className='cardDropdownMF'></div>
    )
  };

  renderDownload(dataObject) {

    let url = this.state.url;
    if (dataObject.multi_file) {
      return (url
        ? <Link className='cardDownloadMF' to={url}>
            <div className='cardDownloadMF'>{dataObject.header}</div>
          </Link>
        : <div className='cardDownloadMF'>{dataObject.header}</div>);
    } else {
      let durl = dataObject.linked_file.file

      return (durl
        ? <Link className='cardDownloadMF' to={durl}>
            <div className='cardDownloadMF'>{dataObject.header}</div>
          </Link>
        : <div className='cardDownloadMF'>{dataObject.header}</div>);
    }
  };

  render() {
    const {dataObject} = this.props;

    return (
      <Col xs={12} sm={6} md={3}>
        <div className='subSectioncardMFTB'>
          <div className='cardTitle'>
            <div className='cardTitleTextMF'>
              <Truncate lines={3}> {Parser(dataObject.title)}</Truncate>
            </div>
          </div>
          <div className='cardBodyMF'>
            <div className='cardBodyTextMF'>
              <Truncate lines={3}>{Parser(dataObject.content)}</Truncate>
            </div>
            <div>{this.renderDropDown(dataObject)}</div>
            <div>{this.renderDownload(dataObject)}</div>
          </div>
        </div>
      </Col>
    );
  };
};

CardMultifile.propTypes = {
  dataObject: PropTypes.object,
  className: PropTypes.string
};

export default CardMultifile;
