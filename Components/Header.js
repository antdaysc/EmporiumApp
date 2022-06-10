
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header({children}) {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>{children}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header:{
       height:90,
       paddingTop:50,
       backgroundColor: '#0052FF' 
    },
    title:{
        textAlign: 'center',
        color: '#fff',
        fontSize:20,
        fontWeight:'bold',
    }
});