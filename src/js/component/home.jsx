import React, {useState} from "react";


//create your first component
const Home = () => {

	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([])


	return (
		<div className="container">
			<h1>My Todos </h1>
			<ul>
				<li>
					<input 
						type="text"
						onChange={(e) => setInputValue(e.target.value) }
						value={inputValue}
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								setTodos(todos.concat(inputValue));
								setInputValue("");
							}
						}}
						placeholder="What do you need to do?"/>
				</li>
				{todos.map ((item, index) => (
					<li> {item}
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" onClick={() => setTodos(todos.filter((t, currentIndex) => index != currentIndex )) }>
							<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
							<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
						</svg>
					</li>
				))}
			</ul>
			<div>{todos.length} task</div>
		</div>
	);
};

export default Home;
