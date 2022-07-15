import words from 'random-words';
import React ,{useState,useRef, useEffect} from 'react';
import {Character} from './character';
let sampleSet = 'the quick brown fox jumps over the lazy dog';

sampleSet = sampleSet.split('').map((char, isCorrect)=>{
	return {char: char, isCorrect: null}
});

const Game = (props)=>{
	const [wordSet, setWordSet] = useState(sampleSet);	
	const [currentChar, setCurrentChar] = useState(0);

	useEffect(() => {
		console.log(wordSet[currentChar])
	}, [currentChar]);

	const handleKeyDown = (elem)=>{
		if(elem.key != 'Backspace'){
			let isCorrect = checkMatch(elem.key);
			let updatedWordSet = wordSet.map((elem)=>{
				return elem
			})	
			updatedWordSet[currentChar].isCorrect = isCorrect;
			setWordSet(updatedWordSet);
			setCurrentChar(prev=> {return prev + 1});
		}else if(elem.key ==='Backspace'){
			setCurrentChar(prev=> {return prev -1});
		}
	}

	const checkMatch = (keyPressed)=>{
		if(wordSet[currentChar].char=== keyPressed){
			return true
		}else{
			return false
		}
	}

	const style={
		width: '400px',
		height: '400px',
		border: '1px solid gray',
		color: 'blue'
	}

	let wordSetDisplay = wordSet.map(
		(entry, index)=>{
			return <Character
				isActive={entry.char===wordSet[currentChar].char && index === currentChar}
				isCorrect={entry.isCorrect}
				children={entry.char}
			/>
		}
	).flat();

	return(
		<div 
			tabIndex={0}
			id="typist"
			style={style} 
			onKeyDown ={handleKeyDown}
		>	
			{wordSetDisplay}
		</div>
	)	
}


export {Game};