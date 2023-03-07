import { FlatList, StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { useNavigation } from '@react-navigation/native'

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
    screen : 'EatScreen'
  },
]

const NavOption = () => {
  const navigation = useNavigation();
  return (
   <FlatList 
   style={tw``}
    data = { data }
    horizontal
    keyExtractor = {(item) => item.id}
    renderItem = {({ item }) => (
       <TouchableOpacity 
       onPress={() => navigation.navigate(item.screen)}
       style={tw`p-2 pl-6 pt-4 bg-gray-100 m-2 w-40  h-55 `}>
        
        <View>
          <Image 
          style= {{ width: 120, height: 120 , resizeMode:'contain'}}
            source={{
              uri:  item.image
            }}
          />
        
        <Text style={tw`mt-2   text-lg font-semibold `}>{item.title}</Text>
          <Icon
           style={tw`p-2 bg-black w-10 rounded-full  `}
           name='arrowright' 
           color = 'white'
            type='antdesign' />
            </View>
       </TouchableOpacity>
    ) }
   />
  )
}

export default NavOption;

const styles = StyleSheet.create({})