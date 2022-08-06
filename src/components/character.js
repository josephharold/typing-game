import React, { useState } from 'react';

/* 
Character receives props:
	isActive
	isCorrect
	props.children
*/ 
const Character = (props)=>{
	var textColor = ''; 
	var textBackground = 'bg-transparent';
	if(props.isCorrect=== null){
		textColor = 'text-light-base2 dark:text-dark-base2'	
	}else if(props.isCorrect=== true){
		textColor = 'text-light-primary dark:text-dark-primary'
	}else if(props.isCorrect ===false){
		textColor = 'text-light-tertiary dark:text-dark-tertiary';
	}

	if(props.isActive=== true){
		textBackground = 'bg-light-base2 dark:text-dark-base2';
		textColor= 'text-light-primary dark:text-dark-primary';
	}
	return(
		<span className={`${textColor} ${textBackground}`}>{props.children}</span>	
	)
}

export {Character}