import React,{useEffect} from 'react';
import { StyleSheet,View,Text,TextInput,Image} from 'react-native';
import Header from '../Header'
import { useTranslation } from 'react-i18next';
import AppButton from '../AppButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Lista from './MenuMydocumentsList'

export default function Mydocuments() {
  const {t,i18n}= useTranslation()



  return (
    <View>
        <Header>{t('documents')}</Header>
        <View style={styles.container}>
          <View style={styles.content}>
          <View style={styles.list}>
            <Lista />
          </View>
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
    alignItems: 'center'
  },
  list:{
    marginTop:70,
    width: '100%',
  }
});
