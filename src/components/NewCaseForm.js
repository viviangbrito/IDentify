import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatusMenu from '../components/StatusMenu';
import EvidencesSection from './EvidencesSection';

export default function NewCaseForm() {
  const [status, setStatus] = useState('Em andamento');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ fontSize: 18, textAlign: 'center', margin: 15 }}>
        Novo Caso </Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.NewCaseContainer}>
            <View style={styles.CaseInfo}>
              <TextInput
                label="Título:"
                mode="outlined"
                style={styles.Input}
                outlineColor="#002b4e"
                activeOutlineColor="#002b4e"
              />
              <TextInput
                label="Descrição:"
                mode="outlined"
                style={styles.Input}
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
                style={styles.Input}
                outlineColor="#002b4e"
                activeOutlineColor="#002b4e"
              />

              <View style={styles.divider}>
                <TextInput
                  label="Data de abertura:"
                  mode="outlined"
                  keyboardType="numeric"
                  style={styles.InputDivider}
                  outlineColor="#002b4e"
                  activeOutlineColor="#002b4e"
                />
                <TextInput
                  label="Data de fechamento:"
                  mode="outlined"
                  keyboardType="numeric"
                  style={styles.InputDivider}
                  outlineColor="#002b4e"
                  activeOutlineColor="#002b4e"
                />
              </View>
            </View>

            <View style={styles.PacienteInfo}>
              <TextInput
                label="Nome do paciente:"
                mode="outlined"
                style={styles.Input}
                outlineColor="#002b4e"
                activeOutlineColor="#002b4e"
              />
              <View style={styles.divider}>
                <TextInput
                  label="CPF:"
                  mode="outlined"
                  style={styles.InputDivider}
                  outlineColor="#002b4e"
                  activeOutlineColor="#002b4e"
                  keyboardType="numeric"
                />
                <TextInput
                  label="RG:"
                  mode="outlined"
                  style={styles.InputDivider}
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
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  NewCaseContainer: {
    marginHorizontal: 20,
    padding: 15,
    backgroundColor: '#e6ddd3',
    borderRadius: 10,
  },
  CaseInfo: {
    borderBottomWidth: 1,
    borderBottomColor: '#002b4e',
    paddingBottom: 20,
  },
  PacienteInfo: {
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#002b4e',
  },
  ExtraInfo: {
    marginBottom: 20,
  },
  Input: {
    marginBottom: 15,
    borderRadius: 15,
    fontSize: 12,
  },
  InputDivider: {
    flex: 1,
    marginBottom: 15,
    borderRadius: 15,
    fontSize: 12,
  },
  divider: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
  },
  scrollContainer: {
    paddingBottom: 90,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
});
