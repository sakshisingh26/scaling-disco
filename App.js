/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import MainRoute from './src/Navigation/Route';
// import { LogBox } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

EntypoIcon.loadFont();
// LogBox.ignoreLogs(['VirtualizedLists should never be nested','Seems like', 'Warning: ...', 'Warning:', 'VirtualizedList:', "Accessing the 'state'", 'Found screens with the same name nested inside one another. Check:', 'Deprecation warning: value provided is no','EventEmitter.removeListener']); // Ignore log notification by message

const App = () => {
  // useEffect(() => {}, [])
  return <MainRoute />;
};

export default App;
