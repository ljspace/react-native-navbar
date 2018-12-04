import {
  View,
  ViewPropTypes as RNViewPropTypes,
  Dimensions,
  Platform
} from 'react-native';

const ViewPropTypes = RNViewPropTypes || View.propTypes;

// iPhoneX Xs
const X_WIDTH = 375;
const X_HEIGHT = 812;

// iPhoneXR XsMax
const XR_WIDTH = 414;
const XR_HEIGHT = 896;

const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get('window');

function isIphoneX() {
  if (Platform.OS === 'web') return false;
  return isIphoneXOrXs() || isIphoneXROrXsMAX();
}

//判断是否为iphoneX或Xs
function isIphoneXOrXs() {
  return (
    Platform.OS === 'ios' &&
    ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||
      (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT))
  );
}

//判断是否为iphoneXR或XsMAX
function isIphoneXROrXsMAX() {
  return (
    Platform.OS === 'ios' &&
    ((D_HEIGHT === XR_HEIGHT && D_WIDTH === XR_WIDTH) ||
      (D_HEIGHT === XR_WIDTH && D_WIDTH === XR_HEIGHT))
  );
}

export { ViewPropTypes, isIphoneX };
