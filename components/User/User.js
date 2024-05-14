import { Children } from 'react';
import { Text, Image } from 'react-native';

// export function User(props) {
// 	console.log(props);
// 	return (
// 		<>
// 			<Text>
// 				Mon prénom est {props.firstName} et mon nom est {props.lastName}.{'\n'}
// 				Mon âge est de {props.age} ans.{'\n'}
// 				{props.isVerified ? `compte vérifier` : `Compte pas vérifié`}
// 			</Text>
// 		</>
// 	);
// }

// export function User({ firstName, lastName, age, isVerified, address }) {
// 	return (
// 		<>
// 			<Image style={{ height: 200, width: 300 }} source={{ uri: 'https://randomuser.me/api/portraits/men/11.jpg' }} />
// 			<Text>
// 				Mon prénom est {firstName} et mon nom est {lastName}.{'\n'}
// 				Mon âge est de {age} ans.{'\n'}
// 				{isVerified ? `compte vérifier` : `Compte pas vérifié`}
// 			</Text>
// 			<Text>
// 				Mon adresse est : {address.street} qui est situé à {address.city}
// 			</Text>
// 		</>
// 	);
// }

export function User({ firstName, lastName, age, isVerified, address, children, doSomething }) {
	doSomething();
	return (
		<>
			{children}
			<Text>
				Mon prénom est {firstName} et mon nom est {lastName}.{'\n'}
				Mon âge est de {age} ans.{'\n'}
				{isVerified ? `compte vérifier` : `Compte pas vérifié`}
			</Text>
			<Text>
				Mon adresse est : {address.street} qui est situé à {address.city}
			</Text>
		</>
	);
}
