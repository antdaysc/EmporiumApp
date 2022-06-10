import React, { Component,useState,useRef} from 'react'
import { Text, View,StyleSheet,Button,StatusBar,TextInput,Image, TouchableOpacity,Modal} from 'react-native';
import { Paragraph } from 'react-native-paper';
import Header from '../Header';
import { useTranslation } from 'react-i18next';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import SignatureScreen from "react-native-signature-canvas";
import { AntDesign } from '@expo/vector-icons';
import {useNavigation } from '@react-navigation/native';

export default function Mudanza({onOk}) {
    const {t,i18n}= useTranslation()
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(true);
    const [usuario, setUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [direccion, setdireccion] = useState('');
    const [visible, setVisible] = useState(false);
    const [signature, setSign] = useState(false);
    const [signing, setsigning] = useState(false);
    const [modal, setmodal] = useState(false);
    const [name, setname] = useState('Antonio Diaz');
    const [today, settoday] = useState(new Date())
    const ref = useRef();
    const navigation = useNavigation(); 
  

      const style = `body,html { width: 100%; height: 100; }
      .m-signature-pad--footer {
        display: none;
    }
                    `;
  const handleOK = (signature) => {
    console.log(signature);
    onOK(signature);
  };
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };

      const readData = async () => {
        try {
          if (contraseña !== '' && usuario !== '' && direccion !== '') {
            navigation.navigate('Menu');
          }
          else {
            alert("Favor de llenar todos los campos")
          }
        } catch (e) {
          alert(e)
        }
    }

      const handleClear = () => {
        console.log('bien')
        ref.current.clearSignature();
      };

      const handlePreview = () => {
        setmodal(true)
      };

      const handleClose = () => {
        setmodal(false)
      };
    
      const handleConfirm = () => {
        setSign(true)
        setsigning(false)
        console.log("end");
        ref.current.readSignature();
      };
      
        return (
            <View>
                <Header>{t('moveout')}</Header>
                <View style={styles.container}>
                  {modal ? (
                  <Modal
                  trasparent={true}
                  visible={true}>
                    <View style={{backgroundColor:"#000000aa",flex:1}}>
                      <View style={styles.modal}>
                        <TouchableOpacity onPress={handleClose}>
                        <Text style={{textAlign:'right',fontSize:16}}>X</Text>
                        </TouchableOpacity>
                        <Paragraph style={{padding:10}}>This letter is to inform you of my official 30-day notice to vacate. I will move out and terminate my lease for the property located at 5th avenue 67 on {date.toString()}.</Paragraph>

                        <Paragraph style={{padding:10}}>I am aware a final inspection of the home will take place and potentially impact my security deposit. Please let me know if the full amount is not being returned and what deductions were made.

You can return my security deposit to my new address {direccion}.</Paragraph>

<Paragraph style={{padding:10}}>Should you need to reach me at any point over the move-out period or beyond, please don't hesitate to contact me via phone {usuario} or email {contraseña}.
</Paragraph>
<Paragraph style={{padding:10}}>Sincerely,

{name}
</Paragraph>
                      </View>
                    </View>
                  </Modal>
                  ) : null
                  }
                    <View style={styles.dateselect}>
                      <View style={styles.icono}>
                        <Entypo name="calendar" size={24} color="black" />
                      </View>
                      <View>
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={'date'}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        minimumDate={new Date()}
                        style={{width:140}}
                        />
                      </View>
                    </View>
                    <View style={styles.list}>
                    <View style={styles.iconos}>
                        <Entypo name="phone" size={24} color="black" />
                      </View>
                      <TextInput
                      style={styles.input}
                      onChangeText={usuario => setUsuario(usuario)}
                      defaultValue={usuario}
                      placeholder="Número de contacto"
                      keyboardType="number-pad"
                    />
                    </View>
                    <View style={styles.list}>
                    <View style={styles.iconos}>
                    <MaterialIcons name="email" size={24} color="black" />
                    </View>
                      <TextInput
                      style={styles.input}
                      onChangeText={contraseña => setContraseña(contraseña)}
                      defaultValue={contraseña}
                      placeholder="Correo electrónico"
                    />
                    </View>
                    <View style={styles.list}>
                    <View style={styles.iconos}>
                    <FontAwesome5 name="house-user" size={24} color="black" />
                    </View>
                      <TextInput
                      style={styles.input}
                      onChangeText={direccion => setdireccion(direccion)}
                      defaultValue={direccion}
                      placeholder="Dirección envío"
                    />
                    </View>
                    
                    <View style={styles.list}>
                    <View style={styles.iconos}>
                    <FontAwesome5 name="signature" size={24} color="black" />
                    </View>
                    <TouchableOpacity onPress={() => setsigning(!signing)}>
                      <View style={styles.firmar}>
                        <Text style={styles.botonsin}>Haz click para {!signing ? 'firmar':'quitar'}  {!signing && signature ? (<AntDesign name="checkcircle" size={24} color="green" />) : null}</Text>
                      </View>
                    </TouchableOpacity>
                    </View>
                    {signing ? (
                      <View style={styles.sign}>
                    <SignatureScreen
                      onOK={handleOK}
                      ref={ref} 
                      webStyle={style}/>
                      <View style={styles.row}>
                      <Button title="Clear" onPress={handleClear}/>
                      <Button title="Confirm" onPress={handleConfirm}/>
                      </View>
                      </View>
                    ):  (
                      <View style={styles.botonrow}>
                        <TouchableOpacity style={styles.botoncontainer2} onPress={handlePreview}>
                          <Text style={styles.bott}>
                            Preview
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botoncontainer} onPress={readData}>
                          <Text
                            style={styles.bott} >
                            Send
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}
                </View>

            </View>
        )
}


