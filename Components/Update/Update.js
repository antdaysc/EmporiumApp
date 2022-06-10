import React,{useEffect,useState} from 'react';
import { StyleSheet,View,Text,TextInput,Image, KeyboardAvoidingView,ScrollView} from 'react-native';
import Header from '../Header'
import { useTranslation } from 'react-i18next';
import AppButton from './AppButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PropTypes} from 'prop-types'
import InputField from './InputField';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AntDesign } from '@expo/vector-icons'
import {useNavigation } from '@react-navigation/native';
import { List } from 'react-native-paper';
import InputFieldList from './InputFieldList';


export default function Update() {
    const {t,i18n}= useTranslation()
    const navigation = useNavigation(); 
    const [address, setaddress] = useState('Lorenzo Gonzalez 56 Ampliación los Angeles')
    const [phone, setphone] = useState('8711454870')
    const [lastname, setlastname] = useState('Diaz Cerda')
    const [name, setname] = useState('Antonio Carlos')
    const [editing, setediting] = useState(false)
    const [expanded, setExpanded] = useState(true);


    return(
        <KeyboardAvoidingView
        style={styles.wrapper}
        behavior="padding"
        >
          <View style={styles.header}>
            <View style={styles.row}>
                <Text onPress={() => navigation.navigate('Menu')} style={styles.back}><AntDesign name="left" size={24} color="white" /></Text>
                <Text onPress={() => setediting(!editing)}style={styles.edit}>{!editing ? t('change'): t('cancel')}</Text>
            </View>
          </View>
          <View style={styles.scrollViewWrapper}>
            <ScrollView style={styles.scrollView}>
              <Text style={styles.Header}>{t('edit')}</Text>
              <InputField onChangeText={setname} value={name}>{t('name')}</InputField>
              <InputField onChangeText={setlastname} value={lastname}>{t('lastname')}</InputField>
              <InputField onChangeText={setphone} value={phone} edit={editing}>{t('phone')}</InputField>
              <InputField  value={address} editable={false} >{t('address')}</InputField>
              <InputFieldList edit={editing}>{t('contactoem')}</InputFieldList>
              <View style={styles.buttoncontainer}>
              <AppButton onPress={() => console.log('yes')} style={styles.botons}>{t("entrar")}</AppButton>
              </View>
            </ScrollView>
          </View>
          <View style={{height:20}} />
        </KeyboardAvoidingView>

    );
}

const styles = StyleSheet.create({
    wrapper: {
       display:'flex',
       flex:1,
       backgroundColor:'white',
     },
     scrollViewWrapper:{
       marginTop: 30,
       flex: 1,
     },
     scrollView:{
       paddingLeft:20,
       paddingRight:20,
       paddingTop: 20,
       flex:1,
     },
     botons:{
      textAlign: 'center',
      color: 'white',
      fontWeight:'bold',
      flex:1
    },
    buttoncontainer:{
      marginBottom:30
    },
     Header:{
       fontSize: 28,
       color: 'black',
       fontWeight: '500',
       marginBottom: 10,
       textAlign:'center',
       flex: 1,
     },
     row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
     header:{
        height:90,
        paddingTop:50,
        backgroundColor: '#0052FF' 
     },
     back:{
         color: '#fff',
         fontSize:20,
         fontWeight:'bold',
         marginLeft:8,
         width:'80%'

     },
     edit:{
        color: '#fff',
        fontSize:18,
        fontWeight:'bold',
        width:'14%',
        textAlign:'right'
    }
   });