import React,{useEffect, useState} from 'react';

import {Alert, Modal,Pressable, useWindowDimensions, ImageBackground,StyleSheet, 
    Image, SafeAreaView, Text,View, Linking, Button, TouchableOpacity, FlatList} from 'react-native';
import Header from '@components/Header';
import SpotCard from '../components/SpotCard';
import { dummyList } from '../dummy/dummyList';

const ArticleMain=()=>{
    const [modalVisible, setModalVisible] = useState(false);
    const [sortType, setSortType] = useState('latest');

    return(
        
        <SafeAreaView style={{flex:1, }}>
            
            <ImageBackground source={require('@images/backgroundImg.png')} resizeMode="cover"  >
                <Header title='아티클'/>
                
                <Image source={require('@images/articleBanner.png')}/>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text>Sorted by</Text>
                    
                    <Text>즐겨찾기 순</Text>  
                </View>
                {/* TODO:모달 컴포넌트로 분리 */}
                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <Pressable
                                style={[styles.button, ]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Cancel</Text>
                                </Pressable>
                            </View>
                            <Text style={styles.modalText}>정렬</Text>
                            <Pressable
                            style={[styles.button,]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>즐겨찾기순</Text>
                            </Pressable>
                            <Pressable
                            style={[styles.button, ]}
                            onPress={() =>Alert.alert('최신순으로 정렬예정')}>
                            <Text style={styles.textStyle}>최신순</Text>
                            </Pressable>
                        </View>
                        </View>
                    </Modal>
                    <Pressable
                        style={[ styles.buttonOpen]}
                        onPress={() => setModalVisible(true)}>
                        <Text style={styles.textStyle}>{sortType}</Text>
                    </Pressable>
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

export default ArticleMain;
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        width:'100%'
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width:'100%'
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
    //   buttonClose: {
    //     backgroundColor: '#2196F3',
    //   },
      textStyle: {
        color: '#573353',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
   
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


