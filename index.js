import React from 'react';
import {Text, View, Button, AppRegistry} from 'react-native';

const gerarNumAleatorio = () => {
	var numAleatorio = Math.random();
	numAleatorio = Math.floor(numAleatorio * 10);
	alert(numAleatorio);
};

const App = () => {
	return (
		<View>
			<Text>Gerador de Números randômicos!!!</Text>
			<Button 
				title="Gerar um numero randomico" 
				onPress={gerarNumAleatorio} 
			/>
		</View>
	);
};

AppRegistry.registerComponent('app1', () => App);