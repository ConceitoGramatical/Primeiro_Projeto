import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
	const [valor1, setValor1] = useState("1");
	const [valor2, setValor2] = useState("1000");
	const [resultado, setResultado] = useState("");
		function somar(){
			let r = parseFloat(valor1) + parseFloat(valor2);
			setResultado(r);
		}
	//Form f = new form();->instancia
  return (
    <View style={styles.container}>
		  <View style={styles.bloco}>
			  <Text style={styles.titulo}>CALCULADORA SIMPLES</Text>
   		 </View>
		  <View style={styles.bloco}>
			  <Text> Valor 1: </Text>
			  <TextInput style={styles.input}value={valor1} />
		  </View>
	      <View style={styles.bloco}>
		     <Text> Valor 2: </Text>
		     <TextInput style={styles.input}value={valor2}/>
		  </View>
		  <View style={styles.bloco}>
		  	  <TouchableOpacity style={styles.botao}
				  onPress={somar}>
			  	<Text styles={styles.textoBotao}>SOMAR</Text>
			  </TouchableOpacity>
		  </View>
		  <View style={styles.bloco}>
			  <Text style={styles.titulo}>
				  RESULTADO:{resultado}
				  </Text>
		</View>
    </View>
	
	);
			  
}

const styles = StyleSheet.create({
  container: { 
	backgroundColor:'#FDF5E6',
    flex: 1
},
bloco:{
	marginTop:20,
	width:'80%',
	marginLeft:'10%',
	
},
titulo:{
	fontSize:30,
	textAlign:'center'
},
input:{
	borderWidth:2,
	fontSize:20,
	textAlign:'center',
	borderRadius:10
},
botao:{
	backgroundColor:'#32CD32',
	borderRadius:10,
	border:'2px solid #000',
	textAlign:'center',
	marginLeft:'20%',
	marginRight:'20%'
},
textoBotao:{
	color:'#fff',
	textAlign:'center',
	fontSize:'20',
	
},
   
 
});
