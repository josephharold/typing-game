import React, { useState } from 'react';
import { isElementOfType } from 'react-dom/test-utils';

/* 
Character receives props:
	isActive
	isCorrect
	props.children
*/ 
const Character = (props)=>{
	let style = {};
	if(props.isCorrect=== null){
		style.color = 'black'	
	}else if(props.isCorrect=== true){
		style.color = 'blue';
	}else if(props.isCorrect ===false){
		style.color = 'red';
	}

	if(props.isActive=== true){
		style.backgroundColor = 'black';
		style.color= 'white';
	}
	return(
		<span style={style}>{props.children}</span>	
	)
}

export {Character}