import React from 'react';
import { StyleSheet, View, Text, Alert, TouchableOpacity, onPress, Image } from 'react-native';


const DropdownMenu = () => (
    <View style={styles.fixToText}>
        <Text style={styles.text}> Transactions</Text>
        <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('Press Ok to proceed')}
        >
            <Text style={styles.text2}>See All</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    text: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 25,
    },
    button: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        marginVertical: 8,
        marginHorizontal: 2,
    }
});

export default DropdownMenu;