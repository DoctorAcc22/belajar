<template>
    <ul>
      <li      
        v-for="(todo, index) in TodoList" :key="index">
        <span class="name">{{todo.name}}</span>
        <span class="delete" @click="Delete(todo.id)">x</span>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    props: {
      todoList: Array,
      deleteItem: Function,
    },
  }
  </script>