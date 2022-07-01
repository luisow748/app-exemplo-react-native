import React from 'react';
import { Text, View } from 'react-native';
import Base from './components/Base'
import Contador from './components/Contador';
import { Estilo } from './style/Estilo';

const HelloWorldApp = () => {
  return (
    <View
      style={Estilo.view}>
      {/* <Base /> */}
      <Contador inicial={500} />
    </View>
  )
}
export default HelloWorldApp;