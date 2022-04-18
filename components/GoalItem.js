import { StyleSheet, View, Text, Pressable } from 'react-native';

const GoalItem = ({ text, id, onItemDelete }) => {
  const itemDeleteHandler = () => {
    onItemDelete(id);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#BC2D04' }}
        onPress={itemDeleteHandler}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    marginBottom: 10,
    borderRadius: 6,
    backgroundColor: '#5e0acc',

  },
  pressedItem: {
    backgroundColor: '#BC2D04',
    borderRadius: 6,
  },
  goalText: {
    color: '#fff',
    fontWeight: '500',
    padding: 8,
  },
});

export default GoalItem;
