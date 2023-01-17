import { useState } from 'react';
import { StyleSheet, View, FlatList,Button,Text } from 'react-native';
import GoalItem from './components/GoalItems';
import GolaInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [Goals,setGolas]= useState([]);
  const [modalIsVisible,setModalIsVisible]=useState(false);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText){
    setGolas(currentGoals=>[...currentGoals,
      // making the enterd txt by the user an object & giving it a key value
      {text: enteredGoalText, id:Math.random().toString()},
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id){
    
    setGolas(currentGoals=>{
      return currentGoals.filter((goal)=>goal.id!==id);
    });
  }

  return (
    <>
    <StatusBar style='auto'/>
    <View style={styles.appContainer}>
      <View style={styles.button}>
      <Button 
      title='Add a New Task' 
      color='#1e085a'
      onPress={startAddGoalHandler}/></View>
      <GolaInput visible={modalIsVisible} 
        onAddGoal={addGoalHandler} 
        onCancel={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
      <FlatList 
        data={Goals} 
        renderItem={(itemData=>{
          return <GoalItem 
          text={itemData.item.text}
          onDeleteItem={deleteGoalHandler}
          id={itemData.item.id}
          />;
      })
      }
      // we use the keyExtractor to get a key of the item which is attached to every item
      keyExtractor={(item,index)=>{
        return item.id;
      }}
      />
      </View>
      <View style={styles.text}>
        <Text>Note : Tap On The Task Once Finished To Clear It.</Text>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:16,
  },

  goalsContainer:{
    flex:5
  },
  button:{
    marginTop:50,
  },
  text:{
    alignItems:'center',
    marginBottom:55,
  }
});
