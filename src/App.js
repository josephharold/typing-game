import React, {useState, useEffect } from 'react';
import { Game } from './components/Game';
import Timer from './components/timer';
import randomWords from 'random-words';
import { Score } from './components/score';
const App = (props)=>{
	const [isActive, setIsActive] = useState(false);
	const [isFinished, setIsFinished] = useState(false);
	const [wordSet, setWordSet] = useState([]);
	const [charScore, setCharScore] = useState(0);
	const [seconds, setSeconds] = useState(0);
	// TODO: add function such that component receives score from game component, and calculates WPM
	useState(()=>{
		setWordSet(randomWords(10));
	},[isActive, isFinished]);

	const handleIsFinished = ()=>{
		if(isActive===true && isFinished===false){
			setIsFinished(true);
			setIsActive(false);
		}
	}
	const handleStart = ()=>{
		if(isActive===false && isFinished===false){
			setIsActive(true);
			setIsFinished(false);
		}
	}
	const reset = ()=>{
		let rand = randomWords(10);
		setIsActive(false);
		setIsFinished(false);
		setWordSet(rand);
		// setScore(0);
	}
	return(
	<>
	<h1>hello this is a react app</h1>
	<Timer
		isActive ={isActive}	
		isFinished = {isFinished}
		setIsFinished = {()=>{handleIsFinished()}}
		onTick = {(number)=>{setSeconds(number)}}
	/>
	<Score
		characterScore={charScore}
		seconds={seconds}
		length={30}
	/>
	<Game
		handleStart={()=>{handleStart()}}	
		handleScore={(number)=>{setCharScore(number)}}
		isFinished = {isFinished}
		wordSet = {wordSet}
	/>
	<button onClick={()=>{reset()}}>restart</button>
	</>
	)
}


export default App;