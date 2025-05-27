import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { TextInput, Button, Menu, Provider, IconButton } from 'react-native-paper';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';

export default function NewCaseForm() {
  const [status, setStatus] = useState('Em andamento');
  const [statusMenuVisible, setStatusMenuVisible] = useState(false);
  const [evidencias, setEvidencias] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const handlePickFile = async () => {
    const result = await DocumentPicker.getDocumentAsync({ type: '*/*' });
    if (!result.canceled) {
      setEvidencias([...evidencias, result.assets[0]]);
    }
  };

  const handleTakePhoto = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (permission.status === 'granted') {
      const photo = await ImagePicker.launchCameraAsync();
      if (!photo.canceled) {
        setEvidencias([...evidencias, photo.assets[0]]);
      }
    } else {
      alert('Permissão de câmera negada.');
    }
  };

  const handleSalvar = () => {
    // Aqui você poderá integrar com o banco futuramente
    console.log('Salvando caso:', { titulo, descricao, status, evidencias });
  };

  return (
    <Provider>
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Título:</Text>
        <TextInput value={titulo} onChangeText={setTitulo} style={styles.input} mode="outlined" />

        <Text>Descrição:</Text>
        <TextInput
          value={descricao}
          onChangeText={setDescricao}
          style={[styles.input, { height: 80 }]}
          mode="outlined"
          multiline
        />

        <Text>Status:</Text>
        <Menu
          visible={statusMenuVisible}
          onDismiss={() => setStatusMenuVisible(false)}
          anchor={
            <Button mode="outlined" onPress={() => setStatusMenuVisible(true)}>
              {status}
            </Button>
          }>
          <Menu.Item onPress={() => setStatus('Em andamento')} title="Em andamento" />
          <Menu.Item onPress={() => setStatus('Finalizado')} title="Finalizado" />
          <Menu.Item onPress={() => setStatus('Arquivado')} title="Arquivado" />
        </Menu>

        <View style={styles.buttonRow}>
          <Button icon="camera" mode="outlined" onPress={handleTakePhoto}>
            Tirar foto
          </Button>
          <Button icon="file" mode="outlined" onPress={handlePickFile}>
            Arquivo
          </Button>
        </View>

        {evidencias.map((item, index) => (
          <View key={index} style={styles.evidenceItem}>
            <Text numberOfLines={1} style={{ flex: 1 }}>{item.name || `Foto ${index + 1}`}</Text>
            <IconButton icon="close" onPress={() => {
              setEvidencias(evidencias.filter((_, i) => i !== index));
            }} />
          </View>
        ))}

        <Button icon="content-save" mode="contained" onPress={handleSalvar} style={{ marginTop: 20 }}>
          Salvar caso
        </Button>
      </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#d8c8b8',
    borderRadius: 20,
  },
  input: {
    backgroundColor: '#f6f4f2',
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  evidenceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingHorizontal: 10,
    marginVertical: 4,
  },
});
