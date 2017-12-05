/*
Default normal prop type validation and custom prop type validation.
*/

import React from 'react';
import PropTypes from 'prop-types';

class PropTypeValidation extends React.Component{
  render(){
    return <Title text="this is MSD"/>
  }
}


const Title = (props) =><h1>Title: {props.text}</h1>

//default built-in prop type validations
  /*Title.propTypes={
    text: PropTypes.string
  }*/

//custom props type validation
  Title.propTypes = {
    text(props, propName, component){
      //this for isRequired checking
      if(!(propName in props)){
        return new Error('missing ${propName}')
      }
    }
  }



export default PropTypeValidation;
