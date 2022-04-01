import React, {useEffect} from 'react';
import Header from './Header';
import Tabs from './Tabs';
import {useSelector, useDispatch} from 'react-redux';
const Whatsapp = props => {
  const initialValue = useSelector(value => value.message);
  return (
    <>
      <Header prevScreen={props.navigation} />
      <Tabs screen={props.navigation} />
    </>
  );
};

export default Whatsapp;
