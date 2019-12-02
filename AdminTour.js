import React from 'react';
import ReactDom from 'react-dom';
import {Component} from 'react';
import PlannedTours from "../tours.json";

class AdminTour extends Component{
  constructor(props){
    super(props);
    this.state = {
      showTour : "hide",
      addDate:"",
      addName:"",
      addType:"virtual",
      tours: {
        phyTours: [],
        virtTour: []
      }
    };

    this.state.tours.phyTours = PlannedTours.physicalTours;
    this.state.tours.virtTour = PlannedTours.virtualTours;
  }
