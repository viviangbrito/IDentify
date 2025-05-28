import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NewCaseForm from '../components/NewCaseForm';

export default function NewCaseScreen() {
  return (
    <View style={styles.container}>
      <NewCaseForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
