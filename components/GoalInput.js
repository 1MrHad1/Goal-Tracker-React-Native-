import { useState } from 'react';
import {StyleSheet,View,TextInput,Button,Modal,Image} from 'react-native';
function GolaInput(props){
const [enteredGoalText,setEnteredGoalText]=useState('');

function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText);
  };

function addGoalHandler(){
    props.onAddGoal(enteredGoalText);
    // setting the enteredGoalText to an empty string so that after user inputs a value it becomes empty or to clear it
    setEnteredGoalText('');
}
    return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/task.png')}/>
        <TextInput 
        style={styles.textInput} 
        placeholder='Your Task!' 
        onChangeText={goalInputHandler}
        value={enteredGoalText}/>
        {/* the value prop is used to reflect the clearing of the inputed vaule  */}
        <View style={styles.butonContainer}>
          <View style={styles.button}>
        <Button title='Add Task' onPress={addGoalHandler} color='black' />
          </View>
          <View style={styles.button}>
        <Button title='Cancle' onPress={props.onCancel } color='grey' />
          </View>
        </View>
      </View>
    </Modal>  
    );
}

export default GolaInput;

const styles= StyleSheet.create({  
  inputContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:16,
    backgroundColor:'white'
  },
  textInput:{
    borderWidth:1,
    borderColor:'#e4d0ff',
    backgroundColor:'#e4d0ff',
    color:'#120438',
    borderRadius:6,
    width:'100%' ,
    padding:16,
  },
  image:{
    width:100,
    height:100,
    margin:20
  },
  butonContainer:{
    marginTop:16,
    flexDirection:'row',
  },
  button:{
    width:100,
    marginHorizontal:8,
  }
  
})