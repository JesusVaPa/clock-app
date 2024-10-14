import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

 useEffect(() => {
	const timer = setInterval(() => {
		setCurrentTime(new Date().toLocaleTimeString());
	}, 1000);
	return () => clearInterval(timer);
}, []);

return (
	<>
		<div>
			<h1>
				Local Live Time
			</h1>
			<h2>
				{currentTime}
			</h2>
		</div>
	</>
);
}

export default App
