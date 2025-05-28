import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';
import { Button } from 'react-native-paper';

export default function EvidencesSection() {
  const [evidences, setEvidences] = useState([]);
  const [location, setLocation] = useState(null);

  const askPermissions = async () => {
    const { status: cameraStatus } = await ImagePicker.requestCameraPermissionsAsync();
    const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync();

    if (cameraStatus !== 'granted' || mediaStatus !== 'granted') {
      Alert.alert('Permissão necessária', 'Precisamos de acesso à câmera e à galeria.');
      return false;
    }
    return true;
  };

  const handleAddEvidence = async () => {
    const granted = await askPermissions();
    if (!granted) return;

    Alert.alert(
      'Adicionar evidência',
      'Escolha uma opção:',
      [
        {
          text: 'Tirar foto',
          onPress: async () => {
            const result = await ImagePicker.launchCameraAsync({ base64: false });
            if (!result.canceled) {
              setEvidences([...evidences, { name: 'Foto tirada', uri: result.assets[0].uri }]);
            }
          }
        },
        {
          text: 'Selecionar arquivo',
          onPress: async () => {
            const result = await DocumentPicker.getDocumentAsync({ type: ['image/*', 'application/pdf'] });
            if (result.type === 'success') {
              setEvidences([...evidences, { name: result.name, uri: result.uri }]);
            }
          }
        },
        { text: 'Cancelar', style: 'cancel' }
      ]
    );
  };

  const handleGetLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Permissão de localização é necessária.');
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setLocation(coords);
    Alert.alert('Localização capturada', `Lat: ${coords.latitude}, Lon: ${coords.longitude}`);
  };

  const removeEvidence = (index) => {
    const newList = [...evidences];
    newList.splice(index, 1);
    setEvidences(newList);
  };

  const renderEvidenceItem = ({ item, index }) => (
    <View style={styles.evidenceItem}>
      <Text style={styles.evidenceText}>{item.name}</Text>
      <TouchableOpacity onPress={() => removeEvidence(index)}>
        <Text style={styles.removeButton}>x</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <Button
          icon="map-marker"
          mode="outlined"
          style={styles.actionButton}
          labelStyle={styles.buttonLabel}
          onPress={handleGetLocation}
        >
          Localização
        </Button>
        <Button
          icon="paperclip"
          mode="outlined"
          style={styles.actionButton}
          labelStyle={styles.buttonLabel}
          onPress={handleAddEvidence}
        >
          Evidencias
        </Button>
      </View>

      <FlatList
        data={evidences}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderEvidenceItem}
        style={styles.evidenceList}
      />

      {location && (
        <Text style={styles.locationText}>
          📍 {location.latitude.toFixed(4)}, {location.longitude.toFixed(4)}
        </Text>
      )}

      <Button
        icon="content-save"
        mode="outlined"
        style={styles.saveButton}
        labelStyle={styles.buttonLabel}
        onPress={() => Alert.alert('Salvar', 'Caso salvo!')}
      >
        Salvar caso
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  actionButton: {
    borderColor: '#002b4e',
    borderWidth: 1.5,
    borderRadius: 10,
  },
  buttonLabel: {
    color: '#002b4e',
    fontWeight: 'bold',
  },
  evidenceList: {
    marginVertical: 10,
  },
  evidenceItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  evidenceText: {
    color: '#002b4e',
  },
  removeButton: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#002b4e',
  },
  locationText: {
    textAlign: 'center',
    color: '#002b4e',
    marginTop: 10,
    fontWeight: '600',
  },
  saveButton: {
    marginTop: 20,
    borderColor: '#002b4e',
    borderWidth: 1.5,
    borderRadius: 10,
  },
});
