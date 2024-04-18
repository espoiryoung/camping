
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { NavigationContainer } from '@react-navigation/native';
import React,{useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import Splash from './src/pages/Splash.jsx';
import OnBoarding from '@pages/OnBoarding.tsx'
import LogIn from './src/pages/LogIn.jsx';
import CampDetail from './src/pages/CampDetail.tsx';
import Home from './src/pages/Home.tsx';
import ArticleMain from '@pages/ArticleMain.tsx'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';




function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // const Tab = createBottomTabNavigator();

 
  return (
    
      <SafeAreaView style={{flex:1}}>
        
        {/* <OnBoarding/> */}
        <CampDetail/>  
        {/* <Home/> */}
        {/* <ArticleMain /> */}
        {/* <Splash /> */}
        {/* <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="logIn" component={logIn} />
            <Tab.Screen name="splash" component={splash} />
          </Tab.Navigator>
        </NavigationContainer> */}
        
      </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  
});

export default App;