const styles = StyleSheet.create({
    container: {
       backgroundColor: '#fff',
       height: '90%',
       alignItems:'center'
     },
     row: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      alignItems: "center",
    },
    modal:{
      padding:10,
      marginTop:100,
      marginLeft:5,
      marginRight:5,
      backgroundColor: '#fff'
    },
    botoncontainer:{
      marginRight: 40,
      marginLeft: 40,
      marginTop: 120,
      paddingTop: 20,
      paddingBottom: 20,
      width:150,
      borderRadius: 30,
      borderWidth: 1,
      backgroundColor: '#0052FF',
      borderColor: '#fff',
    },
    botoncontainer2:{
      marginRight: 40,
      marginLeft: 40,
      marginTop: 120,
      paddingTop: 20,
      paddingBottom: 20,
      width:150,
      borderRadius: 30,
      borderWidth: 1,
      backgroundColor: 'green',
      borderColor: '#fff',
    },
      dateselect:{
        marginTop:60,
        borderRadius:8,
        width:'80%',
        flexDirection: 'row',
        marginLeft:5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
          },
          shadowOpacity: 0.10,
          shadowRadius: 12.35,
          elevation: 8,
      },
      icono:{
        width:50,
        marginLeft:15
      },
      iconos:{
        width:50,
        paddingTop:15,
        marginLeft:0
      },
      label:{
        fontWeight: '500',
        marginLeft:10
      },
      sign:{
        width:'80%',
        height:'40%'
      },
      bott:{
        textAlign: 'center',
        color: 'white',
        fontWeight:'bold',
      },
      input: {
        height: 40,
        marginTop: 12,
        marginBottom:12,
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        width:250
      },
      list:{
        marginTop:10,
        width: 300,
        flexDirection:'row'
      },
      firmar:{
        paddingTop:20,
        borderColor:'grey',
      },
      botonsin:{
        fontWeight: '800',
        fontSize:18,
      },
      row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
      },
      botonrow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "110%",
        alignItems: "center",
      },
    })
