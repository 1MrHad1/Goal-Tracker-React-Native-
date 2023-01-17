import {StyleSheet,View,Text,Pressable} from 'react-native';

function GoalItem(props){
    return(
        <View style={styles.goalItems}>
        <Pressable 
        android_ripple={{color:'#210644'}} 
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed})=>pressed&& styles.pressedItem}
        // the style prop use above is for ios ripple effect when deleting an item
        >
            <Text style={styles.goalText}>{props.text}</Text>
             {/* accesing the txt prorty of frm the obj of text enterd buy user */}
        </Pressable>
        </View>
        
    );
};

export default GoalItem;

const styles=StyleSheet.create({
    goalItems:{
        margin:8,
        borderRadius:6,
        backgroundColor:'grey',
      },
      pressedItem:{
        opacity:0.5,
      },
      goalText:{
        color:'white',
        padding:8,
      }
});