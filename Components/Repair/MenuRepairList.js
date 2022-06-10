
import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity,FlatList,View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import {FontAwesome5,MaterialCommunityIcons,FontAwesome} from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';

const STORAGE_KEY = '@save_lenguaje'

export default function Lista(props){
    const {t,i18n}= useTranslation()
    const [menus,setmenus] = useState([
        {label: t('appliance'), key:'1', icon:() => <FontAwesome5 name="tools" size={12} color="#0052FF" />,value:t('appliance')},
        {label: t('plumbing'), key:'2',icon:() => <FontAwesome5 name="money-bill" size={12} color="#0052FF" />,value:t('plumbing')},
        {label: t('ac'), key:'3',icon:() => <FontAwesome5 name="phone" size={12} color="#0052FF" />,value:t('ac')},
        {label: t('electrical'), key:'4',icon:() => <FontAwesome5 name="newspaper" size={12} color="#0052FF" />,value: t('electrical')},
        {label: t('other'), key:'5',icon:() => <MaterialCommunityIcons name="refresh" size={12} color="#0052FF" />,value:t('other')},
      ]);
      const [menuPress, setmenuPress] = useState(null);
      const [open, setOpen] = useState(false);
      const [value, setValue] = useState(null);

      const PressMenu =async (value) =>{
        console.log(value)
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('MENU', jsonValue)
          .then(setmenuPress(value))
        }catch(e) {
          console.log(e)
        }
        console.log('Done.')
      }

    return(
          //   <FlatList
          //   numColumns={2}
          //   extraData={menuPress}
          //   data={menus}
          //   renderItem={({item}) => (
          //   <TouchableOpacity 
          //     onPress={() => PressMenu(item.key)}
          //     style={menuPress === item.key ? styles.ListContainerPress: styles.ListContainer}>
          //       <View style={styles.icon}>
          //       {(item.key ==='1' || item.key ==='2' || item.key ==='3' || item.key ==='4') ? (<FontAwesome5 name={item.name} size={48} color="#0052FF" />) : item.key ==='5' ? (<FontAwesome name={item.name} size={48} color="#0052FF" />): (<MaterialCommunityIcons name={item.name} size={48} color="#0052FF" />)}
          //       </View>
          //     <Text style={styles.item}>{item.text}</Text>
          //   </TouchableOpacity>
          //   )}
          // />
          <DropDownPicker 
          items={menus}
          open={open}
          value={value}
          setOpen={setOpen}
          setValue={setValue}
          setmenus={setmenus}
          onChangeValue={PressMenu}
          containerStyle={{color: 'black'}}
          placeholder={t('select')}
          showArrowIcon={true}
          style={{
            borderColor:'grey',
            zIndex:2
          }}
          containerStyle={{
            width:'90%',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderColor:'transparent',
            zIndex:2
          }}
          selectedItemContainerStyle={{
            backgroundColor:'#DFDFDF',
            padding:4,
            paddingLeft:8,
            zIndex:2
          }}
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
    zIndex:2
  },
    ListContainer:{
      borderColor: '#bbb',
      borderWidth:1,
      borderRadius: 10,
      marginTop:20,
      width:'45%',
      marginLeft:10,
      marginRight:10,
      zIndex:2
    },
    item:{
        padding: 16,
        textAlign:'center',
        fontSize:18,
        zIndex:2
    },
    icon:{
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:30,
        marginBottom:30,
        zIndex:2
    }
  });
  