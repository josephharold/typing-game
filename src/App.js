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
		setWordSet(randomWords(40));
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
		let rand = randomWords(40);
		setIsActive(false);
		setIsFinished(false);
		setWordSet(rand);
		// setScore(0);
	}
	return(
	<>
	<div className="flex flex-col justify-center items-center">
		<h1>Typing Game</h1>
		<div className='flex flex-row justify-start w-3/4 px-8 text-2xl'> 
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
		</div>
		<Game
			handleStart={()=>{handleStart()}}	
			handleScore={(number)=>{setCharScore(number)}}
			isFinished = {isFinished}
			wordSet = {wordSet}
		/>
		<button className="w-2/12 py-2 border border-green-500 rounded-xl" onClick={()=>{reset()}}>restart</button>
	</div>
	</>
	)
}


export default App;