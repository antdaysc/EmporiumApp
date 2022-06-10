import React,{useState} from 'react';
import Lenguaje from './Components/Lenguaje/Lenguaje'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Components/Login/Login';
import Menu from './Components/Menu/Menu';
import Repair from './Components/Repair/MenuRepair'
import Documents from './Components/Mydocuments/MenuMydocuments'
import { I18nextProvider } from "react-i18next";
import i18next from './Components/Lenguaje/Languages/index'
import Update from './Components/Update/Update';
import Mudanza from './Components/Mudanza/Mudanza';
const Stack = createStackNavigator();

export default function App() {

  return (
    <>
    <I18nextProvider i18n={i18next}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Lenguaje">
        {/* {lenguajesel ? <Stack.Screen name="Lenguaje" component={Lenguaje}/> : null} */}
          <Stack.Screen name="Lenguaje" component={Lenguaje}/>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Repair" component={Repair} />
          <Stack.Screen name="Documents" component={Documents} />
          <Stack.Screen name="Update" component={Update} />
          <Stack.Screen name="Mudanza" component={Mudanza} />
        </Stack.Navigator>
      </NavigationContainer>
    </I18nextProvider>
    </>
  );
}


// https://stackoverflow.com/questions/65703119/on-first-launch-choose-language-react-native