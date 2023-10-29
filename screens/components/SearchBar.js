import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

const SearchBar = () => {
  return (
    <View style={{marginTop: 15, flexDirection: "row", paddingHorizontal: 10}}>
      <GooglePlacesAutocomplete placeholder='Search'
      styles={{
        textInput:{
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: 700,
            marginTop: 7,
            outline: "none"
        },
        textInputContainer:{
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10
        },
      }}
      renderLeftButton={() => {
        return(
            <View style={{marginLeft: 10}}>
                <Ionicons name='location-sharp' size={24}/>
            </View>
        )
      }}
      renderRightButton={() => {
        return(
            <View style={{
                flexDirection: "row",
                marginRight: 8,
                backgroundColor: "white",
                padding: 9,
                borderRadius: 30,
                alignItems: 'center',
                gap: 6
                }}>
                <AntDesign name="clockcircle" size={15} />
                <Text>Search</Text>
            </View>
        )
      }}
      />
    </View>
  )
}

export default SearchBar