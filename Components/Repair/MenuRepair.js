import React,{useEffect} from 'react';
import { StyleSheet,View,Text,TextInput,Image} from 'react-native';
import Header from '../Header'
import { useTranslation } from 'react-i18next';
import AppButton from '../AppButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Lista from './MenuRepairList'
import ImagePicker from "react-native-image-picker"
import { Button } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import firebase from '../../database/firebase'

export default function Repair() {
  const {t,i18n}= useTranslation()
  const [value, onChangeText] = React.useState('')

  const handleSubmit = () => {
    const idioma = async () => {
      try {
        const menu = await AsyncStorage.getItem('MENU')
        const usuario = await AsyncStorage.getItem('USUARIO')
        if (menu !== null && usuario !==null) {
          console.log(menu,usuario.replace(/\s/g, ''))
          firebase.firedb
          .collection("Reparaciones")
          .doc(`${usuario}`)
          .set({
            id: `${Math.random()}`,
            categoría: `${menu}`,
            descripcion: `${value}`
          })
          .then((ref) => { console.log(ref) });
        }
      } catch (e) {
        alert(e)
        console.log(e)
      }
    }
    idioma()

  }

  return (
    <View>
        <Header>{t('repair')}</Header>
        <View style={styles.container}>
        <Text style={styles.label}>{t('category')}</Text>
          <View style={styles.content}>
          <View style={styles.list}>
            <Lista />
          </View>
          </View>
          {/* <Text style={styles.label}>{t('mensaje')}</Text> */}
          <Text style={styles.label}>{'Descripción'}</Text>
          <View style={styles.paragraph}>
          <View style={styles.input}>
          <TextInput
            multiline={true}
            onChangeText={text => onChangeText(text)}
            value={value}
            style={{padding: 10,height:150}}
            placeholder='Describe el problema'
          />
          </View> 
          </View>
          <Text style={styles.label}>{'Evidencia fotográfica'}</Text>
          <View>
            <Button>
              <MaterialIcons name="add-box" size={48} color="grey" />
            </Button>
          </View>
          <View style={styles.content}>
            <AppButton onPress={handleSubmit} style={styles.botons}>{'Enviar'}</AppButton>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    paddingTop: 0,
    backgroundColor: '#fff',
    height: '100%',
    zIndex:-1
  },
  content:{
    alignItems: 'center'
    
  },
  botons:{
    alignItems:'center',
    textAlign: 'center',
    color: 'white',
    fontWeight:'bold',
  },
  paragraph:{
    alignItems: 'center',
    zIndex: -1 
  },
  list:{
    width: '100%',
  },
  label:{
    fontWeight: '500',
    marginLeft:25,
    marginTop:40,
    marginBottom:20,
    fontSize:18,
    zIndex:-1
  },
  input:{
    borderColor:'black',
    width:'90%',
    borderWidth: 1,
    borderRadius: 8,
  },
  button:{
  }
});
