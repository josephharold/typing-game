import React, {useState, useEffect } from 'react';
import { Game } from './components/Game';
import Timer from './components/timer';
// import {Game} from './components/sample';
const App = (props)=>{
	const [isActive, setIsActive] = useState(false);
	const [isFinished, setIsFinished] = useState(false);
	// TODO: add function such that component receives score from game component, and calculates WPM
	const handleStart = ()=>{
		console.log('handleACtive is triggered');
		if(isActive===false && isFinished===false){
			setIsActive(true);
			setIsFinished(false);
		}
	}
	const reset = ()=>{
		setIsActive(false);
		setIsFinished(false);
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
		setIsFinished = {()=>{handleIsFinished()}}
	/>
	<Game
		handleStart={()=>{handleStart()}}	
		isFinished = {isFinished}
	/>
	<button onClick={()=>{reset()}}>restart</button>
	</>
	)
}


export default App;