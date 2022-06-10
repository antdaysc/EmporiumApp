
import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

function AppButton({children,style,onPress}) {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
       <Text
       style={style.appButton,style} >
         {children}
       </Text>
      </TouchableOpacity>
    );
   }
   
   export default AppButton;

   const styles = StyleSheet.create({
    container:{
        marginRight: 40,
        marginLeft: 40,
        marginTop: 70,
        paddingTop: 20,
        paddingBottom: 20,
        width:200,
        borderRadius: 30,
        borderWidth: 1,
        backgroundColor: '#0052FF',
        borderColor: '#fff',
      }
        });