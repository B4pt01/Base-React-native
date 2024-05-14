import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export function Movie() {
	const [movie, setMovie] = useState('Star Wars');

	function updateMovie() {
		setMovie('Forest Gump');
		console.log('Dans la fonction, après setState', movie);
	}
	console.log('RENDER', movie);
	return (
		<View>
			<TouchableOpacity onPress={updateMovie}>
				<Text style={{ fontSize: 40 }}>{movie}</Text>
			</TouchableOpacity>
		</View>
	);
}
