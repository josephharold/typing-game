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
	let alignment = mode === 'dark'? 'dot-active': '';
	return(
		<div className='flex flex-row gap-5'>
			<div>dark mode</div>
			<div onClick={()=>{toggleTheme()}} className='bg-slate-600 drop-shadow-md cursor-pointer overflow-hidden button relative w-12 flex flex-row justify-center items-center rounded-full'>
				<div className={`dot absolute ${alignment} bg-light-primary drop-shadow-lg duration-500 h-8 w-8 rounded-full`}></div>
			</div>
		</div>
	)
}


export {DarkMode};