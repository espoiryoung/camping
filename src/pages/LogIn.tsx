import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Alert, Image,ImageBackground, SafeAreaView, Text, TextInput,View, } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from '@components/Button';

const Login=()=>{
    //입력중인 비밀번호 보이는지 상태저장
    //const [isShow, setIsShow] = useState('false');
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [contractCheckBox, setContractToggleCheckBox] = useState(false)
    const [userName, setUserName]= useState("");
    
   
    const handleLogin = ()=>{
        Alert.alert ('로그인');
        //입력정보 === db?
    }

    
    return(
        <View style={{flex:1, backgroundColor:"#FFF3E9" }}>
                <View style={{flex:1,alignItems:'center',}}>
                    <Image  source={require('@images/LoginBackGround.png')} style={{marginTop:48}} />
                </View>
                
                <View style={{ alignItems:'center'}}>
                    <Text style={{fontSize:24, fontWeight:'bold', color:'#573353'}}>환영해요!</Text>
                </View>
                <TouchableOpacity >
                    <View style={{flexDirection:'row',backgroundColor:'#FFFFFF', marginHorizontal:20,borderRadius:8 ,alignItems:'center', justifyContent:'center', height:50}}>
                        <Image source={require('@icons/GoogleIcon.png')}/>
                        <Text style = {{fontWeight:'bold',fontSize: 16,color:'#573353' }}>Continue with Google</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={{flexDirection:'row',backgroundColor:'#FFFFFF', marginHorizontal:20,borderRadius:8 ,alignItems:'center', justifyContent:'center', height:50}}>
                        <Image source={require('@icons/Facebook.png')}/>
                        <Text style = {{fontWeight:'bold',fontSize: 16,color:'#573353' }}>Continue with Facebook</Text>
                    </View>
                </TouchableOpacity>
                
                <View style={{ backgroundColor:'#FFF', borderRadius:20}}>
                    <Text style={{padding:12}}>이메일로 로그인하기</Text>
                    <View style={{ paddingHorizontal: 20,paddingBottom:8,}}>
                        <View style={{borderRadius:12,backgroundColor:'#FFF3E9', flexDirection:'row', alignItems:'center',paddingLeft:17}}>
                            <Image source={require('@icons/Mail.png')} style={{width:15, height:12, }}/>
                            <TextInput placeholder='gocamping@email.com' style={{backgroundColor:'#FFF3E9',padding:19}}></TextInput>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 20}}>
                        <View style={{borderRadius:12,backgroundColor:'#FFF3E9', flexDirection:'row', alignItems:'center',paddingLeft:17}}>
                            <Image source={require('@icons/Lock.png')} style={{width:12, height:18, }}/>
                            <TextInput placeholder='비밀번호' style={{backgroundColor:'#FFF3E9',padding:19}}></TextInput>
                        </View>
                    </View>
                
                
                
                <Button submitTitle='로그인'/>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity>
                        <Text>비밀번호 찾기</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', paddingTop:10,justifyContent:'center'}}>
                    <Text>아직 회원이 아니세요?</Text>
                    <TouchableOpacity>
                        <Text style={{fontWeight:'bold'}}>회원가입</Text>
                    </TouchableOpacity>
                </View>
            </View>

            
        </View>
    )
}

export default Login;