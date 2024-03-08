import React, {useState, useEffect} from "react";


//create your first component
const Home = () => {

	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([])
	


	async function solicitud_get() {
		const response = await fetch("https://playground.4geeks.com/apis/fake/todos/user/Haisa2")
		if (response.status === 404){
			const response = await fetch("https://playground.4geeks.com/apis/fake/todos/user/Haisa2",
			{
				method: "POST",
	
				body: JSON.stringify([]),
				
				headers:  {
					'Content-Type': 'application/json'
				}
			});
			const respuesta = await fetch("https://playground.4geeks.com/apis/fake/todos/user/Haisa2");
			const data = await respuesta.json();
			setTodos(data);
			return true
		}
		const data = await response.json();
		setTodos(data);
		return true
	}

	async function solicitud_put(todo_list) {
		const response = await fetch("https://playground.4geeks.com/apis/fake/todos/user/Haisa2", 
		{
			method: "PUT",

			body: JSON.stringify(todo_list),
			
			headers:  {
				'Content-Type': 'application/json'
			}

		})
		const data = await response.json()
	}


	async function solicitud_delete(index) {

		const lista = todos;
		setTodos(todos.filter((t, currentIndex) => index != currentIndex ));
		const lista2 = lista.filter((t, currentIndex) => index != currentIndex );

		const response = await fetch("https://playground.4geeks.com/apis/fake/todos/user/Haisa2", 
		{
			method: "PUT",

			body: JSON.stringify(lista2),
			
			headers:  {
				'Content-Type': 'application/json'
			}

		});
		const data = await response.json();
	}

	async function solicitud_deleteAll(){
		const response = await fetch("https://playground.4geeks.com/apis/fake/todos/user/Haisa2", 
		{
			method: "PUT",

			body: JSON.stringify([{label: "example task", done: false}]),
			
			headers:  {
				'Content-Type': 'application/json'
			}

		});
		solicitud_get()
	}



	useEffect(() => {
		solicitud_get()
	}, [])

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
								const tarea = { label: inputValue, done: false };
								const lista_todo = [...todos, tarea];
								setTodos(todos.concat(tarea));
								console.log(todos);
								solicitud_put(lista_todo);
								setInputValue("");
							}
						}}
						placeholder="What do you need to do?"/>
				</li>
				{todos.map ((item, index) => (
					<li key={index}> {item.label}
						<svg xmlns="http://www.w3.org/2000/svg"  onClick={() => solicitud_delete(index) } width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
							<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
							<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
						</svg>
					</li>
				))}
			</ul>
			<div className="container d-flex justify-content-between align-items-center">
				<p>{todos.length} task</p> 
				<button className="btn btn-light" onClick={() => solicitud_deleteAll() }> Delete all</button>

			</div>

		</div>
	);
};



export default Home;