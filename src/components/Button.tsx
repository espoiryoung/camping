import React from "react";
import{TouchableOpacity,View,Text, Alert}from 'react-native';

const handleSubmit = (text:string)=>{
    Alert.alert(`${text}`);
}
const Button =({ submitTitle }: { submitTitle: string })=>{
    return (
        <TouchableOpacity onPress={()=>handleSubmit(submitTitle)}>
            <View style={{backgroundColor:'#FDA758', marginHorizontal:20,borderRadius:8 ,alignItems:'center', justifyContent:'center', height:60}}>
                <Text style = {{fontWeight:'bold',fontSize: 16,color:'#573353' }}>{submitTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button;