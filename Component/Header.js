import React,{Component} from 'react';
import {Text,TextInput,View,StyleSheet} from 'react-native';

class Header extends Component{
    render(){
        return(
            <View style={styles.Header} >
                <Text style={{textAlign:'center',color:'white'}} >Tugas 3 React Native</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    Header:{
      flex: 1,
      justifyContent: 'center',
    
      //paddingHorizontal: 10,
      backgroundColor:'blue'

    }
  })
export default Header