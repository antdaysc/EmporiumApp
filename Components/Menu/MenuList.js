
import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity,FlatList,View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import {FontAwesome5,MaterialCommunityIcons,FontAwesome} from '@expo/vector-icons';
import {useNavigation } from '@react-navigation/native';

const STORAGE_KEY = '@save_lenguaje'

export default function Lista(props){
    const {t,i18n}= useTranslation();
    const navigation = useNavigation(); 
    const [menus,setmenus] = useState([
        {text: t('repair'), key:'1', name:'tools'},
        {text: t('rent'), key:'2',name:'money-bill'},
        {text: t('management'), key:'3',name:'phone'},
        {text: t('documents'), key:'4',name:'newspaper'},
        {text: t('update'), key:'5',name:'refresh'},
        {text: t('moveout'), key:'6',name:'exit-run'}
      ]);
      const [menuPress, setmenuPress] = useState(null);

      const PressMenu =async (key) =>{
        console.log(key)
        try {
          const jsonValue = JSON.stringify(key)
          await AsyncStorage.setItem('MENU', jsonValue)
          .then(setmenuPress(key));
          if(key==='1'){
            navigation.navigate('Repair')}
          else if(key==='4'){
            navigation.navigate('Documents')
          }
          else if (key==='5'){
            navigation.navigate('Update')
          }
          else if (key==='6'){
            navigation.navigate('Mudanza')
          }
        }catch(e) {
          console.log(e)
        }
      }

    return(
            <FlatList
            numColumns={2}
            extraData={menuPress}
            data={menus}
            renderItem={({item}) => (
            <TouchableOpacity 
              onPress={() => PressMenu(item.key)}
              style={menuPress === item.key ? styles.ListContainerPress: styles.ListContainer}>
                <View style={styles.icon}>
                {(item.key ==='1' || item.key ==='2' || item.key ==='3' || item.key ==='4') ? (<FontAwesome5 name={item.name} size={48} color="#0052FF" />) : item.key ==='5' ? (<FontAwesome name={item.name} size={48} color="#0052FF" />): (<MaterialCommunityIcons name={item.name} size={48} color="#0052FF" />)}
                </View>
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
    backgroundColor: '#0843eb29',
    width:'45%',
    marginLeft:10,
    marginRight:10,
  },
    ListContainer:{
      borderColor: '#bbb',
      borderWidth:1,
      borderRadius: 10,
      marginTop:20,
      width:'45%',
      marginLeft:10,
      marginRight:10
    },
    item:{
        padding: 16,
        textAlign:'center',
        fontSize:18
    },
    icon:{
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:30,
        marginBottom:30,
    }
  });
  