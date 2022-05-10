import React from 'react'
import Routes from './src/components/Screens/SubScreen/Routes'
import LogInScreen from './src/components/Screens/LogSign/LogInScreen'
import {View} from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/Redux/store';

const App = () => {
  return (
    <Provider store = {Store}>
      <Routes/>
    </Provider>
  )
}

export default App