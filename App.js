import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
  const [goals, setGoals] = useState([]);

  const onButtonPress = (text) => {
    if (text)
      setGoals((prevState) => [
        ...prevState,
        { text: text, id: Math.random().toString() },
      ]);
  };

  const deleteGoalHandler = (id) => {
    setGoals((currentGoals) => currentGoals.filter((goal) => goal.id !== id));
  };

  return (
    <View style={styles.container}>
      <GoalInput onButtonPress={onButtonPress} />
      <View style={styles.listOfGoals}>
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              onItemDelete={deleteGoalHandler}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    height: '100%',
  },
  listOfGoals: {
    flex: 4,
  },
});

export default App;
