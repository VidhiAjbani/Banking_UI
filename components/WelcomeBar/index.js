import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function WelcomeBar() {
    return (
        <View>
        <View style={styles.fixToText}>
            <Text style={styles.text} >
            Welcome {"\n"}Vidhi Ajbani!
            </Text>
            <Image style={styles.image} source={require('../../assets/profile.jpg') } />
        </View>
        <View>
            <Image style={styles.image2} source={require('../../assets/onlineBanking.jpg') } />
        </View>
        </View>
    );
  }

  const styles = StyleSheet.create({

    text:
    {
      fontSize:25,
      marginTop:50,
      fontWeight:'bold',
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical:10,
      },
      image: {
        marginTop:35,
        alignSelf: 'center',
        backgroundColor: "white",
        borderRadius: 150,
        width:100,
        height:100,
      },
      image2:{

        alignSelf: 'center',
        backgroundColor: "white",
        width:350,
        height:200,
        marginVertical:20,          

      }
  
  });