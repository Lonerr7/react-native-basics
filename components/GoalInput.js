import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

const GoalInput = ({ onButtonPress }) => {
  const [text, setText] = useState('');

  const onTextChange = (newText) => {
    setText(newText);
  };

  const onTextAdd = () => {
    onButtonPress(text);
    setText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal"
        value={text}
        onChangeText={onTextChange}
      />
      <Button title="Add Goal" onPress={onTextAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default GoalInput;
