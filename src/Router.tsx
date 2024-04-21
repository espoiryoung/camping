import React, {useEffect, useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

import Splash from '@pages/Splash';
import Home from '@pages/Home';
import ArticleDetail from '@pages/ArticleDetail';
import ArticleMain from '@pages/ArticleMain';
import CampDetail from '@pages/CampDetail';
import CommunityDetail from '@pages/CommunityDetail';
import CommunityMain from '@pages/CommunityMain';
import LogIn from '@pages/LogIn';
import OnBoarding from '@pages/OnBoarding';
import SettingMain from '@pages/SettingMain';
import Profile from './pages/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTab = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="홈" component={Home} />
            <Tab.Screen name="아티클" component={ArticleMain} />
            <Tab.Screen name="커뮤니티" component={CommunityMain} />
            <Tab.Screen name="환경설정" component={SettingMain} />
            <Tab.Screen name="작업중" component={LogIn} />
        </Tab.Navigator>

    )
}

const Router = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false,}}>
            {/* <Stack.Screen name="Splash" component={Splash}  />  */}
            <Stack.Screen name="MainTab" component={MainTab} />
            <Stack.Screen name='ArticleDetail' component={ArticleDetail} />
            <Stack.Screen name='CampDetail' component={CampDetail} />
            <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>
    )
}

export default Router;