import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Modal, { ModalProps } from 'react-native-modal';

interface Props extends ModalProps {
    onSave: Function,
    visibleModal: boolean,
}

type State={
     title: string,
     body: string,
} 

const ModalView: React.FC<Props> = (props) => {

    const [state, setState] = useState<State>({title:"",body:""});

    const handleChangeTitle=useCallback((value)=>{
        setState({...state,title:value})
    },[state])

    const handleChangeBody=useCallback((value)=>{
        setState({...state,body:value})
    },[state])

    return (
        <Modal
        {...props}
        isVisible={props.isVisible}
        onModalHide={props.onModalHide}>
        <View style= {styles.viewContainer}>
        <Text style={{color: "red", fontWeight:"bold"}}>Add Post</Text>
        <TextInput
            {...props}
            style={styles.input}
            value={state.title}
            onChangeText={handleChangeTitle}
            placeholder="Title"
        />
       <TextInput
        {...props}
        style={styles.input}
        onChangeText={handleChangeBody}
        value={state.body}
        placeholder="Body"
      />
       <TouchableOpacity style={styles.addButton}
    onPress={() => props.onSave(state)}>
     <Text style={{color: "white", fontWeight:"bold"}}>Add Post</Text>
    </TouchableOpacity>
        </View>
        </Modal>
    );
}

const styles = StyleSheet.create({  
    addButton: { 
        height: 50,
        width: 150,
        alignItems:"center",
        justifyContent: "center",
        alignSelf:"center",
        backgroundColor:"red",
        borderRadius:10,
      }, 
    viewContainer: {
      padding: 20,
      width: "90%",
      alignSelf:"center",
      justifyContent: "center",
      backgroundColor: "white",
      borderRadius: 10,
    },  
    view:{
      padding: 5,
      margin: 5,
    },
    itemBody: {
      flex:1,
      fontSize: 12,
      paddingTop: 5,
      textAlign: "justify",
    },
    item: {  
        fontSize: 20,
        fontWeight: "bold",
    },  
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
      },
  }) 

export default ModalView;