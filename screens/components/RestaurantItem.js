import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export const localRestaurant = [
    {
        name: "Beachside Bar",
        image: "https://www.redbox.estate/backoffice/ckfinder/userfiles/files/WhatsApp-Image-2022-07-30-at-4_55_01-PM-_1_.webp",
        categories: ["Cafe", "Bar"],
        price: "$$",
        review: 1244,
        rating: 4.5,
    },
    {
        name: "Lal Qilla",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
        categories: ["Cafe", "Bar", "Fast Food", "Desserts"],
        price: "$$",
        review: 1234,
        rating: 3.9,
    },
    {
        name: "Kababjees",
        image: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvYTAwOS1rYWJvb21waWNzLTUyMC5qcGc.jpg",
        categories: ["Cafe", "Bar", "Karahi", "Fast Food"],
        price: "$$",
        review: 1400,
        rating: 4.3,
    },
]

const RestaurantItem = (props) => {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom: 30}}>
        {props.restaurantData.map((returant, index)=>(
              <View key={index} style={{marginTop: 10, padding: 15, backgroundColor: "white"}}>
              <RestaurantImage image={returant.image}/>
              <RestaurantInfo  name={returant.name} rating={returant.rating}/>
            </View>
        ))}
  
    </TouchableOpacity>
  )
}


const RestaurantImage = (props) =>(
    <>
    <Image source={
        {
            uri: props.image
        }
    } style={{width: "100%", height: 180}}/>
    <TouchableOpacity style={{position: "absolute", right: 20, top: 20}}>
        <MaterialCommunityIcons name="heart-outline" size={26} color="#fff"/>
    </TouchableOpacity>
    </>
);


const RestaurantInfo = (props) => (

    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 10}}>
        <View>
        <Text style={{fontSize: 15, fontWeight: "bold"}}>{props.name}</Text>
        <Text style={{fontSize: 13, color: "grey"}}>30-45 . min</Text>
        </View>
        <View style={{backgroundColor: "#eee", height: 30, width: 30, alignItems: "center", justifyContent: "center", borderRadius: 15}}>
        <Text>{props.rating}</Text>
        </View>
    </View>
)


export default RestaurantItem