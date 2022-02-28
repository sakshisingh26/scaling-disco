/* eslint-disable prettier/prettier */
import {Button} from 'react-native-elements';
import React from 'react';
import Layout from '../Component/Layout';
import GlobalStyles from '../Utils/Global';

const Screen7 = props => {
  return (
    <Layout {...props} showBack footerTitle={'Footer'} title={'Screen7'}>
      <Button title="Button1" containerStyle={GlobalStyles.buttonCont}/>
      <Button title="Button2" containerStyle={GlobalStyles.buttonCont}/>
    </Layout>
  );
};

export default Screen7;
