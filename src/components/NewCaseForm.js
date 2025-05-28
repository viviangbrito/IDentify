import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { TextInput, IconButton } from 'react-native-paper';
import StatusMenu from '../components/StatusMenu';
import EvidencesSection from './EvidencesSection';

export default function NewCaseForm() {

  const [status, setStatus] = useState('Em andamento');

  return (
  <ScrollView contentContainerStyle={styles.scrollContainer}>
  <View style={styles.NewCaseContainer}>
    <View style={styles.CaseInfo}>
      <TextInput
        label="Título:"
        mode="outlined"
        style={[styles.Input, {borderColor: '#002b4e' }]}
            outlineColor="#002b4e"
            activeOutlineColor="#002b4e"
      />
      <TextInput
        label="Descrição:"
        mode="outlined"
        style={[styles.Input, {borderColor: '#002b4e' }]}
            outlineColor="#002b4e"
            activeOutlineColor="#002b4e"
        multiline
        numberOfLines={4}
        />
          <StatusMenu status={status} setStatus={setStatus} />
          <TextInput
            label="Data de ocorrência:"
            mode="outlined"
            keyboardType="numeric"
            style={[styles.Input, {borderColor: '#002b4e' }]}
            outlineColor="#002b4e"
            activeOutlineColor="#002b4e"
          />
        
        <View style={styles.divider}>
          <TextInput
            label="Data de abertura:"
            mode="outlined"
            keyboardType="numeric"
            style={[styles.InputDivider, {borderColor: '#002b4e' }]}
            outlineColor="#002b4e"
            activeOutlineColor="#002b4e"
          />
          <TextInput
            label="Data de fechamento:"
            mode="outlined"
            style={[styles.InputDivider, {borderColor: '#002b4e' }]}
            outlineColor="#002b4e"
            activeOutlineColor="#002b4e"
            keyboardType="numeric"
          />
        </View>
    </View>
    <View style={styles.PacienteInfo}>
      <TextInput
        label="Nome do paciente:"
        mode="outlined"
        style={[styles.Input, {borderColor: '#002b4e' }]}
            outlineColor="#002b4e"
            activeOutlineColor="#002b4e"
      />
      <View style={styles.divider}>
        <TextInput
        label="CPF:"
        mode="outlined"
        style={[styles.InputDivider, {borderColor: '#002b4e' }]}
            outlineColor="#002b4e"
            activeOutlineColor="#002b4e"
        keyboardType="numeric"
        />
        <TextInput
          label="RG:"
          mode="outlined"
          style={[styles.InputDivider, {borderColor: '#002b4e' }]}
            outlineColor="#002b4e"
            activeOutlineColor="#002b4e"
          keyboardType="numeric"
        />
      </View>
    </View>
    <View style={styles.ExtraInfo}>
      <EvidencesSection />
    </View>
  </View>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  NewCaseContainer: {
    zIndex: 1,
    margin: 20,
    padding: 15,
    backgroundColor: '#e6ddd3',
    borderRadius: 10,
    width: '90%',
  },
  CaseInfo: {
    borderBottomWidth: 1,
    borderBottomColor: '#002b4e',
    paddingBottom: 20,
  },
  PacienteInfo: {
    paddingBottom: 20,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#002b4e',
  },
  ExtraInfo: {
    marginBottom: 20,
  },
  Input: {
    flex: 1,
    marginBottom: 15,
    borderRadius: 15,
  },
  InputDivider: {
    flex: 1,
    marginBottom: 15,
    borderRadius: 15,
  },
  divider: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
  },
  scrollContainer: {
    paddingBottom: 10,
    flex: 1,
  },
});
