import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, ScrollView } from 'react-native';
import ModalWarning from '../ModalWarning';
import PressButton from '../PressButton';
import WelcomeBar from '../WelcomeBar';
import DropdownMenu from '../DropdownMenu';
import Transactions from '../Transactions';

export default function Roll() {
    return (
        <ScrollView style={styles.scrollView}>
            <WelcomeBar/>
            <PressButton/>
            <DropdownMenu/>
            <Transactions/>
            <ModalWarning/>
        </ScrollView>
    );
  }

  const styles = StyleSheet.create({

    scrollView:
    {
      //backgroundColor: 'pink',
      marginHorizontal: 20,
    }
  
  });