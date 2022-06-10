import React,{useEffect} from 'react';
import { StyleSheet,View,Text} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Feather } from '@expo/vector-icons'; 
import { TextInput } from 'react-native-paper';

export default function InputField({children,value,onChangeText,edit}) {
  const {t,i18n}= useTranslation()

  return (
    <View>
        <View style={styles.container}>
          <Text style={styles.label}>{children}</Text>
          <View style={styles.editsection}>
            <TextInput
            activeUnderlineColor="blue"
            value={value}
            style={styles.inputField}
            onChangeText={onChangeText}
            editable={!edit ? false: true} 
            right={edit ? <TextInput.Icon name="border-color" /> : ''}
            />
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    backgroundColor: '#fff',
    display:'flex',
    paddingTop:25
  },
  editsection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
},
  inputField:{
    borderColor:'#dbd9d9',
    fontSize:18,
    width:'95%',
    backgroundColor:'white',
  },
  label:{
    fontWeight: '500',
    marginLeft:10
  },
});
