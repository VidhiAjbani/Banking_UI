import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Transactions() {
    return (
        <View>
        <View style={styles.fixToText}>
            <Image style={styles.image} source={require('../../assets/amazon.png') } />
            <Text style={styles.text}>Amazon</Text>
            <Text style={styles.text2}>$200</Text>
        </View>
        <View style={styles.fixToText}>
            <Image style={styles.image} source={require('../../assets/flipkart.png') } />
            <Text style={styles.text}>Flipkart</Text>
            <Text style={styles.text2}>$150</Text>
        </View>
        <View style={styles.fixToText}>
            <Image style={styles.image} source={require('../../assets/snapdeal.png') } />
            <Text style={styles.text}>Snapdeal</Text>
            <Text style={styles.text2}>$180</Text>
        </View>
        <View style={styles.fixToText}>
            <Image style={styles.image} source={require('../../assets/lenskart.png') } />
            <Text style={styles.text}>Lenskart</Text>
            <Text style={styles.text2}>$50</Text>
        </View>
        <View style={styles.fixToText}>
            <Image style={styles.image} source={require('../../assets/jioMart.png') } />
            <Text style={styles.text}>Jio Mart</Text>
            <Text style={styles.text2}>$10</Text>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({

    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        backgroundColor:'#C4FFCA',
    },

    text:{
        fontWeight:'bold',
        alignSelf:'center',
        fontSize:18,
        marginRight:80,
    },

    text2:{
        fontWeight:'bold',
        alignSelf:'center',
        fontSize:15,
        marginRight:20,
    },

    image: {
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: "white",
        borderRadius: 150,
        width: 50,
        height: 50,
        marginLeft:10,
        marginBottom:10,
    },

});