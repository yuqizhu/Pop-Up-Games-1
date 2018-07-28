import React from 'react'
import CreateEvent from './createevent/CreateEvent.jsx';
import CreateField from './createfield/CreateField.jsx';
import CreateVenue from './createvenue/CreateVenue.jsx';
import EventView from './eventview/EventView.jsx';
import Field from './field/Field.jsx';
import Home from './home/Home.jsx';
import Search from './search/Search.jsx';
import Venue from './venue/Venue.jsx';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
/**
 * @description Renders all the  React Router Navigation Links
 */
var NavBar = (props) => {
  let userInfo = props.userInfo;
  let toggleAuth = props.toggleAuth;
  let changeTarget = props.changeTarget;
  let target = props.target;
    return (
        <div className="top">
          <div className="w3-bar w3-blue w3-card w3-left-align w3-large">
            <Link to="/home" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white w3-left-align ">Home</Link>
            <Link to="/search" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white w3-left-align ">Search</Link>
            <Link to="/createvenue" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white w3-left-align ">Create</Link>
            <Link to="/logout" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white w3-left-align ">Logout</Link>
          </div>
          <Route path="/home"
              render={props => <Home
                toggleAuth={toggleAuth} 
                userInfo={userInfo} 
                changeTarget={changeTarget} {...props} />} 
              />
          <Route path="/search" component={Search} />
          <Route path="/field"
              render={props => <Field
              toggleAuth={toggleAuth} 
              changeTarget={changeTarget} 
              target={target} {...props} />} 
          />
          <Route path="/event" 
              render={props => <EventView
              toggleAuth={toggleAuth} 
              changeTarget={changeTarget} 
              target={target} {...props} />} />
          <Route path="/venue"
              render={props => <Venue
              toggleAuth={toggleAuth} 
              changeTarget={changeTarget} 
              target={target} {...props} />} 
           />
          <Route path="/createevent" 
              render={props => <CreateEvent
              toggleAuth={toggleAuth} 
              changeTarget={changeTarget} 
              target={target} {...props} />}  />
          <Route path="/createfield" 
              render={props => <CreateField
              toggleAuth={toggleAuth} 
              changeTarget={changeTarget} 
              target={target} {...props} />}  />
          <Route path="/createvenue" 
              render={props => <CreateVenue
              toggleAuth={toggleAuth} 
              target={target} {...props} />}  />
        </div>
     );
  }

export default NavBar;