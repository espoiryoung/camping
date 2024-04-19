import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Alert, Image,ImageBackground, SafeAreaView, Text, TextInput,View, } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from '@components/Button';

const SignUp=()=>{
    //입력중인 비밀번호 보이는지 상태저장
    //const [isShow, setIsShow] = useState('false');
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [contractCheckBox, setContractToggleCheckBox] = useState(false)
    const [userName, setUserName]= useState("");
    
   
    const handleSignUp = ()=>{
        Alert.alert ('회원가입');
    }
    //TODO: 회원가입 API 연결
    // useEffect(()=>{
    //     getList();
    // },[]);

    // const getList=async()=>{
    //     try{
    //         const res = await axios (`http://13.209.27.220:8080/article?sortType=LATEST%28%EC%B5%9C%EC%8B%A0%EC%88%9C%29`,);
    //         console.log(res);
    //     }
    //     catch(error){
    //         console.error(error);
    //     }
    // };
    
    return(
        <SafeAreaView style={{flex:1, backgroundColor:"#FFF3E9" }}>
                <View style={{alignItems:'center',}}>
                    <Image  source={require('@images/CreateAccount.png')} style={{marginTop:48}} />
                </View>
                
                <View style={{ alignItems:'center'}}>
                    <Text style={{fontSize:24, fontWeight:'bold', color:'#573353'}}>회원가입</Text>
                </View>
                <View style={{ paddingHorizontal: 20, paddingBottom:8, paddingTop:32}}>
                    <View style={{borderRadius:12,backgroundColor:'#fff', flexDirection:'row', alignItems:'center',paddingLeft:17}}>
                        <Image source={require('@icons/user.png')} style={{width:14, height:16 }}/>
                        <TextInput placeholder='닉네임' style={{backgroundColor:'#fff',padding:19}}></TextInput>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 20,paddingBottom:8}}>
                    <View style={{borderRadius:12,backgroundColor:'#fff', flexDirection:'row', alignItems:'center',paddingLeft:17}}>
                        <Image source={require('@icons/Mail.png')} style={{width:15, height:12, }}/>
                        <TextInput placeholder='gocamping@email.com' style={{backgroundColor:'#fff',padding:19}}></TextInput>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 20}}>
                    <View style={{borderRadius:12,backgroundColor:'#fff', flexDirection:'row', alignItems:'center',paddingLeft:17}}>
                        <Image source={require('@icons/Mail.png')} style={{width:15, height:12, }}/>
                        <TextInput placeholder='비밀번호' style={{backgroundColor:'#fff',padding:19}}></TextInput>
                    </View>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', padding:37, }}>
                    <CheckBox
                        disabled={false}
                        boxType="square"
                        onCheckColor='#573353'
                        onFillColor="#FDA758"
                        value={toggleCheckBox}
                        onTintColor='#00000000'
                        tintColor='#FFFFFF'
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text style={{paddingLeft:11, fontSize:16, color:'#573353' }}>자동 로그인</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', paddingHorizontal:37, }}>
                    <CheckBox
                        disabled={false}
                        boxType="square"
                        onCheckColor='#573353'
                        onFillColor="#FDA758"
                        value={toggleCheckBox}
                        onTintColor='#00000000'
                        tintColor='#FFFFFF'
                        onValueChange={(newValue) => setContractToggleCheckBox(newValue)}
                    />
                    <Text style={{paddingLeft:11, fontSize:16, color:'#573353' }}>약관 동의</Text>
                </View>
            
            <Button submitTitle='회원가입하기'/>
            <View style={{flexDirection:'row', paddingTop:10,justifyContent:'center'}}>
                <Text>회원이세요?</Text>
                <TouchableOpacity>
                    <Text>로그인</Text>
                </TouchableOpacity>
            </View>

            
        </SafeAreaView>
    )
}

export default SignUp;