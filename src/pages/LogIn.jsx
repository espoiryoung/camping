import React from 'react';
import { SafeAreaView, Text, TextInput,View} from 'react-native';
const LogIn=()=>{
    return(
        <SafeAreaView style={{flex:1}}>
            <Text>logIn</Text>
            <View style={{backgroundColor:"#ececec"}}>
                <Text>이메일</Text>
                <TextInput style={{borderColor:"#fff"}}></TextInput>
            </View>
            <View style={{backgroundColor:"#ececec"}}>
                <Text>이메일</Text>
                <TextInput style={{borderColor:"#fff"}}></TextInput>
            </View>
            
        </SafeAreaView>
    )
}

export default LogIn;