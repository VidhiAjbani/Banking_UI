import React from 'react';
import { StyleSheet,View,Text, Alert, TouchableOpacity, onPress, Image} from 'react-native';


const PressButton = () => (
  <View>
    <View>
      <Text style={styles.text}> Categories</Text>
    </View>
    <View style={styles.container}>
      <View style={styles.fixToText}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('Press Ok to proceed')}
        >
          <Image style={styles.image} source={require('../../assets/money.jpg') } />
          <Text style={styles.text2}>Send Money</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('Press Ok to proceed')}
        >
          <Image style={styles.image} source={require('../../assets/bill.png') } />
          <Text style={styles.text2}>Pay Bills</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('Press Ok to proceed')}
        >
          <Image style={styles.image} source={require('../../assets/grocery.png') } />
          <Text style={styles.text2}>Grocery</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('Press Ok to proceed')}
        >
          <Image style={styles.image} source={require('../../assets/bank.png') } />
          <Text style={styles.text2}>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 0,
    marginVertical: 12,
  },
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
  text2: {
    fontWeight: 'bold',
    color:'white',
  },
  image: {
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: "white",
    borderRadius: 150,
    width: 50,
    height: 50,
  },
  button: {
    backgroundColor: '#0A6EA8',
    paddingHorizontal: 10,
    marginVertical:8,
    marginHorizontal:2,
  }
});

export default PressButton;