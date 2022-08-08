import React, {useState, useEffect } from 'react';
import { Game } from './components/Game';
import Timer from './components/timer';
import randomWords from 'random-words';
import { Score } from './components/score';
import { DarkMode } from './components/darkMode';
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
	<div className="flex flex-col duration-300 bg-light-base dark:bg-dark-base justify-center min-h-screen items-center pt-24">
	
		<h1 className="text-primary font-bold text-light-primary text-5xl mb-8 dark:">Typing Game</h1>
		<div className='bg-slate-200 dark:bg-dark-base2 text-light-tertiary rounded-lg flex flex-row justify-between w-3/4 py-2 px-8 text-2xl'> 
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
			<DarkMode/>
		</div>
		<Game
			handleStart={()=>{handleStart()}}	
			handleScore={(number)=>{setCharScore(number)}}
			isFinished = {isFinished}
			wordSet = {wordSet}
		/>
		<button className="bg-light-primary text-light-base w-2/12 py-2 rounded-xl" onClick={()=>{reset()}}>restart</button>
	</div>
	</>
	)
}


export default App;