import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NoteEditorScreen = ({ route, navigation }) => {
  const { note, notes } = route.params;
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      if (!hasChanges) {
        return;
      }

      e.preventDefault();

      Alert.alert(
        'Discard changes?',
        'You have unsaved changes. Are you sure you want to leave?',
        [
          { text: 'Don\'t leave', style: 'cancel', onPress: () => {} },
          { text: 'Discard', style: 'destructive', onPress: () => navigation.dispatch(e.data.action) },
        ]
      );
    });

    return unsubscribe;
  }, [navigation, hasChanges]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={saveNote} style={styles.headerButton}>
          <Icon name="save" size={24} color="#fff" />
        </TouchableOpacity>
      ),
    });
  }, [title, body, hasChanges]);

  const saveNote = async () => {
    try {
      const updatedNote = {
        ...note,
        title: title.trim() || 'Untitled Note',
        body: body.trim(),
        updatedAt: new Date().toISOString(),
      };

      const updatedNotes = notes.map(n => 
        n.id === note.id ? updatedNote : n
      );

      await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
      setHasChanges(false);
      
      Alert.alert('Success', 'Note saved successfully!', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } catch (error) {
      console.error('Error saving note:', error);
      Alert.alert('Error', 'Failed to save note. Please try again.');
    }
  };

  const handleTitleChange = (text) => {
    setTitle(text);
    setHasChanges(true);
  };

  const handleBodyChange = (text) => {
    setBody(text);
    setHasChanges(true);
  };

  const clearNote = () => {
    Alert.alert(
      'Clear Note',
      'Are you sure you want to clear this note?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear',
          style: 'destructive',
          onPress: () => {
            setTitle('');
            setBody('');
            setHasChanges(true);
          },
        },
      ]
    );
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.editorContainer}>
          <View style={styles.titleContainer}>
            <TextInput
              style={styles.titleInput}
              value={title}
              onChangeText={handleTitleChange}
              placeholder="Note title..."
              placeholderTextColor="#999"
              multiline
              maxLength={100}
            />
            <Text style={styles.characterCount}>
              {title.length}/100
            </Text>
          </View>

          <View style={styles.bodyContainer}>
            <TextInput
              style={styles.bodyInput}
              value={body}
              onChangeText={handleBodyChange}
              placeholder="Start writing your note..."
              placeholderTextColor="#999"
              multiline
              textAlignVertical="top"
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.toolbar}>
        <TouchableOpacity style={styles.toolbarButton} onPress={clearNote}>
          <Icon name="clear" size={24} color="#666" />
          <Text style={styles.toolbarButtonText}>Clear</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.toolbarButton} onPress={saveNote}>
          <Icon name="save" size={24} color="#6200ee" />
          <Text style={[styles.toolbarButtonText, { color: '#6200ee' }]}>Save</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  editorContainer: {
    padding: 16,
    flex: 1,
  },
  titleContainer: {
    marginBottom: 20,
  },
  titleInput: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    padding: 0,
    marginBottom: 8,
    minHeight: 40,
  },
  characterCount: {
    fontSize: 12,
    color: '#999',
    textAlign: 'right',
  },
  bodyContainer: {
    flex: 1,
  },
  bodyInput: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    padding: 0,
    flex: 1,
    minHeight: 200,
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  toolbarButton: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  toolbarButtonText: {
    fontSize: 12,
    marginTop: 4,
    color: '#666',
  },
  headerButton: {
    marginRight: 16,
  },
});

export default NoteEditorScreen;