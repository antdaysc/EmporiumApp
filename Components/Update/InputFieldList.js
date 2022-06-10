import React,{useEffect,useState,} from 'react';
import { StyleSheet,View,Text,FlatList} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Feather } from '@expo/vector-icons'; 
import { TextInput } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 

export default function InputFieldList({children,value,onChangeText,edit}) {
  const {t,i18n}= useTranslation()
  const [edits, setedits] = useState(false);
  const [completename, setcompletename] = useState('');
  const [number, setnumber] = useState('');
  const [contactos,setcontactos] = useState([
    {title: 'Juanita Perez',subtitle:'87128383' ,key:'1'},
    {title: 'Rafa Medina',subtitle:'8716273880' ,key:'2'}
  ]);

  const onChangeName = (val) =>{
    setcompletename(val)
  }

  const onChangenumber = (val) =>{
    setnumber(val)
  }
  const submit = () => {
    setcontactos((prevcontactos) => {
      return[
        {title: completename,subtitle:number,key: Math.random().toString()},
        ...prevcontactos
      ]
    })
    setcompletename('');
    setnumber('')
  }

  console.log(number)
  return (
    <View>
        <View style={styles.container}>
          <View style={styles.titulo}>
          <Text style={styles.label}>{children}</Text>
          </View>
          {edit ?
          (<View style={styles.editsection}>
            <TextInput
            placeholder="Complete Name"
            activeUnderlineColor="blue"
            value={completename}
            style={styles.inputField}
            onChangeText={onChangeName}
            editable={!edit ? false: true} 
            />
            <TextInput
            activeUnderlineColor="blue"
            placeholder="Number"
            value={number}
            style={styles.inputField}
            onChangeText={onChangenumber}
            editable={!edit ? false: true} 
            />
            <AntDesign onPress={() => submit()} style={{paddingTop: 20}} name="pluscircleo" size={24} color="black" />
          </View>)
          :null}
          <FlatList
            style={styles.flatlist}
            data={contactos}
            renderItem={({item}) => (
              <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
              </View>
            )}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  flatlist:{
    marginTop:20,
    marginLeft:10
  },
 container: {
    marginTop:30,
    backgroundColor: '#f9f9f9',
    display:'flex',
    paddingTop:10,
  },
  editsection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
},
  inputField:{
    borderColor:'#f9f9f9',
    fontSize:18,
    width:'42%',
    marginRight:10,
    backgroundColor:'#f9f9f9',
  },
  label:{
    fontWeight: "500",
    marginLeft:10
  },
  title:{
    fontWeight:"500",
    fontSize:16
  },
  subtitle:{
    fontWeight:"300",
    marginBottom:20
  }
});
