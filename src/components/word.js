import React from 'react';


const Word=(props)=>{
	return(
		<>
		<div	
			style={{marginRight: '10px'}}
		>
			{props.children}
		</div>	
		</>	
	)
}

export {Word}