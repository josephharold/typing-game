import React,{useEffect, useState} from 'react';

const Score = (props)=>{
	const [wpm ,setWpm] = useState(0);
	useEffect(()=>{
		let numOfWords = Math.round(props.characterScore/5);
		let convertedSeconds = 30-props.seconds;
		let minutes = convertedSeconds/60;
		let wpm = (numOfWords/minutes);
		setWpm(Math.round(wpm));
	},[props.seconds]);
	return(
		<>
		<div>
			<span>character score: </span>
			<span>{props.characterScore}</span>
		</div>
		<div>
			<span>wpm:</span>
			<span>{wpm}</span>
		</div>
		</>
	)
}

export {Score};