// import { Text, View, Image } from 'react-native';
// import { User } from './components/User/User';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import { s } from './App.style';
// import { FlexDemo } from './components/FlexDemo/FlexDemo';
// import { ScoreCounter } from './components/ScoreCounter/ScoreCounter';
// import { Movie } from './components/Movie/Movie';

// export default function App() {
// 	return (
// 		<SafeAreaProvider>
// 			<SafeAreaView style={{ backgroundColor: 'red', flex: 1 }}>
// 				{/* <View style={s.square}>
// 					<Text>HelloWorld</Text>
// 					<FlexDemo />
// 					<Text>hello</Text>
// 					<User
// 						firstName={'John'}
// 						lastName={'Doe'}
// 						age={'40'}
// 						address={{ street: '12 Avenue du 14 juillet', city: 'Lille' }}
// 						isVerified //={true}
// 						doSomething={function () {
// 							console.log('User authenticated');
// 						}}
// 					>
// 						<Image style={{ height: 200, width: 300 }} source={{ uri: 'https://randomuser.me/api/portraits/men/92.jpg' }} />
// 					</User>
// 				</View> */}
// 				<View style={s.flexible}>
// 					<ScoreCounter />
// 					<Movie />
// 				</View>
// 			</SafeAreaView>
// 		</SafeAreaProvider>
// 	);
// }

//-----------------------------------------------------------------

// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import { useState } from 'react';
// import { Child } from './components/Child/Child';

// export default function App() {
// 	const [age, setAge] = useState(0);

// 	function hello(name) {
// 		setAge(age + 1);
// 	}
// 	console.log(age);
// 	return (
// 		<SafeAreaProvider>
// 			<SafeAreaView style={{ backgroundColor: 'yellow', flex: 1, justifyContent: 'center', alignItems: 'center', height: 200, width: '100%' }}>
// 				<Child onPress={hello} />
// 			</SafeAreaView>
// 		</SafeAreaProvider>
// 	);
// }

//-----------------------------------------------------------------

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Platform, Text } from 'react-native';

export default function App() {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1 }}>{Platform.OS === 'ios' ? <Text>hello sur IOS</Text> : <Text>hello sur Android</Text>}</SafeAreaView>
		</SafeAreaProvider>
	);
}
