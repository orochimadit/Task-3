import React,{Component} from 'react';
import {Text,TextInput,View,
    StyleSheet,
    TouchableOpacity} from 'react-native';

class Barang extends Component{
    constructor(props){
        super(props)
        this.state={
           jumlah:0,
        }
    }

    handleTambah=()=>{
        this.setState({
            jumlah:this.state.jumlah+1
        })
    }
    handleKurang=()=>{
        if(this.state.jumlah>0){
            this.setState({
                jumlah:this.state.jumlah-1
            })
        }else{
            alert("Nilai tidak boleh kurang dari 0");
        }
            
    }
    render(){
        return(
            <View style={styles.Barang} >
                <Text style={{textAlign:'center'}}>{this.props.data}</Text>
                <View style={styles.ButtonLayout}>
                <TouchableOpacity onPress={this.handleTambah}
                    style={{backgroundColor:'green',width:70,height:30}} 
                >
                    <Text style={{color:'white',fontSize:20,textAlign:'center' }}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{backgroundColor:'red',width:70,height:30}}
                onPress={this.handleKurang}>
                    <Text style={{color:'white',fontSize:20,textAlign:'center' }} >-</Text>
                </TouchableOpacity>
                </View>
                <Text >Jumlah : {this.state.jumlah}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    
    Barang:{
      flex: 3,
      //justifyContent: 'center',
      paddingHorizontal: 10,
      //backgroundColor:'green'
    },
    ButtonLayout: {
        margin: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
      }
  })
export default Barang