import { StyleSheet, Text, View, Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import tw from 'twrnc';
import NavOption from '../components/NavOption';

const HomeScreen = () => {
  return (
    <SafeAreaView style = {tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
      style= {{
        width: 100,
        height: 100,
        resizeMode: 'contain',
      }}
      source={{
        uri: 'https://links.papareact.com/gzs',
      }}
      />
      </View>
      <NavOption/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  text: {
    color: 'blue'
  }
})