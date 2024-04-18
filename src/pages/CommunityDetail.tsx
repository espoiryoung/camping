import React,{} from 'react';
import {useWindowDimensions, ImageBackground,StyleSheet, Image, SafeAreaView, Text, TextInput,View, Linking, Button, Alert,Clipboard, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import Header from '@components/Header';
import { dummyList } from '../dummy/dummyList';
    
const CommunityDetail =()=>{
    
    
    return(
        
        <SafeAreaView style={{flex:1, }}>
            <ImageBackground source={require('@images/backgroundImg.png')} resizeMode="cover"  >
                <Header title='상세보기'/>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default CommunityDetail;

const styles = StyleSheet.create({
   
})




