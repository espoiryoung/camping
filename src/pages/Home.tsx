import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Header from '@components/Header';
import SpotCard from '@components/SpotCard';

const Home = () => {
    const navigation = useNavigation();
    const serviceKey = 'TseWf5%2BGtqbeYPvniw22jUCsTdxa7%2BX%2BXHaw0%2BtgbRID7LWSIBQGrE9AzfSiyVkyd42wsTBzDheTkd1OPQkbtw%3D%3D';
    const [campingList, setCampingList] = useState<DummyItemType[]>([]);

    useEffect(() => {
        getList();
    }, []);

    const getList = async () => {
        try {
            const res = await axios.get(`http://apis.data.go.kr/B551011/GoCamping/basedList?numOfRows=5&pageNo=1&MobileOS=IOS&MobileApp=camping&serviceKey=${serviceKey}&_type=json`);
            const items = res.data.response.body.items.item;
            setCampingList(items);
            console.log(items);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={require('@images/backgroundImg.png')} resizeMode="cover">
                <Header title='캠핑투게더' />
                <FlatList
                    data={campingList}
                    renderItem={({ item }) => <SpotCard id={item.contentId} />}
                    keyExtractor={item => item.contentId}
                />
            </ImageBackground>
        </SafeAreaView>
    );
}

export default Home;

type DummyItemType = {
  contentId: string;
  addr1: string;
  // 다른 필드들도 필요한 경우 여기에 추가
}
