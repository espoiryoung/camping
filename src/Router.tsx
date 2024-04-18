import React, {useEffect, useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

import Home from '@pages/Home';
import ArticleDetail from '@pages/ArticleDetail';
import ArticleMain from '@pages/ArticleMain';
import CampDetail from '@pages/CampDetail';
import CommunityDetail from '@pages/CommunityDetail';
import CommunityMain from '@pages/CommunityMain';
import LogIn from '@pages/LogIn';
import OnBoarding from '@pages/OnBoarding';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const Router =()=>{
//     return (
//         <Stack.Navigator></Stack.Navigator>
//     )
// }

// export default Router;