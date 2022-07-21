import React, {useState, useEffect } from 'react';
import { Game } from './components/Game';
import Timer from './components/timer';
import randomWords from 'random-words';
const App = (props)=>{
	const [isActive, setIsActive] = useState(false);
	const [isFinished, setIsFinished] = useState(false);
	const [wordSet, setWordSet] = useState([]);
	// TODO: add function such that component receives score from game component, and calculates WPM
	useState(()=>{
		setWordSet(randomWords(10));
	},[isActive, isFinished]);
	const handleStart = ()=>{
		console.log('handleACtive is triggered');
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
	}
	const handleIsFinished = ()=>{
		if(isActive===true && isFinished===false){
			setIsFinished(true);
			setIsActive(false);
		}
	}
	return(
	<>
	<h1>hello this is a react app</h1>
	<Timer
		isActive ={isActive}	
		isFinished = {isFinished}
		setIsFinished = {()=>{handleIsFinished()}}
	/>
	<Game
		handleStart={()=>{handleStart()}}	
		isFinished = {isFinished}
		wordSet = {wordSet}
	/>
	<button onClick={()=>{reset()}}>restart</button>
	</>
	)
}


export default App;