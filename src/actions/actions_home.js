import axios from 'axios';
import $ from 'jquery';
import data from './panelData.json';
import * as types from '../constants/ActionTypes';
import {HOME_PAGE_DATA_URL, RID_OF_KEYWORDS_URL, RID_OF_SEARCH_RESULTS_URL, FETCH_EVENTS_SUB_LIST_URL } from "../constants/ApiConstants";
export function carouselData() {
    return function (dispatch) {
        axios.get(HOME_PAGE_DATA_URL)
            .then((data) => {
                dispatch({
                    type: 'SET_CAROUSEL_TITLE',
                    payload: data.data.sections.sections,
                })
            })
    }
}

export function getRidOffKeywords() {
    return function (dispatch) {
        axios.get(RID_OF_KEYWORDS_URL)
            .then((data) => {
                dispatch({
                    type: 'SET_RID_OFF_KEYWORDS',
                    payload: data.data.key_words,
                })
            })
    }
}

export function getRidOfSearchResults(suggestion) {
    return function (dispatch) {
        axios.get(RID_OF_SEARCH_RESULTS_URL+"="+suggestion)
            .then((data) => {
                dispatch({
                    type: 'SET_RID_OFF_SEARCH_RESULTS',
                    payload: data.data,
                    length: data.data.length,                    
                })
                // dispatch({
                //     type: 'SET_RID_OFF_SEARCH_BOX',
                //     payload: suggestion,
                // })
            })
    }
}
export function carouselPanelData() {
    return function (dispatch) {
        var date = new Date();
        var month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
        var day = ("0" + date.getUTCDate()).slice(-2);
        var year = date.getUTCFullYear().toString();
        var currentDate = parseInt(month + day + year);
        
        axios.get('http://nyc-csg-web.csc.nycnet/apps/311api/municipalservices/?startDate=' + currentDate,  { crossdomain: true } )
            .then((data) => {
                let carouselPanelItems = [];
                data.data.items[0].items.map((item) => {
                    let temp = {};
                    if (item.type == 'Parking') {
                        temp['panelItemType'] = 'Alternate Side Parking';
                    } else {
                        temp['panelItemType'] = item.type;
                    }
                    temp['panelItemIcon'] = 'http://www1.nyc.gov' + item.icon;
                    temp['panelItemStatus'] = item.status;
                    carouselPanelItems.push(temp);
                })
                dispatch({
                    type: 'SET_PANEL_ITEMS',
                    payload: carouselPanelItems,
                })
                

            })

    }

}

export function carouselPanelDataTemporary() {
    return function (dispatch) {
        let carouselPanelItems = [];
        let temp = [];
        data.map(function (item) {
            item.items.map(function (items, index) {
                let temp1 = {}
                if (items.type == 'Parking') {
                    temp1['panelItemType'] = 'Alternate Side Parking';
                } else {
                    temp1['panelItemType'] = items.type;
                }
                temp1['panelItemIcon'] = 'http://www1.nyc.gov' + items.icon;
                temp1['panelItemStatus'] = items.status;
                temp.push(temp1);
            });
            carouselPanelItems.push(temp)
        })
        dispatch({
            type: 'SET_PANEL_ITEMS_TEMPORARY',
            payload: carouselPanelItems
        })

    }
}

export function fetchEventSubList(borough) {
    const request = axios.get(FETCH_EVENTS_SUB_LIST_URL + borough);
    return {type: types.FETCH_EVENT_SUB_LIST, payload: request};
}