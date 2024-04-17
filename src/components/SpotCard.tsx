import React,{useEffect} from 'react';

import {useWindowDimensions, ImageBackground,StyleSheet, Image, SafeAreaView, Text, TextInput,View, Linking, Button, Alert,Clipboard, TouchableOpacity, ScrollView} from 'react-native';
import { dummyList } from '../dummy/dummyList';

//TODO: get 함수들 utils로 분리
const getAddress = (id: string): string | undefined  => {
    const targetItem = dummyList.response.body.items.item.find(item => item.contentId=== id);
    return targetItem?.addr1;
};


const getName = (id: string): string | undefined  => {
    const targetItem = dummyList.response.body.items.item.find(item => item.contentId=== id);
    return targetItem?.facltNm;
};

const getResveCl = (id: string): string | undefined  => {
    const targetItem = dummyList.response.body.items.item.find(item => item.contentId=== id);
    return targetItem?.resveCl;
};

const getFacltDivNm= (id: string): string | undefined  => {
    const targetItem = dummyList.response.body.items.item.find(item => item.contentId=== id);
    return targetItem?.facltDivNm;
};

const getMangeDivNm= (id: string): string | undefined  => {
    const targetItem = dummyList.response.body.items.item.find(item => item.contentId=== id);
    return targetItem?.mangeDivNm;
};

type SpotCardProps = {
    id: string;
};

//TODO: 이미지 크기조정, 카드 css 다듬기 필요
const SpotCard = ({ id }: SpotCardProps)=>{
    return(
        <TouchableOpacity>
            <View style={{paddingHorizontal:15}}>
                <View style={{backgroundColor:"#FFF", borderRadius:8, marginTop:13, height:274, paddingHorizontal:15}}>
                    <View style={{paddingHorizontal:10,alignItems:'center',}}>
                        <Image source={require('@images/dummyCampImg.png')} style={{marginTop:12,borderRadius:8,height:148}} />
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{color:'#919191', fontWeight:'bold', fontSize:13, paddingBottom:22 }}>{getFacltDivNm(id)} </Text>
                        <Text style={{color:'#919191', fontWeight:'bold', fontSize:13, paddingBottom:22 }}>{getMangeDivNm(id)} </Text>
                    </View>
                    
                    <Text style={{color:'#545454', fontWeight:'bold', fontSize:18, paddingBottom:22 }}>{getName(id)}</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text>{getAddress(id)}</Text>
                        <Text style={{color:'#FC9D45', fontWeight:'bold', fontSize:18, }}>{getResveCl(id)}</Text>
                    </View>
                
                </View>
            </View>
        </TouchableOpacity>
    )
};

export default SpotCard;