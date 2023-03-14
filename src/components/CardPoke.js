import {pathOr} from 'ramda';
import React, {useEffect, useState} from 'react';
import TypePoke from './TypePoke';

const CardPoke = ({url}) => {
	const [dataPoke, setDataPoke] = useState({});
	const [typesPoke, setTypesPoke] = useState([]);
	const [urlImage, setUrlImage] = useState('');
	const [name, setName] = useState('');
	const [weightPoke, setweightPoke] = useState(0);
	const [showDrawer, setShowDrawer] = useState(false);

	useEffect(() => {
		fetch(`${url}`, {
			method: 'GET',
		}).then((response) =>
			response.json().then((data) => {
				setDataPoke(data);
			})
		);
	}, [url]);

	useEffect(() => {
		setUrlImage(pathOr('', ['sprites', 'front_shiny'], dataPoke));
		setTypesPoke(pathOr('', ['types'], dataPoke));
		setweightPoke(pathOr(0, ['weight'], dataPoke));
		setName(pathOr('', ['name'], dataPoke));
	}, [dataPoke]);

	// const closeDrawer = () => {
	// 	setShowDrawer(false);
	// };

	// const showPocke = () => {
	// 	setShowDrawer(true);
	// };

	return (
		<div className='card'>
			<img src={urlImage} />
			<div>Name: {name} </div>
			<TypePoke typesPoke={typesPoke} />
			<div>Weight: {weightPoke} gr</div>
			{/* {showDrawer ? (
				<div className='containerDrawer'>
					<div className='contentDrawer'>
						<div className='closeDrawer'>x</div>
					</div>
				</div>
			) : (
				<></>
			)} */}
		</div>
	);
};

export default CardPoke;
