import React from "react"

import { View,TouchableOpacity, Image, Text, StyleSheet } from "react-native"

type Props = {
    title:string;
}

const Header=({title}:Props)=>{

    return (
        <View style={styles.headerArea}> 
            <TouchableOpacity >
                <Image source={require('@icons/leftArrow.png')}/>
            </TouchableOpacity>
            <Text style={{ color:"#573353",fontSize:18, fontWeight:'bold',}}>{title}</Text>
        </View>
    )

}

export default Header;

const styles = StyleSheet.create({
    headerArea:{
        
        backgroundColor:"#FFF3E9",
        paddingHorizontal:15,
        alignItems:'center',
        flexDirection:'row'

    },

})