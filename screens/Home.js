import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import HeaderTab from './components/HeaderTab'
import SearchBar from './components/SearchBar'
import Catogeries from './components/Catogeries'
import RestaurantItem, {localRestaurant} from './components/RestaurantItem'

const YELP_API_KEY = "";

const Home = () => {
  const [restaurantData, setRestaurantData] = useState(localRestaurant)
  
  const getRestaurantFromYelp = () => {
    const yelpUrl = "https://api.yelp.com/v3/businesses/search?term=restaurant&location=SanDeigo"
  };

  const apiOptions = {
    headers:{
      Authorization: `Bearer ${YELP_API_KEY}`
    }
  }

  return (
    <SafeAreaView style={{backgroundColor: "#eee", flex: 1, width: "100vw"}}>
    <View style={{backgroundColor: "white", paddingVertical: 15}}>
      <HeaderTab />
      <SearchBar/>
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
    <Catogeries/>
    <RestaurantItem restaurantData={restaurantData}/>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Home