import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTab from './components/HeaderTab'
import SearchBar from './components/SearchBar'
import Catogeries from './components/Catogeries'

const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor: "#eee", flex: 1, width: "100vw"}}>
    <View style={{backgroundColor: "white", paddingVertical: 15}}>
      <HeaderTab />
      <SearchBar/>
    </View>
    <Catogeries/>
    </SafeAreaView>
  )
}

export default Home