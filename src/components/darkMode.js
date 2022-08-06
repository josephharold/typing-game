import React, { useEffect, useState } from 'react';


const DarkMode = ()=>{
	const [mode, setMode] = useState("dark");
	useEffect(()=>{
		const root = window.document.documentElement;
		root.classList.toggle("dark");
	},[mode]);

	const toggleTheme = ()=>{
		mode==="dark" ? setMode("light") : setMode("dark");
	}
	return(
		<button onClick={()=>{toggleTheme()}} className='bg-light-primary text-light-base rounded-lg'>Toggle theme</button>
	)
}


export {DarkMode};