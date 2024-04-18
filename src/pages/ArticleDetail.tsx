import React,{} from 'react';
import {useWindowDimensions, ImageBackground,StyleSheet, Image, SafeAreaView, Text, TextInput,View, Linking, Button, Alert,Clipboard, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import Header from '@components/Header';
import { dummyList } from '../dummy/dummyList';
    
const ArticleDetail =()=>{
    
    
    return(
        
        <SafeAreaView style={{flex:1, }}>
            <ImageBackground source={require('@images/backgroundImg.png')} resizeMode="cover"  >
                <Header title='아티클 상세'/>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default ArticleDetail;

const styles = StyleSheet.create({
   
})




