import {pathOr} from 'ramda';
import React, {useEffect, useState} from 'react';
import ImagePoke from './CardPoke';

const Card = ({listPoke}) => {
	const listPokemon = listPoke;

	return (
		<div>
			<h1 className='title'> Pokemon </h1>
			<div className='list'>
				{listPokemon.map((i) => {
					const url = pathOr('', ['url'], i);
					return (
						<div key={url}>
							<ImagePoke url={url} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Card;
