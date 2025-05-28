import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Menu, Text } from 'react-native-paper';

export default function StatusMenu({ status, setStatus }) {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleSelect = (value) => {
    setStatus(value);
    closeMenu();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Status:</Text>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button mode="outlined" 
          onPress={openMenu}           
          contentStyle={{ borderColor: '#123458', backgroundColor: '#f6f4f2' }}
          labelStyle={{ color: '#144C7A' }}
          > 
            {status || 'Selecionar status'}
          </Button>
        }
        >
        <Menu.Item onPress={() => handleSelect('Em andamento')} title="Em andamento" />
        <Menu.Item onPress={() => handleSelect('Finalizado')} title="Finalizado" />
        <Menu.Item onPress={() => handleSelect('Arquivado')} title="Arquivado" />
      </Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    zIndex: 1, // para garantir que o menu apareça por cima
  },
  label: {
    fontSize: 12,
    marginBottom: 4,
    borderColor: '#123458',
    color: '#123458',
  },
  menuButton: {
    backgroundColor: '#f6f4f2',
    borderColor: '#123458',
  },
});
