import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,View,Text,Image} from 'react-native';
import Header from '../Header'
import Lista from './LenguajeList'
import AppButton from '../AppButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation } from '@react-navigation/native';

export default function Lenguaje() {

  const navigation = useNavigation(); 
  const readData = async () => {
    try {
      const lenguaje = await AsyncStorage.getItem('STORAGE_KEY')
      if (lenguaje !== null) {
        navigation.navigate('Login');
      }
    } catch (e) {
      alert(e,'An error ocurred,restart the app')
    }
  }

  return (
    <View>
      <Header>Language</Header>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image 
          style={styles.logo}
          source={require('../Imagenes/Emporium.png')}
          />
          <View style={styles.list}>
            <Lista />
          </View>
          <AppButton onPress={readData} style={styles.botons}>Continue</AppButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%'
  },
  content:{
    marginTop:100,
    padding:20,
    alignItems: 'center'
  },
  title:{
    fontSize:20
  },
  list:{
    marginTop:40,
    width: 300
  },
  botons:{
    textAlign: 'center',
    color: 'white',
    fontWeight:'bold',
  },
  logo:{
    width:180,
    height:90,
  }
});
