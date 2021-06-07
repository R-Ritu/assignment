import React, { useCallback, useEffect, useState } from 'react';
import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import ModalView from "../../component/modal";
import constants from "../../constants";
import { addPost, getAllPostApi } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const {allPost } = useSelector((state: {post:{allPost: Array<any>}}) => state.post);
  const [visibleModal, setVisible]=useState<boolean>(false);

  useEffect(() => {
    // Any thing will work as componentDidMount
    dispatch(getAllPostApi());
    return () => {
      // Anything will work componentWillUnMount 
    }
  },[]) 

  const addPostClick = useCallback ((state) => {
    if(state.title && state.body){
      dispatch(addPost(state));
      setVisible(false);
    }else{
      Alert.alert("Please Enter Title and Body Value")
    }
  },[])

  return ( 
    <>
    <FlatList  
        data={allPost}  
        contentContainerStyle={styles.flatListStyle}
        renderItem={({item}: any) =>  
          <View style={styles.view}>
            <Text style={styles.item}>{item.title}</Text>
            <Text style={styles.itemBody}>{item.body}</Text>
            </View>}  
    /> 
    <TouchableOpacity style={styles.addButton}
    onPress={() => setVisible(true)}>
    <Image source={constants.Images.plusIcon}></Image>
    </TouchableOpacity>
    <ModalView 
    isVisible={visibleModal} 
    onModalHide={()=>setVisible(false)}
    onSave={addPostClick}
    />
    </> 
  );
};


const styles = StyleSheet.create({  
  addButton: { 
    height: 50,
    width: 50,
    bottom: 50,
    right:50,
    position: "absolute",
  }, 
  flatListStyle:{
    paddingBottom: 100,
  } ,
  view:{
    padding: 5,
    margin: 5,
    borderBottomWidth: 1,
    borderBottomColor: "black",
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
}) 

export default Home;
