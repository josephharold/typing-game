import React from 'react';

const Score = (props)=>{
	
	return(
		<>
		<div>
			<span>word score: </span>
			<span>{props.wordScore}</span>
		</div>
		<div>
			<span>character score: </span>
			<span>{props.characterScore}</span>
		</div>
		</>
	)
}

export {Score};