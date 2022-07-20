import React, {useState, useEffect } from 'react';
import { Game } from './components/Game';
import Timer from './components/timer';
// import {Game} from './components/sample';
const App = (props)=>{
	const [isActive, setIsActive] = useState(false);

	const handleIsActive = ()=>{
		console.log('handleACtive is triggered');
		if(isActive===false){
			setIsActive(true);
		}
	}
	return(
	<>
	<h1>hello this is a react app</h1>
	<Timer
		isActive ={isActive}	
		turnOff = {()=>{setIsActive(false)}}
	/>
	<Game
		handleStart={()=>{handleIsActive()}}	
	/>
	</>
	)
}


export default App;