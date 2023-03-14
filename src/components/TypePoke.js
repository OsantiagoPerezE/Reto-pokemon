import {pathOr} from 'ramda';
import React, {useEffect, useState} from 'react';

const TypePoke = ({typesPoke}) => {
	const [typeName, setTypeName] = useState('');
	useEffect(() => {
		const aux = pathOr('', [0, 'type', 'name'], typesPoke);
		setTypeName(aux);
	}, [typesPoke]);

	return <div>Type: {typeName}</div>;
};

export default TypePoke;
