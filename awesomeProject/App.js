import { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View, Pressable, TextInput } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import PersonIcon from '@mui/icons-material/Person';

export default function App(){
  const [courseGoals, setCourseGoals] = useState([]);
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler(enteredGoalText){
    setCourseGoals((currentCourseGoals) => 
    [...currentCourseGoals,
    {text: enteredGoalText, key: Math.random().toString()}]);

  };

  return (
    <View style = {styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />

      {/*ScrollView*/}
      {/*<View style={[styles.goalsListContainer, styles.scrollViewContainer]}>
        <ScrollView>
          {courseGoals.map((goal) => (
            <GoalItem key={goal.key} text={goal.text} />
          ))}
        </ScrollView>
          </View>*/}

 
      {/*FlatList*/}
      <View style = {[styles.goalListContainer, styles.FlatListContainer]}>
        <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
        <GoalItem key={itemData.item.key} text={itemData.item.text} />
      )}
    />
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 100,
    backgroundColor: '#183D3D',
  },
  scrollViewContainer: {
    maxHeight: 300,
  },
  FlatListContainer: {
    maxHeight: 300,
  },

});