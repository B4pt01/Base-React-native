import { TouchableOpacity, Text, View } from 'react-native';
// import { s } from './ScoreCounter.style';
import { useState } from 'react';
import { ScoreDisplay } from '../ScoreDisplay/ScoreDisplay';

// export function ScoreCounter() {
// 	let score = 0;
// 	function increaseScore() {
// 		score++;
// 		console.log(score);
// 	}
// 	return (
// 		<>
// 			<View style={s.box}>
// 				<TouchableOpacity onPress={increaseScore}>
// 					<Text style={{ fontSize: 40 }}>Augmenter</Text>
// 				</TouchableOpacity>
// 				<Text style={{ fontSize: 40 }}>Le score est de : {score} </Text>
// 			</View>
// 		</>
// 	);
// }

// export function ScoreCounter() {
// 	const [score, setScore] = useState(0);
// 	function increaseScore() {
// 		setScore(score + 1);
// 		console.log(score);
// 	}
// 	return (
// 		<>
// 			<View style={s.box}>
// 				<TouchableOpacity onPress={increaseScore}>
// 					<Text style={{ fontSize: 40 }}>Augmenter</Text>
// 				</TouchableOpacity>
// 				<Text style={{ fontSize: 40 }}>Le score est de : {score} </Text>
// 			</View>
// 		</>
// 	);
// }

export function ScoreCounter() {
	const [score, setScore] = useState(0);
	function increaseScore() {
		setScore(score + 1);
		console.log(score);
	}
	return (
		<>
			<View //</>style={s.box}>
			>
				<TouchableOpacity onPress={increaseScore}>
					<Text style={{ fontSize: 40, textAlign: 'center' }}>Augmenter</Text>
				</TouchableOpacity>
				<ScoreDisplay score={score} />
			</View>
		</>
	);
}
