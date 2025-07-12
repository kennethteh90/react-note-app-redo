# NoteApp - React Native

A beautiful, cross-platform note-taking app built with React Native. Features a modern UI with smooth navigation, persistent storage, and intuitive user experience.

## Features

- 📱 **Cross-platform**: Works on both iOS and Android
- 🎨 **Modern UI**: Beautiful Material Design-inspired interface
- 💾 **Persistent Storage**: Notes are saved locally using AsyncStorage
- 🔄 **Real-time Updates**: Changes are saved automatically
- 📝 **Rich Text Editing**: Clean and intuitive note editor
- 🗑️ **Delete Notes**: Long press to delete notes with confirmation
- 📅 **Date Tracking**: Automatic timestamps for notes
- ⚡ **Fast Performance**: Optimized for smooth scrolling and editing

## Screenshots

The app features two main screens:

1. **Note List Screen**: Displays all notes in a beautiful card layout with preview text and creation dates
2. **Note Editor Screen**: Full-featured editor with title and body fields, character count, and save functionality

## Tech Stack

- **React Native 0.72.6** - Cross-platform mobile development
- **React Navigation 6** - Screen navigation and routing
- **AsyncStorage** - Local data persistence
- **React Native Vector Icons** - Material Design icons
- **React Native Safe Area Context** - Safe area handling

## Prerequisites

Before running this app, make sure you have the following installed:

- **Node.js** (v16 or later)
- **React Native CLI** (`npm install -g @react-native-community/cli`)
- **Android Studio** (for Android development)
- **Xcode** (for iOS development, macOS only)
- **Java Development Kit (JDK)** 11 or later

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd note-app-react-native
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install iOS dependencies** (macOS only)
   ```bash
   cd ios && pod install && cd ..
   ```

## Running the App

### Android

1. **Start Metro bundler**
   ```bash
   npm start
   # or
   yarn start
   ```

2. **Run on Android device/emulator**
   ```bash
   npm run android
   # or
   yarn android
   ```

### iOS (macOS only)

1. **Start Metro bundler**
   ```bash
   npm start
   # or
   yarn start
   ```

2. **Run on iOS simulator/device**
   ```bash
   npm run ios
   # or
   yarn ios
   ```

## Building for Production

### Android

1. **Generate a signed APK**
   ```bash
   npm run build:android
   # or
   yarn build:android
   ```

2. **The APK will be located at**: `android/app/build/outputs/apk/release/app-release.apk`

### iOS

1. **Build for release**
   ```bash
   npm run build:ios
   # or
   yarn build:ios
   ```

2. **The app will be archived in Xcode**

## Project Structure

```
src/
├── App.js                 # Main app component with navigation
├── screens/
│   ├── NoteListScreen.js  # Note list with cards and FAB
│   └── NoteEditorScreen.js # Note editor with save functionality
```

## Key Features Implementation

### Navigation
- Stack navigation between note list and editor
- Custom header styling with save button
- Unsaved changes detection and confirmation

### Data Management
- AsyncStorage for persistent local storage
- Automatic saving of notes
- Real-time updates across screens

### UI/UX
- Material Design-inspired components
- Smooth animations and transitions
- Responsive layout for different screen sizes
- Keyboard-aware editing experience

### Error Handling
- Graceful error handling for storage operations
- User-friendly error messages
- Confirmation dialogs for destructive actions

## Development

### Adding New Features

1. **New Screens**: Add to `src/screens/` and update navigation in `App.js`
2. **Components**: Create reusable components in `src/components/`
3. **Utilities**: Add helper functions in `src/utils/`

### Styling

The app uses React Native's StyleSheet API with a consistent design system:
- Primary color: `#6200ee` (Material Design Purple)
- Background: `#f5f5f5`
- Text colors: `#333`, `#666`, `#999`
- Shadows and elevation for depth

### State Management

Currently uses React hooks (useState, useEffect) for local state management. For larger apps, consider:
- Redux for global state
- Context API for theme/user preferences
- React Query for server state

## Troubleshooting

### Common Issues

1. **Metro bundler issues**
   ```bash
   npm start -- --reset-cache
   ```

2. **Android build issues**
   ```bash
   cd android && ./gradlew clean && cd ..
   ```

3. **iOS build issues**
   ```bash
   cd ios && pod deintegrate && pod install && cd ..
   ```

4. **Dependencies issues**
   ```bash
   rm -rf node_modules && npm install
   ```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on both platforms
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For issues and questions:
- Check the troubleshooting section
- Review React Native documentation
- Open an issue on GitHub

---

Built with ❤️ using React Native
