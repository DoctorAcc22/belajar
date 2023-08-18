<script>
	import { onMount } from "svelte";
	import axios from "axios";
	import config from "./config.js";
	import TodoItem from "./TodoItem.svelte";
	export let name;
	let todo = "";
	$: todos = [];
	onMount(getTodos());

	function getTodos() {
		axios
		.get(`https://api.cosmicjs.com/v1/${config.bucket.slug}/object-type/todos?sort=created_at`)
		.then(response => {
			todos = response.data.objects;
		});
	}

	function handleAddTodo() {
		axios
		.post(`https://api.cosmicjs.com/v1/${config.bucket.slug}/add-object`, {
			type_slug: "todos",
			title: todo,
			content: "New Task",
			metafields: [
			{
				title: "Is Complete",
				key: "is_complete",
				value: false,
				type: "text"
			}
			]
		})
		.then(response => {
			if (response.data) {todos = [...todos, response.data.object];}
		});
		todo = "";
	}

	function handleComplete(event) {
		const todo = event.detail.todo;
		axios
		.put(`https://api.cosmicjs.com/v1/${config.bucket.slug}/edit-object`, {
			slug: todo.slug,
			metafields: [
			{
				title: "Is Complete",
				key: "is_complete",
				value: !todo.metadata.is_complete,
				type: "text"
			}
			]
		})
		.then(response => {
			if (response.data) {
				getTodos();
			}
		});
	}

	function handleDelete(event) {
		const todo = event.detail.todo;
		axios
		.delete(`https://api.cosmicjs.com/v1/${config.bucket.slug}/${todo.slug}`)
		.then(response => {
			if (response) {
			getTodos();
			}
		});
	}	
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	/* main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	} */

	h2 {
    	color: white;
	}

	.jumbotron {
		background-color: cornflowerblue;
	}
	
	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		padding: 40px;
		width: 100%;
		color: black;
		text-align: center;
	}

	.footer-logo {
		width: 25px;
		height: 25px;
	}

	a {
		text-decoration: none;
		color: #108db8;
		font-weight: bold;
	}
	
	img {
		max-width: 100%;
	}
</style>

<div>
	<div class="jumbotron" style="padding:45px 0px">
		 <h2 class="text-center">Svelte & Cosmic JS App</h2>
	   </div>
 </div>
 <div class="container">
   <div class="row">
	 <div class="col-md-6 offset-md-3">
	  
	   <div class="input-group">
		 <input
		   bind:value={todo}
		   class="form-control"
		   placeholder="Enter todo" />
		 <div class="input-group-addon hover-cursor" on:click={handleAddTodo}>
		   <i class="fa fa-plus-circle fa-2x" />
		 </div>
	   </div>
 
	   <div style="margin:5px 0px">
		 <ul class="list-group">
		   {#each todos as todo}
			 <TodoItem
			   {todo}
			   on:deleteTodo={handleDelete}
			   on:toggleComplete={handleComplete} />
		   {/each}
		 </ul>
	   </div>
	 </div>
   </div>
 </div>