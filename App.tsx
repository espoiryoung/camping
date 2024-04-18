import { NavigationContainer } from '@react-navigation/native';
import React,{useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';

import Router from './src/Router.tsx';

function App(): React.JSX.Element {

  return (

        <NavigationContainer>
          <Router />
        </NavigationContainer>

    
  );
}

export default App;
