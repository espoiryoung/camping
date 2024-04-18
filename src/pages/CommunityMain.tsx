import React,{useEffect, useState} from 'react';

import {useWindowDimensions, ImageBackground,StyleSheet, Image, SafeAreaView, Text,View, Linking, Button, Alert, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import Header from '@components/Header';
import SpotCard from '../components/SpotCard';
import { dummyList } from '../dummy/dummyList';

const CommunityMain=()=>{
    
    return(
        
        <SafeAreaView style={{flex:1, }}>
            
            <ImageBackground source={require('@images/backgroundImg.png')} resizeMode="cover"  >
                <Header title='상세보기'/>
                
                <Image source={require('@images/articleBanner.png')}/>
                <View>
                    <Text>Sorted by</Text>
            
                    
                </View>
                {/* TODO: 아티클 카드로 대체 */}
                <FlatList 
                data={dummyList.response.body.items.item}
                renderItem={({item})=><SpotCard id={item.contentId}/>}
                keyExtractor={item=> item.contentId}
                /> 

                
            </ImageBackground>

        </SafeAreaView>
    );
}

export default CommunityMain;
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


