import { s } from './FlexDemo.style';
import { Text, View } from 'react-native';

export function FlexDemo() {
	return (
		<View style={s.container}>
			<View style={s.box1} />
			<View style={s.box2} />
			<View style={s.box3} />
			<Text style={{ color: 'blue' }}>test1</Text>
		</View>
	);
}
