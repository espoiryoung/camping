import React,{useEffect} from 'react';

import {useWindowDimensions, ImageBackground,StyleSheet, Image, SafeAreaView, Text, TextInput,View, Linking, Button, Alert,Clipboard, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import Header from '@components/Header';
import SpotCard from '../components/SpotCard';
import { dummyList } from '../dummy/dummyList';

const Home=()=>{
    
    const getAddress = (id: string): string | undefined  => {
      const targetItem = dummyList.response.body.items.item.find(item => item.contentId=== id);
      return targetItem?.addr1;
  };
  console.log(getAddress('100000'));
    return(
        
        <SafeAreaView style={{flex:1, }}>
            
            <ImageBackground source={require('@images/backgroundImg.png')} resizeMode="cover"  >
                <Header title='캠핑투게더'/>
                
                {/* <SpotCard id='100000'/> */}
                <FlatList 
                data={dummyList.response.body.items.item}
                renderItem={({item})=><SpotCard id={item.contentId}/>}
                keyExtractor={item=> item.contentId}
                /> 

                
            </ImageBackground>

        </SafeAreaView>
    );
}

export default Home;
const styles = StyleSheet.create({
   
})

type DummyItemType = {
  contentId: string;
  addr1: string;
  // 다른 필드들도 필요한 경우 여기에 추가
}

type DummyListType = {
  response: {
      body: {
          items: {
              item: DummyItemType[];
          };
      };
  };
};


