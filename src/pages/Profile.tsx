import React,{} from 'react';
import {useWindowDimensions, ImageBackground,StyleSheet, Image, SafeAreaView, Text, TextInput,View, Linking, Button, Alert,Clipboard, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import Header from '@components/Header';
import { dummyList } from '../dummy/dummyList';
    
const Profile =()=>{
    
    
    return(
        
        <SafeAreaView style={{flex:1, }}>
            <ImageBackground source={require('@images/backgroundImg.png')} resizeMode="cover"  >
                <Header title='Profile'/>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default Profile;

const styles = StyleSheet.create({
   
})




