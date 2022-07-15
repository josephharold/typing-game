import React, { useState } from 'react';

/* 
Character receives props:
	isActive
	isCorrect
	props.children
*/ 
const Character = (props)=>{
	let style = {};
	props.isActive === true? style ={backgroundColor: 'black', color: 'white'} : style={};
	props.isCorrect === true? style= {color: 'red', ...style}: style = style;
	return(
		<span style={style}>{props.children}</span>	
	)
}

export {Character}