import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const EmptyState = ({title, message, iconName}) => {
  return (
    <View style={styles.container}>
      <Icon name={iconName || 'note'} size={64} color="#ccc" />
      <Text style={styles.title}>{title || 'No Notes Yet'}</Text>
      <Text style={styles.message}>
        {message || 'Tap the + button to create your first note!'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#666',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default EmptyState;