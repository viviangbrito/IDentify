import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

export default function CaseCard() {
    return (
        <View style={styles.card}>
            
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#e6ddd3',
        borderRadius: 8,
        padding: 15,
        marginVertical: 8,
        shadowColor: '#3C260D',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '90%',
        alignSelf: 'center',
    },
})