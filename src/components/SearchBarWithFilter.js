import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, IconButton } from 'react-native-paper';

export default function SearchBarWithFilter() {
  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        placeholder="Buscar caso"
        left={<TextInput.Icon icon="magnify" color="#123458" />}
        right={<TextInput.Icon icon="filter-variant" color="#123458" />}
        style={styles.input}
        theme={{
          colors: {
            primary: '#123458',    
            outline: '#123458',     
            text: '#123458',       
            placeholder: '#123458', 
          },
        }}
      />
      <IconButton
        icon="account-circle"
        size={35}
        iconColor="#123458"
        style={styles.profileIcon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    marginTop: 25,
  },
  input: {
    flex: 1,
    height: 45,
    backgroundColor: '#f6f4f2',
    borderRadius: 20,
  },
  profileIcon: {
    marginLeft: 10,
  },
});
