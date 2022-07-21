import React ,{useState, useEffect} from 'react';
import { Character } from './character';
import { Word } from './word';
const Game = (props)=>{
	const [wordSet, setWordSet] = useState([]);
	const [currentChar, setCurrentChar] = useState(0);
	const [currentWord, setCurrentWord] = useState(0);
	const [moveStack, setMoveStack] = useState([]);
	const [score, setScore] = useState(0);
	useEffect(() => {
		console.log('display when triggered');
		let fetchSet = props.wordSet;
		let set = fetchSet.map(word=>{
			return word.split('').map(char=>{
				return {char: char, isCorrect: null}
			})
		})
		setWordSet(set);
		setCurrentWord(0);
		setCurrentChar(0);
	}, [props.isFinished,props.wordSet]);
	const handleKeyDown = (event)=>{
		props.handleStart();

		const key = event.key;
		// ! REFACTOR ON WORDSET UPDATE
		if(isCharacter(key) && isNotExceeding()){
			if(currentChar< wordSet[currentWord].length){
				if(checkMatch(key)){
					let updatedWordSet = [...wordSet];
					updatedWordSet[currentWord][currentChar].isCorrect = true;
					setWordSet(updatedWordSet);
				}else{
					let updatedWordSet = [...wordSet];
					updatedWordSet[currentWord][currentChar].isCorrect = false;
					setWordSet(updatedWordSet);
				}
				handleMoveStack(key);
			}
			setCurrentChar(prev=> prev + 1);
		}else if(isBackspace(key) && currentChar>0){
			if(currentChar< wordSet[currentWord].length){
				let updatedWordSet = [...wordSet];
				updatedWordSet[currentWord][currentChar].isCorrect = null;
				setWordSet(updatedWordSet);
				handleMoveStack(key);
			}
			setCurrentChar(prev=>prev-1);
		}else if(key=== ' '){
			if(isCorrectWord()){
				setScore(prev=> prev+1);
			}
			nextWord();
			handleMoveStack(key);
		}
	}
	const isNotExceeding = ()=>{
		if(currentChar < wordSet[currentWord].length && currentChar >=0){
			return true
		}else{
			return false
		}
	}
	const handleMoveStack = (keyPressed)=>{
		let updatedMoveStack = [...moveStack];
		if(keyPressed === ' '){
			setMoveStack([]);
		}else if(keyPressed === 'Backspace'){
			updatedMoveStack.pop();
			setMoveStack(updatedMoveStack);
		}else if(keyPressed.length===1){
			updatedMoveStack.push(keyPressed);
			setMoveStack(updatedMoveStack);
		};
	}

	const nextWord =()=>{
		if(moveStack.length!=0){
			setCurrentChar(0);
			setCurrentWord(prev=>prev+1);
		}
	}
	const isCorrectWord=()=>{
		let correctWord = '';
		wordSet[currentWord].forEach(char=> {
			correctWord = correctWord + char.char
		});
		if(moveStack.join('')=== correctWord){
			return true
		}else{
			return false
		}
	}
	const checkMatch=(key)=>{
		if(key === wordSet[currentWord][currentChar].char){
			return true
		}else{
			return false
		}
	}
	
	const isBackspace = (key)=>{
		if(key==='Backspace'){
			return true
		}else{
			return false
		}
	}
	const isCharacter = (key)=>{
		if(key.length ===1 && (key!= ' ')){
			return true
		}else{
			return false
		}
	}
	let wordSetDisplay = wordSet.map(
		(entry,i)=>{
			return <Word>
			{entry.map(
				(char,j)=>{
					return <Character
						isActive={i===currentWord && j=== currentChar}
						isCorrect={char.isCorrect}
						children={char.char}
					/>
				}
			)}
			</Word>
		}
	);
	return(
		<>
		<div
			onKeyDown={(event)=>{handleKeyDown(event)}}
			tabIndex ={1}
			style={{border: '1px solid gray', width: '500px', height:'500px'}}
		>
			{props.isFinished===true ? 'isfinished': wordSetDisplay}
		</div>
		</>
	)
}

export {Game};