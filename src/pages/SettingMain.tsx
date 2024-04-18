import React,{} from 'react';
import {useWindowDimensions, ImageBackground,StyleSheet, Image, SafeAreaView, Text, TextInput,View, Linking, Button, Alert,Clipboard, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import Header from '@components/Header';
import { dummyList } from '../dummy/dummyList';
    
const SettingMain =()=>{
    
    
    return(
        
        <SafeAreaView style={{flex:1, }}>
            <ImageBackground source={require('@images/backgroundImg.png')} resizeMode="cover"  >
                <Header title='Settings'/>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default SettingMain;

const styles = StyleSheet.create({
   
})




