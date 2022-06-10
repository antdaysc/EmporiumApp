import React,{useEffect,useState} from 'react';
import { StyleSheet,View,Text,TextInput,Image} from 'react-native';
import Header from '../Header'
import { useTranslation } from 'react-i18next';
import AppButton from '../AppButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation } from '@react-navigation/native';
import firebase from '../../database/firebase'


export default function Login() {
  const {t,i18n}= useTranslation()
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const navigation = useNavigation(); 

  const handleSignup = () => {
    firebase.realdb.ref(`usuario`).once('value', function (snapshot) {
      snapshot.forEach((question) => {
      if(question.val().user===usuario && question.val().password===contraseña && question.val().status==="activo"){
        navigation.navigate('Menu');
          try {
            const jsonValue = JSON.stringify(usuario)
            AsyncStorage.setItem('USUARIO', jsonValue)
          }catch(e) {
            console.log(e)
          }
      }
     else{
     alert(t("login.error"))
     }})
  });
  }


  useEffect(() => {
    const idioma = async () => {
      try {
        const lenguaje = await AsyncStorage.getItem('STORAGE_KEY')
        const valor = (JSON.parse(lenguaje))
        if (valor !== null) {
          i18n.changeLanguage(valor);
        }
      } catch (e) {
        alert(e)
      }
    }
    idioma()
  }, [])


  return (
    <View>
        <Header>{t('sesion')}</Header>
        <View style={styles.container}>
          <View style={styles.content}>
            <Image 
              style={styles.logo}
              source={require('../Imagenes/Emporium.png')}
            />
            <View style={styles.list}>
              <Text>{t("usuario")}</Text>
              <TextInput
              style={styles.input}
              onChangeText={usuario => setUsuario(usuario)}
              defaultValue={usuario}
             />
             <Text>{t("contra")}</Text>
              <TextInput
              style={styles.input}
              onChangeText={contraseña => setContraseña(contraseña)}
              defaultValue={contraseña}
             />
            </View>
            <View>
              <AppButton onPress={handleSignup} style={styles.botons}>{t("entrar")}</AppButton>
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
    marginTop:100,
    padding:20,
    alignItems: 'center'
  },
  list:{
    marginTop:40,
    width: 300
  },
  input: {
    height: 40,
    marginTop: 12,
    marginBottom:12,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
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
