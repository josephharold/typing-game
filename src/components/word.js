import React from 'react';


const Word=(props)=>{
	return(
		<>
		<span	
			style={{marginRight: '10px'}}
		>
			{props.children}
		</span>	
		</>	
	)
}

export {Word}