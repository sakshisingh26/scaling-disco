/* eslint-disable no-unused-vars */
import {Dimensions, StyleSheet} from 'react-native';
import Colors from './Colors';
import {getStatusBarHeight, normalizeSize, statusBarHeight} from './CommonFun';
import Config from './Config';

const {height, width} = Dimensions.get('window');

// const brandingStyle = {}
const GlobalStyles = StyleSheet.create({
  fl1: {flex: 1},
  jcenter: {justifyContent: 'center'},
  alCenter: {alignItems: 'center'},
  alSelfCenter: {alignSelf: 'center'},
  jSpaceBetween: {justifyContent: 'space-between'},
  f20: {fontSize: normalizeSize(20)},
  //Header Styles
  containerHeader: {
    width: '100%',
    height: Config.height / 12,
    backgroundColor: Colors.themeBlue,
    borderBottomColor: Colors.trans,
  },
  middleContainer: {
    height: statusBarHeight - getStatusBarHeight(),
    marginBottom: getStatusBarHeight(),
    justifyContent: 'center',
  },

  //transparent Header
  tHeaderTitle: {
    fontSize: normalizeSize(16),
    fontWeight: '700',
    color: Colors.White,
  },
  footerCont: {
    backgroundColor: Colors.Grey,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    height: Config.height / 12,
  },
  blueBG: {backgroundColor: Colors.themeBlue},
  statusBar: {backgroundColor: Colors.statusBarColor},
  buttonCont: {width: Config.width / 2, marginTop: 50, alignSelf: 'center'},
});
// const GlobalStyles = { ...baseStyle, ...brandingStyle };
// const GlobalStyles = StyleSheet.create(baseStyle);
export default GlobalStyles;
