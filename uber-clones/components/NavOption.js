import { FlatList, StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const data = [
  {
    id: '123',
    title: 'get a ride',
    image : 'http://links.papareact.com/3pn',
    screen : 'MapScreen'
  },
  {
    id: '456',
    title: 'get a food',
    image : 'http://links.papareact.com/28w',
    screen : 'EaterScreen'
  },
]

const NavOption = () => {
  return (
   <FlatList 
   style={tw``}
    data = { data }
    horizontal
    keyExtractor = {(item) => item.id}
    renderItem = {({ item }) => (
       <TouchableOpacity style={tw`p-2 pl-6 pt-4 bg-gray-100 m-2 w-40 h-44 `}>
        
        <View>
          <Image 
          style= {{ width: 120, height: 120 , resizeMode:'contain'}}
            source={{
              uri:  item.image
            }}
          />
        </View>
        <Text style={tw`mt-2  text-center text-lg font-semibold`}>{item.title}</Text>
       </TouchableOpacity>
    ) }
   />
  )
}

export default NavOption;

const styles = StyleSheet.create({})