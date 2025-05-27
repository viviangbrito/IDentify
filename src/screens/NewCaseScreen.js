import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NewCaseScreen() {
  return (
    <View style={styles.container}>
      <Text>Novo Caso</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
