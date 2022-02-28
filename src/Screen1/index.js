/* eslint-disable prettier/prettier */
import {Button} from 'react-native-elements';
import React from 'react';
import Layout from '../Component/Layout';
import GlobalStyles from '../Utils/Global';

const Screen1 = props => {
  const goToScreen = async value => props.navigation.navigate('Home', {screen:value});
  return (
    <Layout footerTitle={'Footer'} title={'Header'}>
      <Button title="Go to Screen6"
        containerStyle={GlobalStyles.buttonCont}
        onPress={() => goToScreen('Screen6')}
      />

      <Button title="Go to Screen7"
        containerStyle={GlobalStyles.buttonCont}
        onPress={() => goToScreen('Screen7')}
      />
    </Layout>
  );
};

export default Screen1;
