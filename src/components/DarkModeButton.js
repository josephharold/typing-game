import { useState } from "react";
import { useDarkMode } from "./darkMode";


const DarkModeButton = ()=>{
	const [colorTheme, setColorTheme] = useDarkMode();
	return(
		<>
		<button onClick={()=>setColorTheme("light")} class="p-2 mx-2 bg-yellow-900 rounded-lg">
			darkMOde
		</button>
		</>
	)
};


export {DarkModeButton};