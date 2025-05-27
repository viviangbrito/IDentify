import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBarWithFilter from '../components/SearchBarWithFilter';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SearchBarWithFilter />
      {/* Adicionar o resto */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f4f2',
  },
});

