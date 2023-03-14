import React, {useEffect, useState} from 'react';
import ContexPoke from './components/ContexPoke';

const App = () => {
	const [listPoke, setListPoke] = useState([]);

	useEffect(() => {
		fetch('https://pokeapi.co/api/v2/pokemon', {
			method: 'GET',
		}).then((response) =>
			response.json().then((data) => {
				setListPoke(data.results);
			})
		);
	}, []);

	return (
		<div className='container'>
			<ContexPoke listPoke={listPoke} />
		</div>
	);
};

export default App;
