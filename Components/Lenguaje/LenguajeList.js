
import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity,FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@save_lenguaje'

export default function Lista(props){
    const [lenguajes,setLenguajes] = useState([
        {text: 'English', key:'en'},
        {text: 'Español', key:'esp'}
      ]);
      const [lenguajePress, setlenguajePress] = useState(null);

      const PressLenguaje =async (key) =>{
        console.log(key)
        try {
          const jsonValue = JSON.stringify(key)
          await AsyncStorage.setItem('STORAGE_KEY', jsonValue)
          .then(setlenguajePress(key))
        }catch(e) {
          console.log(e)
        }
        console.log('Done.')
      }

    return(
            <FlatList
            extraData={lenguajePress}
            data={lenguajes}
            renderItem={({item}) => (
            <TouchableOpacity 
              onPress={() => PressLenguaje(item.key)}
              style={lenguajePress === item.key ? styles.ListContainerPress: styles.ListContainer}>
              <Text style={styles.item}>{item.text}</Text>
            </TouchableOpacity>
            )}
          />
    )

}

const styles = StyleSheet.create({
  ListContainerPress:{
    borderColor: '#bbb',
    borderWidth:1,
    borderRadius: 10,
    marginTop:20,
    backgroundColor: '#0843eb29'
  },
    ListContainer:{
      borderColor: '#bbb',
      borderWidth:1,
      borderRadius: 10,
      marginTop:20,
    },
    item:{
        padding: 16,
    }
  });
  