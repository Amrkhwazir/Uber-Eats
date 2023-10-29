import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const HeaderTab = () => {

    const [activeTab, setActiveTab] = useState("Delivery")

  return (
    <View style={{flexDirection: "row", justifyContent: "center",}}>
      <HeaderButtons text="Delivery" btnColor="black" txtColor="white" activeTab={activeTab} setActiveTab={setActiveTab}/>
      <HeaderButtons text="Pickup" btnColor="white" txtColor="black" activeTab={activeTab} setActiveTab={setActiveTab}/>
    </View>
  )
}

const HeaderButtons = (props) => {
    return(
        <TouchableOpacity style={{
            backgroundColor: props.activeTab === props.text ? "black" : "white",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30
        }}
        onPress={()=> props.setActiveTab(props.text)}>
        
         <Text style={{color: props.activeTab === props.text ? "white" : "black", fontSize: 15, fontWeight: "600"}}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default HeaderTab