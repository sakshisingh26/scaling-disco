import {Dimensions, PixelRatio, Platform} from 'react-native';
const {height, width} = Dimensions.get('window');
const {width: SCREEN_WIDTH} = Dimensions.get('window');
// based on iphone 5s's scale
let scale = SCREEN_WIDTH / 320;

function normalizeSize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else if (Platform.OS === 'web') {
    scale = SCREEN_WIDTH / 1024;
    return size + 2;
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

function isIphoneXorAbove() {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (height === 812 || width === 812 || height === 896 || width === 896)
  );
}

const getStatusBarHeight = () => {
  if (Platform.OS === 'ios') {
    return isIphoneXorAbove() ? 44 : 20;
  } else if (Platform.OS === 'android') {
    return 20;
  } else {
    return 0;
  }
};

const statusBarHeight =
  (Platform.OS === 'ios' ? 50 : height / 10) + getStatusBarHeight();

export {normalizeSize, getStatusBarHeight, statusBarHeight};
