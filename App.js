import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal" />
        <Button title="Add Goal" />
      </View>
      <View style={styles.listOfGoals}>
        <Text>List of goals</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    height: '100%',
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: '#cccccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    width: `70%`,
    padding: 10,
    marginRight: 5,
  },
  listOfGoals: {
    flex: 4,
  },
});

export default App;
