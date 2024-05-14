import { Text, TouchableOpacity } from 'react-native';

export function Child({ onPress }) {
	function onPress_() {
		onPress('john');
	}
	return (
		<>
			<TouchableOpacity onPress={onPress_}>
				<Text style={{ fontSize: 40 }}>Click me</Text>
			</TouchableOpacity>
		</>
	);
}
