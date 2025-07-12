import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NoteListScreen from './screens/NoteListScreen';
import NoteEditorScreen from './screens/NoteEditorScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="NoteList"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#6200ee',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen 
            name="NoteList" 
            component={NoteListScreen} 
            options={{ title: 'My Notes' }}
          />
          <Stack.Screen 
            name="NoteEditor" 
            component={NoteEditorScreen} 
            options={{ title: 'Edit Note' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
