import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
	square: {
		backgroundColor: 'grey',
		height: 200,
		width: '50%'
	},
	flexible: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 45,
		backgroundColor: 'pink',
		gap: 70
	}
});
