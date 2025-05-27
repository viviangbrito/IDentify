import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBarWithFilter from '../components/SearchBarWithFilter';
import CaseCard from '../components/CaseCard';

export default function CasesScreen() {
  return (
    <View style={styles.container}>
      <SearchBarWithFilter />
      <CaseCard />
      <CaseCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f4f2',
  },
});