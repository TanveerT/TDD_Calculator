import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { add } from "./utils/add";

function App() {
	const [inputValue, setInputValue] = useState("");
	const [sum, setSum] = useState(null);
	const [error, setError] = useState("");
	const handleSum = () => {
		const list = inputValue.split(",");
		try {
			let totalSum = add(list);
			setSum(totalSum);
			setError("");
			setInputValue("");
		} catch (e) {
			console.log("e", e.message);
			setSum(null);
			setError(e.message);
		}
	};

	return (
		<>
			<h1>Incubyte Frontend assesment</h1>
			<div className='card'>
				<input
					type='text'
					value={inputValue}
					onChange={(e) => {
						setInputValue(e.target.value);
					}}
					className='input-filed'
					placeholder='Enter numbers seperated by , to calculate sum'
				/>
				<button className='add-button' onClick={handleSum}>
					Add
				</button>
			</div>
			<div className='result'>
				{sum !== null && <div>Sum is {sum}</div>}
				{error !== "" && <div>{error}</div>}
			</div>
		</>
	);
}

export default App;
