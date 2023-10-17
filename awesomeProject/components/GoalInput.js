import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Pressable, Text, Modal } from 'react-native';
import PersonIcon from '@mui/icons-material/Person';

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
   () => setIsModalVisible(() => !isModalVisible);

  function textInputHandler(enteredText) {
    setEnteredText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredText(''); 
  }

  return (
    <View style={styles.inputContainer}>
      <PersonIcon name='profile' onPress={handelModal}></PersonIcon>
      <TextInput
        placeholder="ADD YOUR GOAL!"
        style={styles.textInput}
        onChangeText={textInputHandler}
        value={enteredGoalText}
      />
      <Pressable
      style={styles.buttonText}
      onPress={addGoalHandler} 
      >
        <Text>ADD</Text>
      </Pressable>
      <Modal
  animationType="slide"
  visible={isModalVisible} 
  onRequestClose={ () => setIsModalVisible(() => !isModalVisible) }
  >
   <View style={styles.modaltext}> 
    <Text>Welcome, Jeyo Quintana</Text>
    </View> 
</Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    padding: 30,
    flex: 1,
  },
  buttonText: {
    backgroundColor: 'white',
    margin:10,
    alignItems: 'left',
    justifyContent: 'center',
    padding: 10

  },
  modaltext:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
});